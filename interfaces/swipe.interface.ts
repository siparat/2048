import { GestureResponderEvent } from 'react-native';
import { Direction } from '../enums/directions.enum';

export interface SwipeState {
	direction: Direction;
	value: number;
}

export interface UseSwipeReturnType {
	onTouchStart: (e: GestureResponderEvent) => void;
	onTouchEnd: (e: GestureResponderEvent) => void;
	swipe?: SwipeState;
}
