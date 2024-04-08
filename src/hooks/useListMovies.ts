import {useQuery} from '@tanstack/react-query';
import movieSDK from '../sdks/movieSdk';
import {ApiResponse} from '../sdks/movieSdk/types';

export const useListMovies = ({searchQuery}: {searchQuery?: string}) => {
  return useQuery<ApiResponse, Error>({
    queryKey: ['movieList', searchQuery],
    queryFn: async () => {
      if (searchQuery) {
        return movieSDK.searchMovies({query: searchQuery});
      } else {
        return movieSDK.getRandomMovies();
      }
    },
  });
};
