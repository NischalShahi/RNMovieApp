import he from 'he';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type DescriptionProps = {
  description: string;
};

export const MovieDescription: React.FC<DescriptionProps> = ({description}) => {
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.descriptionText}>{he.decode(description)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    marginTop: 10,
  },
  descriptionText: {
    color: 'white',
    fontSize: 14,
  },
});
