import {FlashList} from '@shopify/flash-list';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {LoadingSkeleton} from '../components/LoadingSkeleton';
import {MovieListItem} from '../components/MovieListItem';
import {SearchBar} from '../components/SearchBar';
import {useListMovies} from '../hooks/useListMovies';
import {theme} from '../utils/constants';

const ItemSkeleton = () => {
  return (
    <View style={{width: '45%', height: 300}}>
      <LoadingSkeleton containerStyles={{borderRadius: 10, height: 200}} />
      <LoadingSkeleton
        containerStyles={{
          borderRadius: 10,
          marginTop: 10,
          height: 20,
          width: 80,
        }}
      />
      <LoadingSkeleton
        containerStyles={{
          borderRadius: 10,
          marginTop: 10,
          height: 20,
          width: 120,
        }}
      />
    </View>
  );
};

const LoadingSection = () => {
  return (
    <View style={{marginTop: 10, gap: 10}}>
      {Array.from({length: 4}).map((_, index) => (
        <View
          style={{flexDirection: 'row', justifyContent: 'space-around'}}
          key={index}>
          <ItemSkeleton />
          <ItemSkeleton />
        </View>
      ))}
    </View>
  );
};

export const HomeScreen: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const {data, isError, refetch, isRefetching, isLoading, isFetching} =
    useListMovies({
      searchQuery: searchValue,
    });

  const onSearch = (text: string) => {
    setSearchValue(text);
  };

  if (isError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Something went wrong</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar searchValue={searchValue} onSearch={onSearch} />
      {isLoading || isFetching ? (
        <LoadingSection />
      ) : (
        <FlashList
          keyExtractor={item => item['#IMDB_ID']}
          data={data?.description || []}
          renderItem={({item}) => <MovieListItem movie={item} />}
          estimatedItemSize={20}
          numColumns={2}
          refreshing={isRefetching}
          onRefresh={refetch}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.backgroundBlack,
  },
  errorText: {color: theme.colors.netflixRed},
  container: {flex: 1, backgroundColor: theme.colors.backgroundBlack},
});
