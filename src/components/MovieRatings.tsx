import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Star from '../assets/Star';

type RatingProps = {
  rating: number;
  total: number;
};

export const MovieRatings: React.FC<RatingProps> = ({rating, total}) => {
  return (
    <View style={styles.ratingContainer}>
      <Text style={styles.ratingText}>
        {rating}/{total}
      </Text>
      <Star />
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
