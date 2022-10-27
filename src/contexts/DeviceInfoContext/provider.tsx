import * as React from 'react';
import { calculateDeviceInfo } from './calculateDeviceInfo';
import { deviceInfoContext } from './context';

export const DeviceInfoProvider: React.FC<React.PropsWithChildren> = (props) => {
	const { children } = props;
	const [deviceInfo, setDeviceInfo] = React.useState(() => calculateDeviceInfo(window.innerWidth));

	const onResize = React.useCallback(() => {
		const newInfo = calculateDeviceInfo(window.innerWidth);
		setDeviceInfo((oldInfo) => (newInfo.device === oldInfo.device ? oldInfo : newInfo));
	}, []);

	React.useLayoutEffect(() => {
		window.addEventListener('resize', onResize);

		return () => {
			window.removeEventListener('resize', onResize);
		};
	}, []);

	return <deviceInfoContext.Provider value={deviceInfo}>{children}</deviceInfoContext.Provider>;
};
