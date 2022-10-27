import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces';

import styles from './Header.module.css';

export interface HeaderProps extends CommonProps {}

export const Header: React.FC<HeaderProps> = React.memo(function Header(props) {
	const { className } = props;
	return <header className={cn(styles.header, className)} />;
});
