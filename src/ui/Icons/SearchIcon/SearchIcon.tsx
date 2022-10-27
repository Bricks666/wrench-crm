import * as React from 'react';
import { CommonProps } from '@/interfaces';
import { SvgIcon } from '../SvgIcon';

export interface SearchIconProps extends CommonProps {}

export const SearchIcon: React.FC<SearchIconProps> = React.memo(function SearchIcon(props) {
	const { className } = props;
	return (
		<SvgIcon className={className} viewBox='0 0 32 32' fill='none'>
			<path d='M31.904 29.7 21.516 19.312A11.892 11.892 0 0 0 24 12c0-3.208-1.252-6.216-3.516-8.484A11.912 11.912 0 0 0 12 0C8.796 0 5.78 1.252 3.516 3.516A11.905 11.905 0 0 0 0 12c0 3.204 1.252 6.22 3.516 8.484A11.905 11.905 0 0 0 12 24c2.68 0 5.224-.872 7.308-2.48l10.388 10.384a.328.328 0 0 0 .464 0l1.744-1.74a.33.33 0 0 0 0-.464ZM18.336 18.336A8.912 8.912 0 0 1 12 20.96a8.912 8.912 0 0 1-6.336-2.624A8.912 8.912 0 0 1 3.04 12c0-2.392.932-4.644 2.624-6.336A8.912 8.912 0 0 1 12 3.04c2.392 0 4.644.928 6.336 2.624A8.912 8.912 0 0 1 20.96 12a8.905 8.905 0 0 1-2.624 6.336Z' />
		</SvgIcon>
	);
});
