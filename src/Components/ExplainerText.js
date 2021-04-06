import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Headline } from 'react-native-paper';

const ExplainerText = () => {
  const initialRender = useRef(true);
  const searchQuery = useSelector((state) => state.topicSearch.value);
  const [explainerTextString, setExplainerTextString] = useState('');
  
  useEffect(() => {
    if (initialRender.current) {
      setExplainerTextString('Search for a topic to find an expert.');
      initialRender.current = false;
    } else if (searchQuery) {
      setExplainerTextString(`${searchQuery.trim()} experts:`);
    }
  }, [searchQuery]);

  return <Headline style={styles.text}>{explainerTextString}</Headline>;
};

const styles = StyleSheet.create({
  text: {
    marginBottom: '2.5%',
    marginHorizontal: '9%',
    marginTop: '3%',
  },
});

export default ExplainerText;
