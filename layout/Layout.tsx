import { useFonts } from 'expo-font';
import { View } from 'react-native';
import styles from './Layout.styles';
import { LayoutProps } from './Layout.props';
import { Loader } from '../components';

export const Layout = ({ children, ...props }: LayoutProps): JSX.Element => {
	const [fontsLoaded, fontError] = useFonts({
		ClearSans: require('../assets/fonts/ClearSans.ttf')
	});

	if (!fontsLoaded && !fontError) {
		return <Loader />;
	}

	return (
		<View {...props} style={styles.layout}>
			{children}
		</View>
	);
};
