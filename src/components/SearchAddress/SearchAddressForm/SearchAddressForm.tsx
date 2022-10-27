import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { useField } from '@/hooks';
import { routing } from '@/consts';
import { CommonProps } from '@/interfaces';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

import styles from './SearchAddressForm.module.css';

export interface SearchAddressFormProps extends CommonProps {
	readonly defaultValue?: string | null;
}

export const SearchAddressForm: React.FC<SearchAddressFormProps> = React.memo(
	function SearchAddressForm(props) {
		const { className, defaultValue } = props;
		const query = useField(defaultValue ?? '');
		const navigate = useNavigate();

		const onSubmit: React.FormEventHandler<HTMLFormElement> = (evt) => {
			evt.preventDefault();
			const path = `?${routing.QUERIES.query}=${query.value}`;
			navigate(path, {});
		};

		return (
			<form className={cn(styles.searchAddressForm, className)} onSubmit={onSubmit}>
				<Input value={query.value} onChange={query.onChange} />
				<Button type='submit'>Поиск</Button>
			</form>
		);
	}
);
