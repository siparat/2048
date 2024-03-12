import { View, Text } from 'react-native';
import { Button } from '../../../components';
import styles from './WinAlert.styles';
import { useContext } from 'react';
import { AppContext } from '../../../contexts/app.context';
import { WinAlertProps } from './WinAlert.props';
import { Alert } from '../../../components/Alert/Alert';

export const WinAlert = ({ setIsShowAlert }: WinAlertProps): JSX.Element => {
	const { setStage } = useContext(AppContext);

	const continueGame = (): void => {
		setIsShowAlert(false);
	};

	const finishGame = (): void => {
		setStage && setStage('start');
	};

	return (
		<Alert>
			<View style={styles.wrapper}>
				<Text style={styles.text}>YOU WIN!</Text>
				<Button onPress={continueGame} appearance="white">
					Продолжить
				</Button>
				<Button onPress={finishGame} appearance="white">
					Завершить
				</Button>
			</View>
		</Alert>
	);
};
