import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LoadingSkeleton} from '../components/LoadingSkeleton';
import {MovieCasts} from '../components/MovieCasts';
import {MovieDescription} from '../components/MovieDescription';
import {MovieRatings} from '../components/MovieRatings';
import {MovieReview} from '../components/MovieReview';
import {useMovieDetails} from '../hooks/useMovieDetails';
import {Movie} from '../sdks/movieSdk/types';
import {theme} from '../utils/constants';

const LoadingSection = () => {
  return (
    <View style={{marginTop: 10, gap: 10}}>
      <LoadingSkeleton containerStyles={{borderRadius: 10, height: 80}} />
      <LoadingSkeleton
        containerStyles={{
          borderRadius: 10,
          height: 20,
          width: 100,
          marginTop: 10,
        }}
      />
      <View style={{flexDirection: 'row', gap: 10}}>
        {Array.from({length: 4}).map((_, index) => (
          <LoadingSkeleton
            key={index}
            containerStyles={{
              borderRadius: 10,
              height: 120,
              width: 100,
              marginTop: 10,
            }}
          />
        ))}
      </View>
    </View>
  );
};
export const MovieInfoSection = ({
  imdbId,
  movie,
}: {
  imdbId: string;
  movie: Movie;
}) => {
  const {
    data: movieDetails,
    isLoading,
    isFetching,
  } = useMovieDetails({
    imdbID: imdbId,
  });

  const description = movieDetails?.short?.description;
  const aggregateRating = movieDetails?.top?.ratingsSummary?.aggregateRating;
  const featuredReview = movieDetails?.top?.featuredReviews?.edges[0]?.node;
  const casts = movieDetails?.main?.cast?.edges;
  return (
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
      {isLoading || isFetching ? (
        <LoadingSection />
      ) : (
        <>
          {description && <MovieDescription description={description} />}
          {casts && <MovieCasts casts={casts} />}
          {featuredReview && <MovieReview review={featuredReview} />}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
