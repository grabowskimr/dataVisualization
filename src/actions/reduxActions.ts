import ACTIONS from '../constants/actions';

export const saveJobsToStore = (jobs: Job[]): Action => {
	return {
		type: ACTIONS.SAVE_FETCHED_JOBS,
		payload: {
			jobs
		}
	};
};

export const saveStatesToStore = (states: States): Action => {
	return {
		type: ACTIONS.SAVE_FETCHED_STATES,
		payload: {
			states
		}
	};
};

export const savePopulationToStore = (population: any): Action => {
	return {
		type: ACTIONS.SAVE_FETCHED_POPULATION,
		payload: {
			population
		}
	};
};
