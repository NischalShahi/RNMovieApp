import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

type SearchBarProps = {
  onSearch: (text: string) => void;
  searchValue: string;
};

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  searchValue,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={searchValue}
        onChangeText={onSearch}
        placeholder="Search"
        placeholderTextColor="#efeeee"
        style={styles.textInputContainer}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#e62d2d',
    color: '#efeeee',
  },
  textInputContainer: {
    color: '#efeeee',
    padding: 10,
    width: '100%',
  },
});
