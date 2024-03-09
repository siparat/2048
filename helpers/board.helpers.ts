import { CellEntity } from '../entities/Cell.entity';

export const cellIsFree = (cells: CellEntity[], findedCellIndex: number, step: [number, number]): boolean => {
	return !cells.find(
		(cell) =>
			cells[findedCellIndex].position[0] + step[0] == cell.position[0] &&
			cells[findedCellIndex].position[1] + step[1] == cell.position[1]
	);
};
