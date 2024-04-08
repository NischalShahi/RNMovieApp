import {FlashList} from '@shopify/flash-list';
import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {MovieListItem} from '../components/MovieListItem';
import {SearchBar} from '../components/SearchBar';
import {useListMovies} from '../hooks/useListMovies';

export const HomeScreen: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const {data, isError} = useListMovies({
    searchQuery: searchValue,
  });

  const onSearch = (text: string) => {
    setSearchValue(text);
  };

  if (isError) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#121212',
        }}>
        <Text style={{color: '#e62d2d'}}>Something went wrong</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#121212'}}>
      <View style={{minHeight: 2, flex: 1, padding: 10}}>
        <SearchBar searchValue={searchValue} onSearch={onSearch} />
        <FlashList
          keyExtractor={item => item['#IMDB_ID']}
          data={data?.description || []}
          renderItem={({item}) => <MovieListItem movie={item} />}
          estimatedItemSize={20}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};
