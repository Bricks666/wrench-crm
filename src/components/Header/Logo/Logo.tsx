import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces';
import { LogoIcon } from '@/ui/Icons/LogoIcon';

import styles from './Logo.module.css';

export interface LogoProps extends CommonProps {}

export const Logo: React.FC<LogoProps> = React.memo(function Logo(props) {
	const { className } = props;
	return (
		<div className={cn(styles.logo, className)}>
			<LogoIcon className={styles.icon} />
			<p className={styles.title}>Wrench CRM</p>
		</div>
	);
});
