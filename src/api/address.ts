import { Address } from '@/models';
import { api } from '@/consts';

export interface GetAddressParams {
	readonly query: string;
}

export const getAll = async (params: GetAddressParams): Promise<Address[]> => {
	const response = await fetch(api.URL, {
		method: 'POST',
		mode: 'cors',
		body: JSON.stringify({
			...params,
			count: 20,
		}),
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Token ${api.KEY}`,
		},
	});

	if (response.ok) {
		const json = await response.json();
		return json.suggestions;
	}

	throw new Error('Incorrect request');
};
