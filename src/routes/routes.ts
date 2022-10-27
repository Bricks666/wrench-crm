import * as React from 'react';

interface Route {
	readonly path: string;
	readonly Component: React.ComponentType;
}

const AddressPage = React.lazy(() => import('@/pages/Address'));
const NotFoundPage = React.lazy(() => import('@/pages/NotFound'));

export const routes: Route[] = [
	{
		path: '/address',
		Component: AddressPage,
	},
	{
		path: '*',
		Component: NotFoundPage,
	},
];
