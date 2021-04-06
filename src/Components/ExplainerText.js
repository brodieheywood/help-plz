import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Headline } from 'react-native-paper';

const ExplainerText = () => {
  const searchQuery = useSelector((state) => state.topicSearch.value);
  const [explainerTextString, setExplainerTextString] = useState('');

  const initialRender = useRef(true);
  useEffect(() => {
    if (initialRender.current) {
      setExplainerTextString('Search Stack Overflow for an expert.');
      initialRender.current = false;
    } else if (searchQuery) {
      setExplainerTextString(`${searchQuery} experts:`);
    }
  }, [searchQuery]);

  return <Headline style={styles.text}>{explainerTextString}</Headline>;
};

const styles = StyleSheet.create({
  text: {
    marginLeft: '10%',
    marginVertical: '2.5%',
  },
});

export default ExplainerText;
