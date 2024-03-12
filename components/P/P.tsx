import { PProps } from './P.props';
import { Text } from 'react-native';
import styles from './P.styles';
import { Color } from '../../constants/color.constants';

export const P = ({ size, color = 'white', children }: PProps): JSX.Element => {
	return (
		<Text style={{ ...styles.common, ...styles[size], color: Color[color.toUpperCase() as keyof typeof Color] }}>
			{children}
		</Text>
	);
};
