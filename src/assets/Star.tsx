import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Star = () => {
  return (
    <View style={styles.starContainer}>
      <Svg width="24" height="24" viewBox="0 0 24 24">
        <Path
          d="M12 2.121l2.879 5.558 6.421.937-4.66 4.525 1.1 6.387-5.74-3.005-5.74 3.005 1.1-6.387-4.66-4.525 6.42-.937z"
          fill="#e9c328"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  starContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Star;
