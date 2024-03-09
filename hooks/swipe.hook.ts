import { useRef, useState } from 'react';
import { GestureResponderEvent } from 'react-native';
import { Direction } from '../enums/directions.enum';
import { SwipeState, UseSwipeReturnType } from '../interfaces/swipe.interface';

export const useSwipe = (threshold: number): UseSwipeReturnType => {
	const start = useRef<[x: number, y: number] | null>(null);
	const [swipe, setSwipe] = useState<SwipeState>();

	const onTouchStart = (e: GestureResponderEvent): void => {
		start.current = [e.nativeEvent.pageX, e.nativeEvent.pageY];
	};

	const onTouchEnd = (e: GestureResponderEvent): void => {
		if (!start.current) {
			return;
		}
		const xRatio = (e.nativeEvent.pageX - start.current[0]) / threshold;
		const yRatio = (e.nativeEvent.pageY - start.current[1]) / threshold;
		const result = ((): typeof swipe => {
			if (Math.abs(xRatio) >= 1) {
				return { direction: xRatio < 0 ? Direction.UP : Direction.DOWN, value: e.nativeEvent.pageX - start.current[0] };
			}
			if (Math.abs(yRatio) >= 1) {
				return {
					direction: yRatio < 0 ? Direction.LEFT : Direction.RIGHT,
					value: e.nativeEvent.pageY - start.current[1]
				};
			}
		})();
		setSwipe(result);
		start.current = null;
	};

	return {
		onTouchStart,
		onTouchEnd,
		swipe
	};
};
