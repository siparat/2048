/* eslint-disable @typescript-eslint/no-explicit-any */
import * as SecureStore from 'expo-secure-store';
import { IPipe } from '../interfaces/pipe.interface';

export class StorageService {
	store: Pick<typeof localStorage, 'getItem' | 'setItem'>;

	constructor() {
		this.store = typeof window == 'object' ? localStorage : SecureStore;
	}

	save(key: string, value: string): void {
		this.store.setItem(key, value);
	}

	get<T>(key: string, ...pipes: (new () => IPipe)[]): T | null {
		const value = this.store.getItem(key);
		if (!value) {
			return null;
		}
		return pipes.reduce<T>((value, Pipe) => {
			return new Pipe().transform(key, value);
		}, value as any);
	}
}
