// store.js
import { configureStore } from '@reduxjs/toolkit';
import surveyReducer from './src/app/surveyReducer'; // Import your surveyReducer

const store = configureStore({
  reducer: {
    survey: surveyReducer,
  },
});

export default store;
