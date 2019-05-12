// src/js/reducers/index.js

import { ADD_ARTICLE, DATA_LOADED, PAGE_SIZE } from '../constants/action-types.js';

const initialState = {
	articles: [],
	remoteArticles: [],
	pageSize: 10
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_ARTICLE:
			return {
				...state,
				articles: state.articles.concat(action.payload)
			};
		case DATA_LOADED:
			return {
				...state,
				// remoteArticles: state.remoteArticles.concat(action.payload)
				remoteArticles: action.payload
			};
		case PAGE_SIZE:
			return {
				...state,
				pageSize: action.payload
			};
		default:
			return state;
	}
}

export default rootReducer;
