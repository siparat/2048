import { Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from './Button.props';
import styles from './Button.styles';

export const Button = ({ children, appearance = 'red', style, ...props }: ButtonProps): JSX.Element => {
	return (
		<TouchableOpacity
			{...props}
			style={{ ...styles.button, ...(typeof style == 'object' ? style : {}), ...styles[appearance] }}>
			<Text style={{ ...styles.text, ...styles[`${appearance}Text`] }}>{children}</Text>
		</TouchableOpacity>
	);
};
