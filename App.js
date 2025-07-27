import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './screen/WelcomeScreen';
import MoodScreen from './screen/MoodScreen';
import HappyScreen from './screen/HappyScreen';
import SadScreen from './screen/SadScreen';
import AngryScreen from './screen/AngryScreen';
import FocusScreen from './screen/FocusScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  console.log("✅ WelcomeScreen type:", typeof WelcomeScreen);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Mood" component={MoodScreen} />
        <Stack.Screen name="Happy" component={HappyScreen} />
        <Stack.Screen name="Sad" component={SadScreen} />
        <Stack.Screen name="Angry" component={AngryScreen} />
        <Stack.Screen name="Focus" component={FocusScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
