import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SeuRegistro, Home, LoginC, Logar, LoginP, CadastroC, CadastroPj, MainCliente } from './views';
import {css} from './assets/css/Css';

<View style={css.container}></View>


export default function App() {

  const Stack = createStackNavigator();


  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name = "Home" 
        component = {Home}
        options={{
        headerShown: false,
        }}
      />
      <Stack.Screen
       name = "LoginC" 
       component = {LoginC}
       options = {{
         headerShown: false,
       }}
       />
       <Stack.Screen
       name = "LoginP" 
       component = {LoginP}
       options = {{
         headerShown: false,
       }}
       />
        <Stack.Screen
       name = "Logar" 
       component = {Logar}
       options = {{
         headerShown: false,
       }}
       />
        <Stack.Screen
        name = "SeuRegistro"
        component = {SeuRegistro}
        options = {{
          headerShown: false,
        }}
       />
        <Stack.Screen
        name = "CadastroPj"
        component = {CadastroPj}
        options = {{
          headerShown: false,
        }}
       />
        <Stack.Screen
        name = "CadastroC"
        component = {CadastroC}
        options = {{
          headerShown: false,
        }}
       />
          <Stack.Screen
        name = "MainCliente"
        component = {MainCliente}
        options = {{
          headerShown: false,
        }}
       />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

