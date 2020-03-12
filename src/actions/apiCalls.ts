import axios from 'axios';
import Papa from 'papaparse';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import {
	saveJobsToStore,
	saveStatesToStore,
	savePopulationToStore,
	insertPackageSearchResults,
	showLoader,
	hideLoader,
	clearPackageSearchResults
} from './reduxActions';
import { api } from '../constants/config';

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

export const getJobsWithStates = (): TResult<Promise<void>> => async (dispatch: TDispatch) => {
	try {
		const { data: states } = await axios.get('/data/states.json');
		const { data: jobs } = await axios.get('/data/jobs.json');

		const combinedJobs = jobs.map((job: Job) => {
			return {
				...job,
				fullStateName: states[job.name.toUpperCase()]
			};
		});

		dispatch(saveJobsToStore(combinedJobs));
		return combinedJobs;
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

export const getGroups = async (): Promise<string[]> => {
	try {
		const { data }: ResponseData<Groups> = await axios.get(`${api}/action/group_list`);
		console.log(data.result);
		return data.result;
	} catch (e) {
		console.log(e.message);
		return [];
	}
};

export const searchForPackage = (query: string): TResult<Promise<void>> => async (dispatch: TDispatch) => {
	try {
		dispatch(showLoader());
		dispatch(clearPackageSearchResults());
		const { data }: ResponseData<Packages> = await axios.get(`${api}/action/package_search`, {
			params: {
				q: query
			}
		});
		dispatch(hideLoader());
		dispatch(insertPackageSearchResults(data.result.results));
	} catch (e) {
		console.log(e.message);
	}
};
