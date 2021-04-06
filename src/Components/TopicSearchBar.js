import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar, Text } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { saveSearch } from '../Store/topicSearchSlice';

const TopicSearchBar = () => {
  const dispatch = useDispatch();

  /* 
  Search query is saved in component while it is being typed. This is the 
  source of truth for the typed query displayed in the search box.
  */
  const [tempSearchQuery, setTempSearchQuery] = useState('');

  /* 
  After search query is submitted, the tempSearchQuery is saved in the Redux 
  store. This is used as the source of truth for anything outside of the 
  search bar (eg. "Searching for experts in ..." text).
  */
  const searchQuery = useSelector((state) => state.topicSearch.value);

  return (
    <>
      <Text style={styles.wizard}>🧙🏻‍♂️</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={(text) => setTempSearchQuery(text)}
        value={tempSearchQuery}
        onSubmitEditing={() => dispatch(saveSearch(tempSearchQuery))}
      />
      <Text>Searching for experts in: {searchQuery}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  wizard: {
    fontSize: 72,
  },
});

export default TopicSearchBar;
