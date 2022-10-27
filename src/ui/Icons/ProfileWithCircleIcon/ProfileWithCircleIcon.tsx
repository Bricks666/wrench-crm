import * as React from 'react';
import { CommonProps } from '@/interfaces';
import { SvgIcon } from '../SvgIcon';

export interface ProfileWithCircleIconProps extends CommonProps {}

export const ProfileWithCircleIcon: React.FC<ProfileWithCircleIconProps> = React.memo(
	function ProfileWithCircleIcon(props) {
		const { className } = props;
		return (
			<SvgIcon className={className} viewBox='0 0 48 48'>
				<path
					d='M24 22.449A5.724 5.724 0 1 0 24 11a5.724 5.724 0 0 0 0 11.449Z'
					strokeWidth='2'
					fill='none'
				/>
				<path
					d='M29.724 24.739h.404a3.435 3.435 0 0 1 3.407 3.009l.447 3.576a2.29 2.29 0 0 1-2.272 2.574H16.29a2.293 2.293 0 0 1-2.188-1.614 2.29 2.29 0 0 1-.084-.96l.446-3.576a3.434 3.434 0 0 1 3.41-3.009h.402'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					fill='none'
				/>
				<circle cx='24' cy='24' r='23' strokeWidth='2' fill='none' />
			</SvgIcon>
		);
	}
);
