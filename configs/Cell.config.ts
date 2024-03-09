import { CellOptions } from '../interfaces/cell.interface';

export const cellConfig: Record<number, CellOptions> & { default: CellOptions } = {
	2: {
		backgroundColor: '#ebebeb',
		borderColor: '#f4f4f4',
		textColor: '#010001'
	},
	4: {
		backgroundColor: '#d6d6d7',
		borderColor: '#f9fafa',
		textColor: '#0a0a0b'
	},
	8: {
		backgroundColor: '#f5ae75',
		borderColor: '#fecd86',
		textColor: '#ffffff'
	},
	16: {
		backgroundColor: '#f9955f',
		borderColor: '#ffa668',
		textColor: '#ffffff'
	},
	32: {
		backgroundColor: '#f26344',
		borderColor: '#fa704a',
		textColor: '#ffffff'
	},
	64: {
		backgroundColor: '#c72e29',
		borderColor: '#ed342d',
		textColor: '#ffffff'
	},
	128: {
		backgroundColor: '#f1cb6c',
		borderColor: '#fcea7a',
		textColor: '#ffffff'
	},
	256: {
		backgroundColor: '#d5b663',
		borderColor: '#f3d06f',
		textColor: '#ffffff'
	},
	512: {
		backgroundColor: '#d5b664',
		borderColor: '#f5d673',
		textColor: '#fefefd'
	},
	default: {
		backgroundColor: '#f3c808',
		borderColor: '#fbe804',
		textColor: '#fefaed'
	}
};
