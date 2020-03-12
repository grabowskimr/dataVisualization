import React from 'react';

import Paper from './Paper';
import PackageSearch from '../components/PackageSearch';
import PackagesList from './PackagesList';
import PackagesChart from '../components/PackagesChart';

const Packages: React.FC = (): JSX.Element => (
	<div className="packages flex a-start wrap">
		<Paper width={5}>
			<PackageSearch />
			<PackagesList />
		</Paper>
		<Paper width={5}>
			<PackagesChart />
		</Paper>
	</div>
);

export default Packages;
