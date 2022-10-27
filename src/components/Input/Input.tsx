import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces';

import styles from './Input.module.css';

export interface InputProps extends CommonProps, React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = React.memo(function Input(props) {
	const { className, ...rest } = props;
	return <input className={cn(styles.input, className)} {...rest} />;
});
