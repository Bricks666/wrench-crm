import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces';

import styles from './SvgIcon.module.css';

export interface SvgIconProps extends CommonProps, React.SVGAttributes<SVGElement> {}

export const SvgIcon: React.FC<SvgIconProps> = (props) => {
	const { className, children, ...rest } = props;
	return (
		<svg className={cn(styles.svgIcon, className)} {...rest}>
			{children}
		</svg>
	);
};
