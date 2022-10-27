import * as React from 'react';

interface Route {
	readonly path: string;
	readonly Component: React.ComponentType;
}

export const routes: Route[] = [];
