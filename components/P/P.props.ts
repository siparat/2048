import { TextProps } from 'react-native';

export interface PProps extends TextProps {
	size: 'l' | 'm' | 's';
	color?: `red` | 'white' | 'grey' | 'cyan';
}
