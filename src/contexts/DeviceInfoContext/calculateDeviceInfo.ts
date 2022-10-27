import { Device, DeviceInfo } from './types';

export const calculateDeviceInfo = (width: number): DeviceInfo => {
	let device: Device;
	if (width >= 1440) {
		device = 'desktop';
	} else if (width >= 1024) {
		device = 'small-desktop';
	} else if (width >= 780) {
		device = 'tablet-horizontal';
	} else if (width >= 580) {
		device = 'tablet-vertical';
	} else {
		device = 'mobile';
	}

	return {
		device,
		isDesktop: device === 'desktop',
		isSmallDesktop: device === 'small-desktop',
		isTabletHorizontal: device === 'tablet-horizontal',
		isTabletVertical: device === 'tablet-vertical',
		isMobile: device === 'mobile',
	};
};
