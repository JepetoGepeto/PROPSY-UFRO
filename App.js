import React, { useEffect } from 'react';
import { Buffer } from "buffer";
import NavigationStack from './src/stack/NavigationStack';
import { NavigationContainer } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';

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
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}