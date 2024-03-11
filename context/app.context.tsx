import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from 'react';
import { StorageService } from '../services/storage.service';
import { ParseNumberPipe } from '../pipes/parse-number.pipe';

interface IAppContext {
	bestScore: number;
	score: number;
	setScore?: Dispatch<SetStateAction<number>>;
}

export const AppContext = createContext<IAppContext>({ bestScore: 0, score: 0 });

export const AppContextProvider = ({ children }: PropsWithChildren): JSX.Element => {
	const [score, setScore] = useState<number>(0);
	const bestScore = new StorageService().get<number>('bestScore', ParseNumberPipe);

	return <AppContext.Provider value={{ bestScore: bestScore ?? 0, score, setScore }}>{children}</AppContext.Provider>;
};
