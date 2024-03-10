import { CellOptions } from '../interfaces/cell.interface';
import { cellConfig } from '../configs/Cell.config';

export class CellEntity {
	private _position: [x: number, y: number];
	beforePosition: [number, number];

	constructor(
		public value: number,
		position: [x: number, y: number]
	) {
		this._position = position;
		this.beforePosition = position;
	}

	set position(position: [number, number]) {
		this.beforePosition = this._position;
		this._position = position;
	}

	get position(): typeof this._position {
		return this._position;
	}

	get options(): CellOptions {
		return cellConfig[this.value] || cellConfig.default;
	}

	takeStep(step: [number, number]): void {
		this._position = this._position.map((v, i) => v + step[i]) as [number, number];
	}
}
