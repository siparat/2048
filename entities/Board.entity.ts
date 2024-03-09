import { Dispatch, SetStateAction } from 'react';
import { Direction } from '../enums/directions.enum';
import { cellIsFree } from '../helpers/board.helpers';
import { CellEntity } from './Cell.entity';

export class BoardEntity {
	private freePositions: [number, number][] = [];

	constructor(
		private cells: CellEntity[],
		private setCells: Dispatch<SetStateAction<CellEntity[]>>
	) {
		this.freePositions = Array.from({ length: 4 }, (_, i) => i)
			.map((x, _, arr) => {
				const positions: [number, number][] = [];
				arr.forEach((y) => positions.push([x, y]));
				return positions;
			})
			.flat();
	}

	move(direction: Direction): this {
		const step: [number, number] = [
			(direction % 2 == 0 ? 0 : direction - 2) * -1,
			direction % 2 == 0 ? direction - 1 : 0
		];
		for (let ix = 0 + (direction == Direction.LEFT ? 1 : 0); ix <= 3 - (direction == Direction.RIGHT ? 1 : 0); ix++) {
			for (let iy = 0 + (direction == Direction.UP ? 1 : 0); iy <= 3 - (direction == Direction.DOWN ? 1 : 0); iy++) {
				const index = this.cells.findIndex((cell) => cell.position[0] == ix && cell.position[1] == iy);
				if (index < 0) {
					continue;
				}
				let flag = cellIsFree(this.cells, index, step);
				while (flag) {
					this.cells[index].takeStep(step);
					flag = cellIsFree(this.cells, index, step);
				}
			}
		}
		return this;
	}

	destroyCell(cell: CellEntity): this {
		this.freePositions.push(cell.position);
		this.cells = this.cells.filter(
			({ position }) => !(position[0] == cell.position[0] && position[1] == cell.position[1])
		);
		this.setCells(this.cells);
		return this;
	}

	createCell(value?: number): this {
		const pos = this.getFreePosition();
		this.freePositions = this.freePositions.filter(([x, y]) => !(x == pos[0] && y == pos[1]));
		this.cells.push(new CellEntity(value ?? Math.random() >= 0.75 ? (Math.random() >= 0.8 ? 8 : 4) : 2, pos));
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
}
