import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './pages/login/authLogin';
import HomeScreen from './pages/list/HomeScreen';
import UserProfileScreen from './pages/Profile/UserProfileScreen';
import i18n from './pages/localization/i18n';
const Stack = createNativeStackNavigator();
export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="login"
          options={{title: ''}}
          component={Login}
        />
        <Stack.Screen
          name="List"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Profile"
          component={UserProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


