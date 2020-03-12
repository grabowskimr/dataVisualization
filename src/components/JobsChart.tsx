import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ChartContainer from './ChartContainer';
import { getJobsWithStates } from '../actions/apiCalls';

type Props = {
	defaultDataType: string;
	title: string;
	chartType: string;
	maintainAspectRatio: boolean;
	className?: string;
};

const JobsChart: React.FC<Props> = (props): JSX.Element => {
	const label = 'fullStateName';
	const dispatch = useDispatch();
	// used redux store to cache data from api, which has a very rare update rate ;)
	const jobs = useSelector((state: ReduxState) => state.jobs);

	useEffect(() => {
		!jobs.length && dispatch(getJobsWithStates());
	}, [dispatch, jobs]);

	return (
		<div className={`jobs ${props.className ? props.className : ''}`}>
			<ChartContainer
				data={jobs}
				defaultTypeInChart={props.defaultDataType}
				maintainAspectRatio={props.maintainAspectRatio}
				chartType={props.chartType}
				label={label}
				showSearch={true}
				searchBy="name"
				title={props.title}
				searchPlaceholder="Search eg. CA, NY, WW"
			/>
		</div>
	);
};

export default JobsChart;
