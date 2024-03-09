import { ReactNode } from 'react';
import { ViewProps } from 'react-native';

export interface LayoutProps extends ViewProps {
	children: ReactNode;
}
