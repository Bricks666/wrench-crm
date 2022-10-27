import * as React from 'react';
import { CommonProps } from '@/interfaces';
import { routing } from '@/consts';
import { useQueryParam } from '@/hooks';
import { AddressList } from '../AddressList';

export interface SearchAddressResultProps extends CommonProps {}

export const SearchAddressResult: React.FC<SearchAddressResultProps> = React.memo(
	function SearchAddressResult(props) {
		const { className } = props;
		const query = useQueryParam(routing.QUERIES.query);

		if (!query) {
			return null;
		}

		return <AddressList className={className} query={query} />;
	}
);
