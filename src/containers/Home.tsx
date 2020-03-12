import React from 'react';

import Paper from './Paper';
import JobsChart from '../components/JobsChart';
import Population from '../components/Population';

const Home: React.FC = (): JSX.Element => (
	<div className="home flex wrap">
		<Paper width={10} className="">
			<JobsChart defaultDataType="agriculture" title="Jobs Table" chartType="bar" maintainAspectRatio={false} />
		</Paper>
		<Paper width={5}>
			<JobsChart defaultDataType="manufacturing" title="Jobs Table" chartType="polarArea" maintainAspectRatio={true} />
		</Paper>
		<Paper width={5}>
			<Population defaultDataType="5 to 13 Years" title="Population in US states" chartType="doughnut" maintainAspectRatio={true} />
		</Paper>
	</div>
);

export default Home;
