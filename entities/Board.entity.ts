import { Dispatch, SetStateAction } from 'react';
import { Direction } from '../enums/directions.enum';
import { CellEntity } from './Cell.entity';

export class BoardEntity {
	constructor(
		private cells: CellEntity[],
		private setCells: Dispatch<SetStateAction<CellEntity[]>>
	) {}

	get freePositions(): [number, number][] {
		return Array.from({ length: 4 }, (_, i) => i)
			.map((x, _, arr) => {
				const positions: [number, number][] = [];
				arr.forEach((y) => positions.push([x, y]));
				return positions;
			})
			.flat()
			.filter(([x, y]) => !this.cells.some(({ position }) => x == position[0] && y == position[1]));
	}

	move(direction: Direction): this {
		const steps: Record<Direction, [number, number]> = {
			[Direction.UP]: [0, -1],
			[Direction.DOWN]: [0, 1],
			[Direction.LEFT]: [-1, 0],
			[Direction.RIGHT]: [1, 0]
		};

		const step = steps[direction];

		for (let i = 0; i < 4; i++) {
			this.cells.forEach((cell) => {
				let newPos: [number, number] = [cell.position[0] + step[0], cell.position[1] + step[1]];

				while (this.positionIsFree(newPos) && this.withinBounds(newPos)) {
					cell.takeStep(step);
					newPos = [cell.position[0] + step[0], cell.position[1] + step[1]];
				}

				if (!this.positionIsFree(newPos) && this.withinBounds(newPos)) {
					const collidedCell = this.cells.find((c) => c.position[0] === newPos[0] && c.position[1] === newPos[1]);

					if (collidedCell && collidedCell.value === cell.value) {
						collidedCell.value *= 2;
						this.destroyCell(cell);
					}
				}
			});
		}

		this.createCell();

		return this;
	}

	destroyCell(cell: CellEntity): this {
		this.cells = this.cells.filter(
			({ position }) => !(position[0] == cell.position[0] && position[1] == cell.position[1])
		);
		return this;
	}

	createCell(value?: number): this {
		const pos = this.getFreePosition();
		this.cells.push(new CellEntity(value ?? (Math.random() >= 0.75 ? (Math.random() >= 0.8 ? 8 : 4) : 2), pos));
		return this;
	}

	getFreePosition(): [number, number] {
		const index = Math.round(Math.random() * (this.freePositions.length - 1));
		if (index < 0) {
			throw new Error('There are no free cells');
		}
		return this.freePositions[index];
	}

	update(): void {
		this.setCells(this.cells);
	}

	private withinBounds(position: [number, number]): boolean {
		const [x, y] = position;
		return x >= 0 && x < 4 && y >= 0 && y < 4;
	}

	private positionIsFree(pos: [number, number]): boolean {
		return this.freePositions.some(([x, y]) => x == pos[0] && y == pos[1]);
	}
}
