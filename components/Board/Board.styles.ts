import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	board: {
		borderColor: '#f0f0e2',
		borderWidth: 2,
		borderRadius: 15,
		padding: 25,
		display: 'flex',
		flexWrap: 'wrap',
		width: 360,
		height: 362,
		gap: 16
	},
	wrapper: {
		position: 'relative'
	}
});
