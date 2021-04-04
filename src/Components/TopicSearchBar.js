import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar, Text } from 'react-native-paper';

const TopicSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <Text style={styles.wizard}>🧙🏻‍♂️</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </>
  );
};

const styles = StyleSheet.create({
  wizard: {
    fontSize: 72,
  },
});

export default TopicSearchBar;
