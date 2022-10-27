import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces';
import { useDeviceInfoQuery } from '@/contexts/DeviceInfoContext';
import { ProfileWithCircleIcon } from '@/ui/Icons/ProfileWithCircleIcon';

import styles from './ProfileLink.module.css';

export interface ProfileLinkProps extends CommonProps {}

export const ProfileLink: React.FC<ProfileLinkProps> = React.memo(function ProfileLink(props) {
	const { className } = props;
	const showTitle = !useDeviceInfoQuery(['mobile', 'tablet-vertical']);
	return (
		<div className={cn(styles.profileLink, className)}>
			<ProfileWithCircleIcon className={styles.icon} />
			{showTitle && <p className={styles.title}>Имя Фамилия</p>}
		</div>
	);
});
