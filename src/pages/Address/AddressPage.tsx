import * as React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { SearchAddress } from '@/components/SearchAddress';
import { SearchAddressResult } from '@/components/SearchAddressResult';

import styles from './AddressPage.module.css';

const AddressPage: React.FC = () => {
	return (
		<MainLayout className={styles.address}>
			<SearchAddress />
			<SearchAddressResult />
		</MainLayout>
	);
};

export default AddressPage;
