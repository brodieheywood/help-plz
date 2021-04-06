import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { withTheme } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import TopicSearchBar from '../../Components/TopicSearchBar';
import ExpertsList from '../../Components/ExpertsList';
import { object } from 'prop-types';
import ExplainerText from '../../Components/ExplainerText';
import styles from '../styles';

const HomeScreen = ({ theme }) => {
  const themedBackgroundColor = theme.colors.background;

  return (
    <View
      style={[
        { backgroundColor: themedBackgroundColor },
        styles.componentContainer,
      ]}
    >
      <StatusBar style="auto" />
      <SafeAreaView style={styles.componentContainer}>
        <View style={styles.componentContainer}>
          <TopicSearchBar />
          <ExplainerText />
          <ExpertsList />
        </View>
      </SafeAreaView>
    </View>
  );
};

HomeScreen.propTypes = {
  theme: object.isRequired,
};

export default withTheme(HomeScreen);
