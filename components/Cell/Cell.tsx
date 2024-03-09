import { View, Text } from 'react-native';
import { CellProps } from './Cell.props';
import styles from './Cell.styles';

export const Cell = ({ entity }: CellProps): JSX.Element => {
	return (
		<View
			style={{
				...styles.cell,
				top: 81 * entity.position[1],
				left: 81 * entity.position[0],
				backgroundColor: entity.options.backgroundColor,
				borderColor: entity.options.borderColor
			}}>
			<Text style={{ ...styles.text, color: entity.options.textColor }}>{entity.value}</Text>
		</View>
	);
};
