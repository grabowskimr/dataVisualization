import React from 'react';
import { useSelector } from 'react-redux';

import ChartContainer from './ChartContainer';

const PackagesChart: React.FC = (): JSX.Element => {
	const packages = useSelector((state: ReduxState) => state.packages);
	const loaderVisible = useSelector((state: ReduxState) => state.loaderVisible);
	const types = ['num_tags', 'num_resources'];

	return (
		<>
			{loaderVisible || packages.length ? (
				<ChartContainer
					data={packages}
					defaultTypeInChart={types[0]}
					maintainAspectRatio={true}
					chartType="pie"
					label="title"
					showSearch={true}
					types={types}
					onlySelect={true}
				/>
			) : (
				<div className="no-data-info">
					<h3 className="title">Search for data</h3>
				</div>
			)}
		</>
	);
};

export default PackagesChart;
