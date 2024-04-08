import {useQuery} from '@tanstack/react-query';
import {debounce} from 'lodash';
import {useEffect, useState} from 'react';
import movieSDK from '../sdks/movieSdk';
import {ApiResponse} from '../sdks/movieSdk/types';

export const useListMovies = ({searchQuery}: {searchQuery?: string}) => {
  const [debouncedQuery, setDebouncedQuery] = useState<string | undefined>(
    searchQuery,
  );

  useEffect(() => {
    const debouncedSearch = debounce(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    debouncedSearch();

    return debouncedSearch.cancel;
  }, [searchQuery]);

  return useQuery<ApiResponse, Error>({
    queryKey: ['movieList', debouncedQuery],
    queryFn: async () => {
      if (debouncedQuery) {
        return movieSDK.searchMovies({query: debouncedQuery});
      } else {
        return movieSDK.getRandomMovies();
      }
    },
  });
};
