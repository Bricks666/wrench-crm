import * as React from 'react';
import { CommonProps } from '@/interfaces';
import { SvgIcon } from '../SvgIcon';

export interface CalendarIconProps extends CommonProps {}

export const CalendarIcon: React.FC<CalendarIconProps> = React.memo(function CalendarIcon(props) {
	const { className } = props;
	return (
		<SvgIcon className={className} viewBox='0 0 32 32' fill='none'>
			<path d='M7.11 14.4h3.555v3.2H7.109v-3.2Zm0 6.4h3.555V24H7.109v-3.2Zm7.11-6.4h3.556v3.2H14.22v-3.2Zm0 6.4h3.556V24H14.22v-3.2Zm7.112-6.4h3.555v3.2h-3.555v-3.2Zm0 6.4h3.555V24h-3.555v-3.2Z' />
			<path d='M3.556 32h24.888C30.405 32 32 30.565 32 28.8V6.4c0-1.765-1.595-3.2-3.556-3.2H24.89V0h-3.556v3.2H10.667V0H7.11v3.2H3.556C1.595 3.2 0 4.635 0 6.4v22.4C0 30.565 1.595 32 3.556 32ZM28.444 9.6l.002 19.2H3.556V9.6h24.888Z' />
		</SvgIcon>
	);
});
