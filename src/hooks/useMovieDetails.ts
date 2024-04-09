import {useQuery} from '@tanstack/react-query';

import movieSDK from '../sdks/movieSdk';
import {MovieDetails} from '../sdks/movieSdk/types';

export const useMovieDetails = ({imdbID}: {imdbID: string}) => {
  return useQuery<MovieDetails, Error>({
    queryKey: ['movieDetails', 'movies'],
    queryFn: async () => {
      return movieSDK.getMovieDetails(imdbID);
    },
  });
};
