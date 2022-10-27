export type Device =
	| 'mobile'
	| 'tablet-vertical'
	| 'tablet-horizontal'
	| 'small-desktop'
	| 'desktop';

export interface DeviceInfo {
	readonly device: Device;
	readonly isMobile: boolean;
	readonly isTabletVertical: boolean;
	readonly isTabletHorizontal: boolean;
	readonly isSmallDesktop: boolean;
	readonly isDesktop: boolean;
}
