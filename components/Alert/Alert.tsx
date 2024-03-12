import { Animated } from 'react-native';
import styles from './Alert.styles';
import { useEffect, useRef } from 'react';
import { AlertProps } from './Alert.props';

export const Alert = ({ children }: AlertProps): JSX.Element => {
	const opacity = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(opacity, {
			duration: 300,
			toValue: 0.8,
			useNativeDriver: false
		}).start();
	}, [opacity]);

	return <Animated.View style={{ ...styles.alert, opacity }}>{children}</Animated.View>;
};
