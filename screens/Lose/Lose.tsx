import { View, Text } from 'react-native';
import styles from './Lose.styles';
import { Button } from '../../components';
import { Panel } from '../Panel/Panel';
import { useContext } from 'react';
import { AppContext } from '../../contexts/app.context';

export const Lose = (): JSX.Element => {
	const { setStage } = useContext(AppContext);

	return (
		<View style={styles.wrapper}>
			<Panel />
			<Text style={styles.text}>YOU LOSE!</Text>
			<Button onPress={() => setStage && setStage('start')}>На главную</Button>
		</View>
	);
};
