import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import Animated from 'react-native-reanimated';
import {RootStackParamList} from '../navigation/RootStack';
import {Movie} from '../sdks/movieSdk/types';
import {theme} from '../utils/constants';

export type MovieListItemProps = {
  movie: Movie;
  index: number;
};
type MovieDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MovieDetail'
>;

export const MovieListItem: React.FC<MovieListItemProps> = ({movie, index}) => {
  const navigation = useNavigation<MovieDetailScreenNavigationProp>();

  const onPress = () => {
    navigation.navigate('MovieDetail', {
      movie: movie,
      sharedTransitionTag: index.toString(),
    });
  };
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Animated.Image
        sharedTransitionTag={index.toString()}
        source={{uri: movie['#IMG_POSTER']}}
        style={styles.image}
      />
      <Text style={styles.title}>{movie['#TITLE']}</Text>
      <Text style={styles.info}>{movie['#YEAR']}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 10,
  },
  image: {
    height: 250,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    marginTop: 5,
    fontSize: 16,
    color: theme.colors.netflixRed,
    fontWeight: 'bold',
  },
  info: {fontSize: 14, color: '#efeeee'},
});
