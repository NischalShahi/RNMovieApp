import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {theme} from '../utils/constants';

type MovieCastsProps = {
  casts: {
    node: {
      name: {
        id: string;
        nameText: {
          text: string;
        };
        primaryImage: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
  }[];
};

const CastItem: React.FC<{cast: any}> = ({cast}) => {
  return (
    <View style={styles.castItemContainer}>
      <Image
        source={{uri: cast?.node?.name?.primaryImage?.url}}
        style={{
          height: 150,
          width: 100,
          borderRadius: 5,
          resizeMode: 'cover',
        }}
      />
      <Text style={styles.castName}>{cast.node.name.nameText.text}</Text>
    </View>
  );
};

export const MovieCasts: React.FC<MovieCastsProps> = ({casts}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Casts</Text>
      <FlashList
        keyExtractor={item => item?.node?.name?.id}
        horizontal
        data={casts}
        renderItem={({item}) => <CastItem cast={item} />}
        estimatedItemSize={20}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  castName: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
  },
  castItemContainer: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: theme.colors.netflixRed,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
