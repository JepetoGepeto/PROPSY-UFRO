// surveyStore.js
import { makeAutoObservable } from 'mobx';

class SurveyStore {
  surveyData = [];

  constructor() {
    makeAutoObservable(this);
  }

  addAnswer = (answer) => {
    this.surveyData.push(answer);
  };

  initializeSurveyData = () => {
    this.surveyData = [];
  };
}

const surveyStore = new SurveyStore();
export default surveyStore;
