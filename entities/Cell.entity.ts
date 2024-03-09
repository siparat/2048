import { CellOptions } from '../interfaces/cell.interface';
import { cellConfig } from '../configs/Cell.config';

export class CellEntity {
	constructor(
		public value: number,
		public position: [x: number, y: number]
	) {}

	get options(): CellOptions {
		return cellConfig[this.value] || cellConfig.default;
	}

	takeStep(step: [number, number]): void {
		this.position = this.position.map((v, i) => v + step[i]) as [number, number];
	}
}
