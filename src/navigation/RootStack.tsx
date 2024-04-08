import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from '../screens/HomeScreen';
import {MoveDetailScreen} from '../screens/MovieDetailScreen';
import {Movie} from '../sdks/movieSdk/types';

export type RootStackParamList = {
  MovieDetail: {movie: Movie};
  Home: undefined;
};

export const RootStack: React.FC<RootStackParamList> = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MovieDetail" component={MoveDetailScreen} />
    </Stack.Navigator>
  );
};
