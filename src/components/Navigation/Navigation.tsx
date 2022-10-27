import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces';

import styles from './Navigation.module.css';

export interface NavigationProps extends CommonProps {}

export const Navigation: React.FC<NavigationProps> = React.memo(function Navigation(props) {
	const { className } = props;
	return <nav className={cn(styles.navigation, className)} />;
});
