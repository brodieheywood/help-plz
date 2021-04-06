import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar, Text } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { saveSearch } from '../Store/topicSearchSlice';

const TopicSearchBar = () => {
  const dispatch = useDispatch();

  /* 
  Search query is saved in component while it is being typed. This is the 
  source of truth for the typed query displayed in the search box.
  */
  const [tempSearchQuery, setTempSearchQuery] = useState('');

  return (
    <View style={styles.componentContainer}>
      <Text style={styles.wizard}>🧙🏻‍♂️</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={(text) => setTempSearchQuery(text)}
        value={tempSearchQuery}
        onSubmitEditing={() => dispatch(saveSearch(tempSearchQuery))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    paddingHorizontal: '7.5%',
    paddingTop: '7.5%',
  },
  wizard: {
    fontSize: 72,
  },
});

export default TopicSearchBar;
