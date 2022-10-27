import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces';

import styles from './Button.module.css';

export interface ButtonProps extends CommonProps, React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = (props) => {
	const { className, children, ...rest } = props;
	return (
		<button className={cn(styles.button, className)} {...rest}>
			{children}
		</button>
	);
};
