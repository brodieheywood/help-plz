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
      setExplainerTextString('Find an expert on Stack Overflow.');
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
    marginLeft: '9%',
    marginTop: '2%',
  },
});

export default ExplainerText;
