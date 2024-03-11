/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IPipe {
	transform(key: string, value: any): any;
}
