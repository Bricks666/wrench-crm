import * as React from 'react';
import { CommonProps } from '@/interfaces';
import { SvgIcon } from '../SvgIcon';

export interface HomeIconProps extends CommonProps {}

export const HomeIcon: React.FC<HomeIconProps> = React.memo(function HomeIcon(props) {
	const { className } = props;
	return (
		<SvgIcon className={className} viewBox='0 0 32 32' fill='none'>
			<path d='M31.002 16.995a1.002 1.002 0 0 1-.711-.29L15.972 2.401 1.654 16.705A1.003 1.003 0 0 1 0 15.985a1 1 0 0 1 .24-.69L15.27.291a1.003 1.003 0 0 1 1.413 0l15.03 15.004a1 1 0 0 1-.712 1.7Z' />
			<path d='M15.973 5.783 3.95 17.826V30a1.999 1.999 0 0 0 2.004 2h7.014V21.997h6.012V32h7.014a2.006 2.006 0 0 0 2.004-2V17.756L15.973 5.783Z' />
		</SvgIcon>
	);
});
