import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
				defaultTypeInChart={props.defaultDataType}
				maintainAspectRatio={props.maintainAspectRatio}
				chartType={props.chartType}
				label={label}
				showSearch={true}
				searchBy="name"
				title={props.title}
				onlySelect={true}
			/>
		</div>
	);
};

export default Population;
