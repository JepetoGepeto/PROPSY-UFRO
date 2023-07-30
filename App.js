import React, { useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import NavigationStack from './src/stack/NavigationStack';
import { NavigationContainer } from '@react-navigation/native';
import { SurveyProvider } from './src/SurveyContext'; // Importa el proveedor del contexto

export default function App() {
  useEffect(() => {
    async function setScreenOrientation() {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }
    setScreenOrientation();
  }, []);

  return (
    <SurveyProvider>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </SurveyProvider>
  );
}
