import React from 'react';
import { useDispatch } from 'react-redux';

import Search from './Search';
import { searchForPackage } from '../actions/apiCalls';

const PackageSearch: React.FC = (): JSX.Element => {
	const dispatch = useDispatch();

	const handleSearch = (input: string) => {
		dispatch(searchForPackage(input));
	};

	return <Search searchPlaceholder="Search for packages" handleSearch={handleSearch} />;
};

export default PackageSearch;
