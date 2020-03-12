import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import ACTIONS from '../constants/actions';

export const initialState: ReduxState = {
	jobs: [],
	states: {},
	population: [],
	packages: [],
	loaderVisible: false,
	toggleMenu: false
};

export const appReducer = (state = initialState, action: Action): ReduxState => {
	switch (action.type) {
		case ACTIONS.SAVE_FETCHED_JOBS:
			return {
				...state,
				jobs: action.payload.jobs ? action.payload.jobs : []
			};
		case ACTIONS.SAVE_FETCHED_STATES:
			return {
				...state,
				states: action.payload.states ? action.payload.states : {}
			};
		case ACTIONS.SAVE_FETCHED_POPULATION:
			return {
				...state,
				population: action.payload.population ? action.payload.population : []
			};
		case ACTIONS.INSERT_PACKAGE_SEARCH_RESULTS:
			return {
				...state,
				packages: action.payload.packages ? action.payload.packages : []
			};
		case ACTIONS.CLEAR_PACKAGE_SEARCH_RESULTS:
			return {
				...state,
				packages: []
			};
		case ACTIONS.SHOW_LOADER:
			return {
				...state,
				loaderVisible: true
			};
		case ACTIONS.HIDE_LOADER:
			return {
				...state,
				loaderVisible: false
			};
		case ACTIONS.TOGGLE_MENU:
			return {
				...state,
				toggleMenu: !state.toggleMenu
			};
		default:
			return state;
	}
};

export default createStore(appReducer, applyMiddleware<ThunkMiddleware>(thunk));
