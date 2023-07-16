import React, { useEffect } from 'react';
import { Buffer } from 'buffer';
import { Provider, useSelector, useDispatch } from 'react-redux'; // Import Provider, useSelector, and useDispatch from 'react-redux'
import store from './src/app/store'; // Import your Redux store
import { NavigationContainer } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';
import NavigationStack from './src/stack/NavigationStack';
import { initializeSurveyData } from './src/app/surveyreducer'; // Import the action

if (!global.Buffer) {
  global.Buffer = Buffer;
}

export default function App() {
  const dispatch = useDispatch(); // Create a dispatch function to use the action

  useEffect(() => {
    async function setScreenOrientation() {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }
    setScreenOrientation();

    // Dispatch the initializeSurveyData action to initialize the survey data array
    dispatch(initializeSurveyData());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </Provider>
  );
}
