import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/home'
import Logar from './views/logar'
import LoginP from './views/loginP'
import LoginC from './views/loginC';
import  Registro from './views/register';
import CadastroPj from './views/cadastroPj'
import CadastroC from './views/cadastroC'
import mainCliente from './views/mainCliente'
import {css} from './assets/css/Css';

<View style={css.container}></View>


export default function App() {

  const Stack = createStackNavigator();


  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName = "Home">
      <Stack.Screen name = "Home" component = {Home} options={{ headerShown: false, }}/>
      <Stack.Screen name = "LoginC" component = {LoginC} options = {{ headerShown: false, }}/>
      <Stack.Screen name = "LoginP" component = {LoginP} options = {{ headerShown: false, }}/>
      <Stack.Screen name = "Logar" component = {Logar} options = {{  headerShown: false,}}/>
      <Stack.Screen name = "Registro"component = {Registro} options = {{ headerShown: false,}}/>
      <Stack.Screen name = "CadastroPj" component = {CadastroPj} options = {{ headerShown: false,}}/>
      <Stack.Screen name = "CadastroC" component = {CadastroC} options = {{ headerShown: false,}}/>
      <Stack.Screen name = "mainCliente" component = {mainCliente} options = {{ headerShown: false,}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

