import { StyleSheet } from 'react-native';
import { Color } from '../../constants/color.constants';

export default StyleSheet.create({
	button: {
		display: 'flex',
		paddingVertical: 20,
		width: '100%',
		borderRadius: 12,
		alignItems: 'center',
		justifyContent: 'center'
	},
	white: {
		backgroundColor: Color.WHITE
	},
	red: {
		backgroundColor: Color.RED
	},
	whiteText: {
		color: Color.BACKGROUND
	},
	redText: {
		color: Color.WHITE
	},
	text: {
		fontFamily: 'ClearSans',
		fontSize: 18,
		lineHeight: 22,
		fontWeight: '700'
	}
});
