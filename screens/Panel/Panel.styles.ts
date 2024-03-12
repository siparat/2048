import { StyleSheet } from 'react-native';
import { Color } from '../../constants/color.constants';

export default StyleSheet.create({
	panel: { flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 30 },
	devider: { width: 2, height: '100%', backgroundColor: Color.GREY }
});
