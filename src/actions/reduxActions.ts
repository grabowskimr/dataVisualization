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

export const insertPackageSearchResults = (packages: Package[]): Action => {
	return {
		type: ACTIONS.INSERT_PACKAGE_SEARCH_RESULTS,
		payload: {
			packages
		}
	};
};

export const clearPackageSearchResults = (): Action => {
	return {
		type: ACTIONS.CLEAR_PACKAGE_SEARCH_RESULTS,
		payload: {}
	};
};

export const showLoader = (): Action => {
	return {
		type: ACTIONS.SHOW_LOADER,
		payload: {}
	};
};

export const hideLoader = (): Action => {
	return {
		type: ACTIONS.HIDE_LOADER,
		payload: {}
	};
};

export const toggleMenu = () => {
	return {
		type: ACTIONS.TOGGLE_MENU,
		payload: {}
	};
};
