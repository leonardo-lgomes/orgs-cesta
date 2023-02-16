import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import Cesta from './src/telas/Cesta/Index';
import mock from './src/mocks/cesta';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import montserrat from '@expo-google-fonts/montserrat';
import { useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular":  Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });
  if(!fonteCarregada){
    return <AppLoading/>
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar/>
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}