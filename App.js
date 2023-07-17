import React, { useEffect } from 'react';
import { Buffer } from 'buffer';
import * as ScreenOrientation from 'expo-screen-orientation';
import NavigationStack from './src/stack/NavigationStack';
import { NavigationContainer } from '@react-navigation/native';

if (!global.Buffer) {
  global.Buffer = Buffer;
}

// Create the context
const MyContext = React.createContext();

export default function App() {
  useEffect(() => {
    async function setScreenOrientation() {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }
    setScreenOrientation();
  }, []);

  const store = {
    surveyData: [],
    addSurveyAnswer: (answer) => {
      store.surveyData.push(answer);
    },
  };

  return (
    <MyContext.Provider value={store}>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </MyContext.Provider>
  );
}
