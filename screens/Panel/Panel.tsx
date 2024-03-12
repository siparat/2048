import { View } from 'react-native';
import { PanelProps } from './Panel.props';
import { P } from '../../components';
import { useContext } from 'react';
import { AppContext } from '../../contexts/app.context';
import styles from './Panel.styles';

export const Panel = ({ hideCurrentScore = false, ...props }: PanelProps): JSX.Element => {
	const { score, bestScore } = useContext(AppContext);

	return (
		<View style={styles.panel} {...props}>
			{!hideCurrentScore && (
				<>
					<View>
						<P color="red" size="l">
							your score
						</P>
						<P color="grey" size="m">
							{score}
						</P>
					</View>
					<View style={styles.devider} />
				</>
			)}
			<View>
				<P color="red" size="l">
					best score
				</P>
				<P color="grey" size="m">
					{Math.max(score, bestScore)}
				</P>
			</View>
		</View>
	);
};
