import React, {useEffect, useRef} from 'react';
import {Animated, Easing, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const LoadingSkeleton = ({containerStyles}: {containerStyles?: any}) => {
  const marginLeft = useRef(new Animated.Value(0)).current;

  const LinearGradientColors = [
    'rgba(0, 0, 0, 0)',
    'rgba(0, 0, 0, 0.1)',
    'rgba(0, 0, 0, 0)',
  ];

  useEffect(() => {
    const moveInterval = setInterval(() => {
      startAnimation();
    }, 1000);
    return () => clearInterval(moveInterval);
  });

  const startAnimation = () => {
    Animated.timing(marginLeft, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      marginLeft.setValue(0);
    });
  };

  const animatedStyle = {
    marginLeft: marginLeft.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '80%'],
    }),
  };

  return (
    <View style={{backgroundColor: '#363434', ...containerStyles}}>
      <Animated.View
        style={[
          {
            height: '100%',
            width: '40%',
          },
          animatedStyle,
        ]}>
        <LinearGradient
          colors={LinearGradientColors}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            flex: 1,
          }}
        />
      </Animated.View>
    </View>
  );
};
