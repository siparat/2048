import { StyleSheet } from 'react-native';
import { Color } from '../../../constants/color.constants';

export default StyleSheet.create({
	wrapper: {
		alignItems: 'center',
		gap: 10,
		justifyContent: 'center',
		paddingHorizontal: 30,
		height: '100%',
		width: '100%'
	},
	text: {
		fontFamily: 'ClearSans',
		marginBottom: 30,
		fontWeight: '700',
		fontSize: 32,
		letterSpacing: 5,
		color: Color.WHITE
	}
});
