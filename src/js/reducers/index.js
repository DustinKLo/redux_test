// src/js/reducers/index.js

import { ADD_ARTICLE, DATA_LOADED } from '../constants/action-types.js';

const initialState = {
	articles: [],
	remoteArticles: []
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
				remoteArticles: state.remoteArticles.concat(action.payload)
			};
		default:
			return state;
	}
}

export default rootReducer;
