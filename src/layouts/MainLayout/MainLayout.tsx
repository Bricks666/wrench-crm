import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces';
import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { Container } from '@/ui/Container';

import styles from './MainLayout.module.css';

export interface MainLayoutProps extends CommonProps {}

export const MainLayout: React.FC<React.PropsWithChildren<MainLayoutProps>> = (props) => {
	const { className, children } = props;
	return (
		<Container className={styles.mainLayout}>
			<Header className={styles.header} />
			<Navigation className={styles.navigation} />
			<main className={cn(styles.main, className)}>{children}</main>
		</Container>
	);
};
