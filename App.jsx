import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screen/HomeScreen';
import LoginScreen from './src/screen/LoginScreen';
import SignUpScreen from './src/screen/SignUpScreen';
import Dashboard from './src/screen/Dashboard';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions = {{
      headerShown: false,
      }} >
      <Stack.Screen name = {"HOME"} component={HomeScreen}/>
      <Stack.Screen name = {"LOGIN"} component={LoginScreen}/>
      <Stack.Screen name = {"SIGNUP"} component={SignUpScreen}/>
      <Stack.Screen name = {"DASHBOARD"} component={Dashboard}/>
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})