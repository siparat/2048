import { useState, useRef, useEffect, useContext } from 'react';
import { Board } from '../../components';
import { BoardEntity } from '../../entities/board.entity';
import { CellEntity } from '../../entities/cell.entity';
import { Panel } from '../Panel/Panel';
import styles from './Game.styles';
import { View } from 'react-native';
import { useSwipe } from '../../hooks/swipe.hook';
import { AppContext } from '../../contexts/app.context';
import { WinAlert } from './WinAlert/WinAlert';

export const Game = (): JSX.Element => {
	const [isShowAlert, setIsShowAlert] = useState<boolean | null>(null);
	const [cells, setCells] = useState<CellEntity[]>([]);
	const { setScore, setStage } = useContext(AppContext);
	const board = useRef(new BoardEntity(cells, setCells, setScore)).current;
	const { swipe, ...props } = useSwipe(100);

	useEffect(() => {
		setScore && setScore(0);
		board.createCell().createCell().update();
	}, []);

	useEffect(() => {
		try {
			swipe && board.move(swipe.direction).update();
			if (isShowAlert == null && cells.some((cell) => cell.value == 2048)) {
				setIsShowAlert(true);
			}
		} catch (error) {
			setStage && setStage('lose');
		}
	}, [swipe]);

	return (
		<View {...props} style={styles.wrapper}>
			{isShowAlert && <WinAlert setIsShowAlert={setIsShowAlert} />}
			<Panel />
			<Board cells={cells} />
		</View>
	);
};
