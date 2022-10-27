import { useContext } from 'react';
import { deviceInfoContext } from './context';

export const useDeviceInfo = () => {
	const context = useContext(deviceInfoContext);

	if (!context) {
		throw new Error('Hook useDeviceInfo musts be used only inside DeviceInfoProvider');
	}

	return context;
};
