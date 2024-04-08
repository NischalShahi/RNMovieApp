import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Movie} from '../sdks/movieSdk/types';

export type MovieListItemProps = {
  movie: Movie;
};

export const MovieListItem: React.FC<MovieListItemProps> = ({movie}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: movie['#IMG_POSTER']}} style={styles.image} />
      <Text style={styles.title}>{movie['#TITLE']}</Text>
      <Text style={styles.info}>{movie['#YEAR']}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 10,
  },
  image: {
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {marginTop: 5, fontSize: 16, color: '#e62d2d', fontWeight: 'bold'},
  info: {fontSize: 14, color: '#efeeee'},
});
