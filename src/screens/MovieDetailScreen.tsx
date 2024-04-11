import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MovieInfoSection} from '../components/MovieInfoSection';
import {Movie} from '../sdks/movieSdk/types';
import {theme} from '../utils/constants';

export const MoveDetailScreen: React.FC = () => {
  const {params} = useRoute();
  const {movie} = params as {
    movie: Movie;
  };
  const deviceWidth = useWindowDimensions().width;
  const aspectRatio = movie?.photo_width / movie?.photo_height;
  const navigation = useNavigation();
  const imdbId = movie['#IMDB_ID'];

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView>
        <View>
          <View style={styles.topNavContainer}>
            <View style={styles.iconContainer}>
              <Pressable onPress={() => navigation.goBack()}>
                <Image
                  style={styles.icon}
                  source={require('../assets/icons/iconBack.png')}
                />
              </Pressable>
            </View>
            <View style={styles.rankContainer}>
              <Text style={styles.rankText}># {movie['#RANK']}</Text>
            </View>
          </View>
          <Animated.Image
            sharedTransitionTag={movie['#IMDB_ID']}
            source={{uri: movie['#IMG_POSTER']}}
            style={{
              width: deviceWidth,
              height: deviceWidth / aspectRatio,
            }}
            resizeMode="cover"
          />
          <MovieInfoSection imdbId={imdbId} movie={movie} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topNavContainer: {
    position: 'absolute',
    left: 10,
    top: 50,
    zIndex: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#949494da',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  icon: {
    height: 35,
    width: 35,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundBlack,
  },
  rankContainer: {
    backgroundColor: theme.colors.backgroundYellow,
    padding: 5,
    borderRadius: 20,
    marginTop: 5,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rankText: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
