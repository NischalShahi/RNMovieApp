import {useNavigation, useRoute} from '@react-navigation/native';
import he from 'he';
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
import {SafeAreaView} from 'react-native-safe-area-context';
import {MovieCasts} from '../components/MovieCasts';
import {MovieDescription} from '../components/MovieDescription';
import {MovieRatings} from '../components/MovieRatings';
import {useMovieDetails} from '../hooks/useMovieDetails';
import {Movie} from '../sdks/movieSdk/types';
import {theme} from '../utils/constants';

export const MoveDetailScreen: React.FC = () => {
  const {params} = useRoute();
  const {movie} = params as {movie: Movie};
  const deviceWidth = useWindowDimensions().width;
  // const aspectRatio = movie?.photo_width / movie?.photo_height; <--- To be used if we want to display the full image
  const navigation = useNavigation();
  const imdbId = movie['#IMDB_ID'];
  const {data: movieDetails, isLoading} = useMovieDetails({
    imdbID: imdbId,
  });

  const description = movieDetails?.short?.description;
  const aggregateRating = movieDetails?.top?.ratingsSummary?.aggregateRating;
  const featuredReviews = movieDetails?.top?.featuredReviews;
  const casts = movieDetails?.main?.cast?.edges;

  // console.log('featuredReviews--->', featuredReviews?.edges[0]?.node);

  return (
    <SafeAreaView style={styles.container}>
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
          <Image
            source={{uri: movie['#IMG_POSTER']}}
            style={{
              width: deviceWidth,
              height: deviceWidth,
            }}
            resizeMode="cover"
          />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{movie['#TITLE']}</Text>

            <View style={styles.rowContainer}>
              <View style={styles.yearContainer}>
                <Text style={styles.info}>{movie['#YEAR']}</Text>
              </View>
              {aggregateRating && (
                <MovieRatings rating={aggregateRating} total={10} />
              )}
            </View>
            {description && <MovieDescription description={description} />}
            {casts && <MovieCasts casts={casts} />}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topNavContainer: {
    position: 'absolute',
    left: 10,
    top: 10,
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
  infoContainer: {
    marginTop: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.netflixRed,
  },
  info: {
    fontSize: 14,
    color: 'white',
  },
  yearContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#90909068',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
