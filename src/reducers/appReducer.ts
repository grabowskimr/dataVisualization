import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import ACTIONS from '../constants/actions';

export const initialState: ReduxState = {
	jobs: [],
	states: {},
	population: []
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
		default:
			return state;
	}
};

export default createStore(appReducer, applyMiddleware<ThunkMiddleware>(thunk));
