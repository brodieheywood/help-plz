import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar, Text } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { saveSearch } from '../Store/topicSearchSlice';

const TopicSearchBar = () => {
  const dispatch = useDispatch();

  /* 
  While user is typing in search bar, query is saved into component state.
  Passed to Redux store on submit.
  */
  const [tempSearchQuery, setTempSearchQuery] = useState('');

  return (
    <View style={styles.componentContainer}>
      <Text style={styles.wizard}>🧙🏻‍♂️</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={(text) => setTempSearchQuery(text)}
        value={tempSearchQuery}
        autoCorrect={false}
        onSubmitEditing={() => {
          if (tempSearchQuery.trim().length) {
            //do nothing when whitespace
            dispatch(saveSearch(tempSearchQuery));
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    marginHorizontal: '7.5%',
    marginTop: '7.5%',
  },
  wizard: {
    fontSize: 72,
  },
});

export default TopicSearchBar;
