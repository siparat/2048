import { View } from 'react-native';
import styles from './Board.styles';
import { BoardProps } from './Board.props';
import { Cell } from '../Cell/Cell';

export const Board = ({ cells }: BoardProps): JSX.Element => {
	return (
		<View style={styles.board}>
			<View style={styles.wrapper}>
				{cells.map((cell, i) => (
					<Cell key={i} entity={cell} />
				))}
			</View>
		</View>
	);
};
