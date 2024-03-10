import { Animated, Text } from 'react-native';
import { CellProps } from './Cell.props';
import styles from './Cell.styles';
import { useState, useEffect } from 'react';

export const Cell = ({ entity }: CellProps): JSX.Element => {
	const [left, setLeft] = useState(entity.beforePosition[0]);
	const [top, setTop] = useState(entity.beforePosition[1]);

	useEffect(() => {
		const position = entity.position;
		const newTop = 81 * position[1];
		const newLeft = 81 * position[0];
		setTop(newTop);
		setLeft(newLeft);
	}, [entity.position]);

	return (
		<Animated.View
			style={{
				...styles.cell,
				top,
				left,
				backgroundColor: entity.options.backgroundColor,
				borderColor: entity.options.borderColor
			}}>
			<Text style={{ ...styles.text, color: entity.options.textColor }}>{entity.value}</Text>
		</Animated.View>
	);
};
