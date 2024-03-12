import { View } from 'react-native';
import { Button } from '../../components';
import { Panel } from '../Panel/Panel';
import { useContext } from 'react';
import { AppContext } from '../../contexts/app.context';
import styles from './Start.styles';

export const Start = (): JSX.Element => {
	const { setStage } = useContext(AppContext);

	return (
		<View style={styles.wrapper}>
			<Panel style={styles.panel} hideCurrentScore />
			<Button onPress={() => setStage && setStage('game')}>Начать</Button>
		</View>
	);
};
