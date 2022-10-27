import { useSearchParams } from 'react-router-dom';

export const useQueryParam = (key: string): string | null => {
	const [params] = useSearchParams();

	return params.get(key);
};
