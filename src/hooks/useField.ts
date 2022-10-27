import * as React from 'react';
import { VoidFunction } from '@/interfaces';

type AllowedTypes = string | number;

interface UseFieldResult<T extends AllowedTypes> {
	readonly value: T;
	readonly onChange: React.ChangeEventHandler<HTMLInputElement>;
	readonly reset: VoidFunction;
}

export const useField = <T extends AllowedTypes>(defaultValue: T): UseFieldResult<T> => {
	const [value, setValue] = React.useState<T>(defaultValue);

	const onChange = React.useCallback<React.ChangeEventHandler<HTMLInputElement>>((evt) => {
		setValue(evt.target.value as T);
	}, []);

	const reset = React.useCallback(() => {
		setValue(defaultValue);
	}, [defaultValue]);

	return {
		value,
		onChange,
		reset,
	};
};
