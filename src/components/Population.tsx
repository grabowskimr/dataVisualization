import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Chart from './Chart';
import { getPopulation } from '../actions/apiCalls';
import ChartContainer from './ChartContainer';

type Props = {
	defaultDataType: string;
	title: string;
	chartType: string;
	maintainAspectRatio: boolean;
	className?: string;
};

const Population: React.FC<Props> = (props): JSX.Element => {
	const label = 'State';
	const dispatch = useDispatch();
	const population = useSelector((state: ReduxState) => state.population);

	useEffect(() => {
		!population.length && dispatch(getPopulation());
	}, [dispatch, population]);

	return (
		<div className={`population ${props.className ? props.className : ''}`}>
			<ChartContainer
				data={population}
				defaultValueInChart={props.defaultDataType}
				maintainAspectRatio={props.maintainAspectRatio}
				chartType={props.chartType}
				label={label}
				showSearch={false}
				searchBy="name"
				title={props.title}
			/>
		</div>
	);
};

export default Population;
