// surveyreducer.js
import { createSlice, createAction } from '@reduxjs/toolkit';

const initialState = {
  surveyData: [],
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    addAnswer: (state, action) => {
      state.surveyData.push(action.payload);
    },
    // Add more reducers here if needed
  },
});

export const { addAnswer } = surveySlice.actions;

export const initializeSurveyData = createAction('survey/initializeSurveyData');

export default surveySlice.reducer;
