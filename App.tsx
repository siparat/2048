import { Layout } from './layout/Layout';
import { Board } from './components';
import { useEffect, useRef, useState } from 'react';
import { CellEntity } from './entities/Cell.entity';
import { BoardEntity } from './entities/Board.entity';
import { Button } from 'react-native';
import { Direction } from './enums/directions.enum';
import { SwipeState } from './interfaces/swipe.interface';

export default function App(): JSX.Element {
	const [cells, setCells] = useState<CellEntity[]>([]);
	const board = useRef(new BoardEntity(cells, setCells)).current;
	const [swipe, setSwipe] = useState<SwipeState>();

	useEffect(() => {
		board.createCell().createCell().update();
	}, []);

	useEffect(() => {
		swipe && board.move(swipe.direction).update();
	}, [swipe]);

	return (
		<Layout>
			<Button onPress={() => setSwipe({ value: 0, direction: Direction.UP })} title="вверх" />
			<Button onPress={() => setSwipe({ value: 0, direction: Direction.RIGHT })} title="вправо" />
			<Button onPress={() => setSwipe({ value: 0, direction: Direction.DOWN })} title="вниз" />
			<Button onPress={() => setSwipe({ value: 0, direction: Direction.LEFT })} title="влево" />
			<Board cells={cells} />
		</Layout>
	);
}
