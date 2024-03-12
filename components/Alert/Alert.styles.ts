import { StyleSheet } from 'react-native';
import { Color } from '../../constants/color.constants';

export default StyleSheet.create({
	alert: {
		position: 'absolute',
		zIndex: 10,
		width: '100%',
		height: '100%',
		backgroundColor: Color.RED
	}
});
