import { IPipe } from '../interfaces/pipe.interface';

export class ParseNumberPipe implements IPipe {
	transform(_: string, value: string): number {
		const result = Number(value);
		if (Number.isNaN(result)) {
			throw new Error('В строке нет числа');
		}
		return result;
	}
}
