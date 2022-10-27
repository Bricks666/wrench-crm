import * as React from 'react';
import { Navigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
	return <Navigate to='/address' replace />;
};

export default NotFoundPage;
