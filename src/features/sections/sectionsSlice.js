import { createSlice } from '@reduxjs/toolkit';
import { SECTIONS } from '../../app/shared/SECTIONS';

const initialState = {
	sectionsArray: SECTIONS,
};

const sectionsSlice = createSlice({
	name: 'sections',
	initialState,
});

export const sectionsReducer = sectionsSlice.reducer;

export const selectSectionById = (id) => (state) => {
	return state.sections.sectionsArray.find((section) => section.id === parseInt(id));
};

export const selectSectionByArticleId = (articleId) => (state) => {
	return state.sections.sectionsArray.find((section) => section.article_id === parseInt(articleId));
};
