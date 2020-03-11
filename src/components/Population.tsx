import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Chart from './Chart';
import { getPopulation } from '../actions/apiCalls';

type Props = {
	defaultDataType: string;
	title: string;
	chartType: string;
	maintainAspectRatio: boolean;
};

const Population: React.FC<Props> = (props): JSX.Element => {
	const label = 'State';
	const dispatch = useDispatch();
	const population = useSelector((state: ReduxState) => state.population);
	const [labels, setLabels] = useState(population.map((record: any) => record[label]));
	const [type, setType] = useState(props.defaultDataType);

	useEffect(() => {
		console.log(population);
		if (!population.length) {
			dispatch(getPopulation());
		} else {
			setLabels(population.map((record: any) => record[label]));
		}
	}, [dispatch, population]);

	return (
		<>
			{population.length ? (
				<Chart
					data={population}
					labels={labels}
					displayByValue={type}
					chartType={props.chartType}
					maintainAspectRatio={props.maintainAspectRatio}
				/>
			) : null}
		</>
	);
};

export default Population;
