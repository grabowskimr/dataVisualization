import React, { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Chart from './Chart';
import Search from './Search';
import ChartPlaceholder from '../containers/ChartPlaceholder';
import { getJobs, getStates } from '../actions/apiCalls';

type Props = {
	defaultDataType: string;
	title: string;
	chartType: string;
	maintainAspectRatio: boolean;
};

const JobsChart: React.FC<Props> = (props): JSX.Element => {
	const label = 'name';
	const dispatch = useDispatch();
	// used redux store to cache data from api, which has a very rare update rate
	const allJobs = useSelector((state: ReduxState) => state.jobs);
	const states = useSelector((state: ReduxState) => state.states);
	const [jobs, setJobs] = useState<Job[]>([]);
	const [type, setType] = useState(props.defaultDataType);
	const [labels, setLabels] = useState(jobs.map((record: any) => record[label]));
	const [dataTypes, setDataTypes] = useState<string[]>([]);
	useEffect(() => {
		if (allJobs.length) {
			setJobs(allJobs);
			setDataTypes(Object.keys(allJobs[0]).filter(dataType => dataType !== label));
		} else {
			dispatch(getJobs());
			dispatch(getStates());
		}

		return () => {
			setJobs([]);
		};
	}, [dispatch, allJobs, states]);

	const onSearchHandler = (input: string) => {
		const searchText = input.toLowerCase().replace(/ */g, '');
		let filteredData = [];
		if (/,/gi.test(input)) {
			const searchLabels = searchText.split(/, */);
			filteredData = allJobs.filter(job => searchLabels.includes(job.name.toLowerCase()));
		} else {
			filteredData = allJobs.filter(job => job.name.toLowerCase() === searchText);
		}
		if (filteredData) {
			setLabels(matchNames(filteredData.map((record: any) => record[label])));
			setJobs(filteredData);
		}
	};

	const onEmptyInput = () => {
		setLabels(matchNames(allJobs.map((record: any) => record[label])));
		setJobs(allJobs);
	};

	const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setType(e.target.value);
	};

	const matchNames = (data: string[]): string[] =>
		data.map((label: string) => {
			// @ts-ignore
			return states[label];
		});

	return (
		<div className="jobs-chart">
			<h3 className="jobs-chart-title">{props.title}</h3>
			{setJobs.length && Object.keys(states).length ? (
				<>
					<div className="jobs-chart-search">
						<Search
							handleSearch={onSearchHandler}
							handleEmpty={onEmptyInput}
							types={dataTypes}
							handleSelectChange={onSelectChange}
							type={type}
						/>
					</div>
					<Chart
						data={jobs}
						labels={labels}
						displayByValue={type}
						chartType={props.chartType}
						maintainAspectRatio={props.maintainAspectRatio}
					/>
				</>
			) : (
				<ChartPlaceholder />
			)}
		</div>
	);
};

export default JobsChart;
