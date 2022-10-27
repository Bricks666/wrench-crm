import * as React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { routing } from '@/consts';
import { useQueryParam } from '@/hooks';
import { SearchAddressForm } from '@/components/SearchAddressForm';
import { AddressList } from '@/components/AddressList';

import styles from './AddressPage.module.css';

const AddressPage: React.FC = () => {
	const query = useQueryParam(routing.QUERIES.query);

	return (
		<MainLayout className={styles.address}>
			<div className={styles.titleContainer}>
				<h2 className={styles.title}>Поиск адресов</h2>
				<p className={styles.subtitle}>Введите интересующий вас адрес</p>
			</div>
			<SearchAddressForm defaultValue={query} />
			{query ? <AddressList query={query} /> : null}
		</MainLayout>
	);
};

export default AddressPage;
