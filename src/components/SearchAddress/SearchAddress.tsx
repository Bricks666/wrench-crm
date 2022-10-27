import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces';
import { useQueryParam } from '@/hooks';
import { routing } from '@/consts';
import { SearchAddressForm } from './SearchAddressForm';

import styles from './SearchAddress.module.css';

export interface SearchAddressProps extends CommonProps {}

export const SearchAddress: React.FC<SearchAddressProps> = React.memo(function SearchAddress(
	props
) {
	const { className } = props;
	const query = useQueryParam(routing.QUERIES.query);
	return (
		<section className={cn(styles.searchAddress, className)}>
			<div className={styles.titleContainer}>
				<h2 className={styles.title}>Поиск адресов</h2>
				<p className={styles.subtitle}>Введите интересующий вас адрес</p>
			</div>
			<SearchAddressForm defaultValue={query} />
		</section>
	);
});
