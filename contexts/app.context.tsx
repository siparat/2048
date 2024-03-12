import { Dispatch, PropsWithChildren, SetStateAction, createContext, useEffect, useRef, useState } from 'react';
import { StorageService } from '../services/storage.service';
import { ParseNumberPipe } from '../pipes/parse-number.pipe';
import { StorageKeys } from '../constants/storage-keys.constants';
import { GameStage } from '../interfaces/game.interface';

interface IAppContext {
	bestScore: number;
	score: number;
	setScore?: Dispatch<SetStateAction<number>>;
	setStage?: Dispatch<SetStateAction<GameStage>>;
}

export const AppContext = createContext<IAppContext>({ bestScore: 0, score: 0 });

export const AppContextProvider = ({
	children,
	setStage
}: PropsWithChildren<{ setStage: Dispatch<SetStateAction<GameStage>> }>): JSX.Element => {
	const [score, setScore] = useState<number>(0);
	const [bestScore, setBestScore] = useState<number>(0);
	const storage = useRef(new StorageService());

	useEffect(() => {
		setBestScore(storage.current.get<number>(StorageKeys.BEST_SCORE, ParseNumberPipe) ?? 0);
	}, []);

	useEffect(() => {
		if (!bestScore || bestScore >= score) {
			return;
		}
		storage.current.save(StorageKeys.BEST_SCORE, score.toString());
	}, [score]);

	return (
		<AppContext.Provider value={{ setStage, bestScore: bestScore ?? 0, score, setScore }}>
			{children}
		</AppContext.Provider>
	);
};
