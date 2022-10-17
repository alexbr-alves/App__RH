import React, {useCallback} from 'react';
import { useFonts } from 'expo-font';
import {SplashScreen} from 'expo-splash-screen';

import {View } from 'react-native';
import Home from './src/screens/home';

import { Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto';
export default function App() {
  let [fontsLoaded, error] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular
  })
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();    }
  }, [fontsLoaded])

    if(!fontsLoaded){
      return null
    }
  return (
   <View>
      <Home/>
   </View>

  );
}
