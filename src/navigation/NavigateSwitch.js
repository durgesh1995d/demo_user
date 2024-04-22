// In App.js in a new project
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppStart from './AppStart';
import Login from '../screen/Logipage';

const Stack = createNativeStackNavigator();

const NavigateSwitch = () => {
  return (
    <Stack.Navigator
      name={'NavigateSwitch'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="AppStart" component={AppStart} />
    </Stack.Navigator>
  );
};

export default NavigateSwitch;
