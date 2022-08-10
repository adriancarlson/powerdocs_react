import { configureStore } from '@reduxjs/toolkit';
import { articlesReducer } from '../features/articles/articlesSlice';
import { sectionsReducer } from '../features/sections/sectionsSlice';

export const store = configureStore({
	reducer: {
		articles: articlesReducer,
		sections: sectionsReducer
	},
});
