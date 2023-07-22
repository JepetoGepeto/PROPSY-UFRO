import React, { createContext, useReducer, useContext } from 'react';

const SurveyContext = createContext();

const surveyReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ANSWER':
      return { ...state, [action.questionId]: action.answer };
    default:
      return state;
  }
};

export const SurveyProvider = ({ children }) => {
  const [surveyData, dispatch] = useReducer(surveyReducer, {});

  return (
    <SurveyContext.Provider value={{ surveyData, dispatch }}>
      {children}
    </SurveyContext.Provider>
  );
};

export const useSurveyContext = () => useContext(SurveyContext);
