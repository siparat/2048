import { IPipe } from '../interfaces/pipe.interface';

export class ParseJSONPipe implements IPipe {
	transform(_: string, value: string): object {
		return JSON.parse(value);
	}
}
