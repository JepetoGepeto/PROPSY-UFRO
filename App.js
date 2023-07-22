import React, { useEffect } from 'react';
import { Buffer } from 'buffer';
import * as ScreenOrientation from 'expo-screen-orientation';
import NavigationStack from './src/stack/NavigationStack';
import { NavigationContainer } from '@react-navigation/native';
import { SurveyProvider } from './src/SurveyContext'; // Importa el proveedor del contexto

if (!global.Buffer) {
  global.Buffer = Buffer;
}

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
