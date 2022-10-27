import { createContext } from 'react';
import { DeviceInfo } from './types';

export const deviceInfoContext = createContext<DeviceInfo | null>(null);
