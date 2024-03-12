import { StatusBar } from 'expo-status-bar';
import { AppContextProvider } from './contexts/app.context';
import { Layout } from './layout/Layout';
import { Game, Lose, Start } from './screens';
import { useState } from 'react';
import { GameStage } from './interfaces/game.interface';

export default function App(): JSX.Element {
	const [stage, setStage] = useState<GameStage>('start');

	const getScreen = (stage: GameStage): JSX.Element => {
		switch (stage) {
			case 'game':
				return <Game />;
			case 'lose':
				return <Lose />;
			default:
				return <Start />;
		}
	};

	return (
		<AppContextProvider setStage={setStage}>
			<Layout>
				<StatusBar hidden />
				{getScreen(stage)}
			</Layout>
		</AppContextProvider>
	);
}
