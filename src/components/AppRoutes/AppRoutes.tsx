import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CommonProps } from '@/interfaces/common';
import { routes } from '@/routes';

export interface AppRoutesProps extends CommonProps {}

export const AppRoutes: React.FC<AppRoutesProps> = React.memo(function AppRoutes() {
	return (
		<Routes>
			{routes.map((route) => {
				const { Component, path } = route;
				return <Route path={path} element={<Component />} key={path} />;
			})}
		</Routes>
	);
});
