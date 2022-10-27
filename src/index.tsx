import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { App } from './app';

import './styles/styles.css';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

const client = new QueryClient();

root.render(
	<BrowserRouter>
		<QueryClientProvider client={client}>
			<App />
		</QueryClientProvider>
	</BrowserRouter>
);
