import * as React from 'react';
import cn from 'classnames';
import { useQuery } from 'react-query';
import { addressApi } from '@/api';
import { CommonProps } from '@/interfaces';

import styles from './AddressList.module.css';

export interface AddressListProps extends CommonProps {
	readonly query: string;
}

export const AddressList: React.FC<AddressListProps> = React.memo(function AddressList(props) {
	const { className, query } = props;
	const { data: addresses, isLoading } = useQuery(['address', query], () =>
		addressApi.getAll({ query })
	);

	if (isLoading) {
		return <>Loading...</>;
	}

	if (!addresses?.length) {
		return null;
	}

	return (
		<section className={cn(styles.addressList, className)}>
			<h2 className={styles.title}>Адреса</h2>
			<ul>
				{addresses?.map((address) => {
					const { value } = address;
					return (
						<li className={styles.item} key={value}>
							{value}
						</li>
					);
				})}
			</ul>
		</section>
	);
});
