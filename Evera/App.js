import * as React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './app/screens/MainScreen';
import LoginScreen from './app/screens/LoginScreen';
import EveraNavigation from './app/Navigator/EveraNavigation';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Navigation" component={EveraNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
