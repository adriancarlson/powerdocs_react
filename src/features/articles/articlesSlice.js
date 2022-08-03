import { createSlice } from '@reduxjs/toolkit';
import { ARTICLES } from '../../app/shared/ARTICLES';

const initialState = {
	articlesArray: ARTICLES,
};

const articlesSlice = createSlice({
	name: 'articles',
	initialState,
});

export const articlesReducer = articlesSlice.reducer;

export const selectAllArticles = (state) => {
	return state.articles.articlesArray;
};

export const selectArticleById = (id) => (state) => {
	return state.articles.articlesArray.find((article) => article.id === parseInt(id));
};

export const selectArticlesByCategory = (category) => (state) => {
	return state.articles.articlesArray.filter((article) => article.category === category);
};

export const selectArticleCategories = (state) => {
	return state.articles.articlesArray.reduce((acc, article) => {
		if (acc.includes(article.category)) {
			return acc;
		} else {
			acc.push(article.category);
			return acc;
		}
	}, []);
};
