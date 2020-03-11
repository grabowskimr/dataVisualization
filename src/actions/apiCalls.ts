import axios from 'axios';
import Papa from 'papaparse';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import { saveJobsToStore, saveStatesToStore, savePopulationToStore } from './reduxActions';

type TResult<R> = ThunkAction<R, ReduxState, undefined, Action>;
type TDispatch = ThunkDispatch<ReduxState, undefined, Action>;

export const getStates = (): TResult<Promise<void>> => async (dispatch: TDispatch) => {
	try {
		const { data } = await axios.get('/data/states.json');
		dispatch(saveStatesToStore(data));
		return data;
	} catch (e) {
		console.log(e.message);
	}
};

export const getJobs = (): TResult<Promise<void>> => async (dispatch: TDispatch) => {
	try {
		const { data } = await axios.get('/data/jobs.json');
		dispatch(saveJobsToStore(data));
		return data;
	} catch (e) {
		console.log(e.message);
	}
};

export const getPopulation = (): TResult<Promise<void>> => async (dispatch: TDispatch) => {
	try {
		const { data } = await axios.get('/data/population.csv');
		const parsedData = Papa.parse(data, {
			header: true
		});
		dispatch(savePopulationToStore(parsedData.data));
		return data;
	} catch (e) {
		console.log(e.message);
	}
};
