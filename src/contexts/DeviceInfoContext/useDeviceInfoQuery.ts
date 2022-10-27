import { Device } from './types';
import { useDeviceInfo } from './useDeviceInfo';

export const useDeviceInfoQuery = (devices: Device | Device[]): boolean => {
	const deviceInfo = useDeviceInfo();
	const device = typeof devices === 'string' ? [devices] : devices;

	return device.some((d) => deviceInfo.device === d);
};
