import { Layout } from './layout/Layout';
import { Board } from './components';
import { useEffect, useState } from 'react';
import { CellEntity } from './entities/Cell.entity';
import { BoardEntity } from './entities/Board.entity';

export default function App(): JSX.Element {
	const [cells, setCells] = useState<CellEntity[]>([]);
	const board = new BoardEntity(cells, setCells);

	useEffect(() => {
		board.createCell().createCell().update();
	}, []);

	return (
		<Layout>
			<Board cells={cells} />
		</Layout>
	);
}
