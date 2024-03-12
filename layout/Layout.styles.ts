import { StyleSheet } from 'react-native';
import { Color } from '../constants/color.constants';

export default StyleSheet.create({
	layout: {
		width: '100%',
		height: '100%',
		backgroundColor: Color.BACKGROUND,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
