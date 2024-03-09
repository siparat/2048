import { Layout } from './layout/Layout';
import { Board } from './components';

export default function App(): JSX.Element {
	return (
		<Layout>
			<Board cells={[]} />
		</Layout>
	);
}
