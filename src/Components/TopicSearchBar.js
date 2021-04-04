import React from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar, Text } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { saveSearch } from '../Store/topicSearchSlice';

const TopicSearchBar = () => {
  const searchQuery = useSelector((state) => state.topicSearch.value);
  const dispatch = useDispatch();

  return (
    <>
      <Text style={styles.wizard}>🧙🏻‍♂️</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={(text) => dispatch(saveSearch(text))}
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
