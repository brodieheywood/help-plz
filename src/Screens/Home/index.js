import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TopicSearchBar from '../../Components/TopicSearchBar';
import styles from '../styles';

const HomeScreen = () => (
  <SafeAreaView>
    <View style={styles.home}>
      <StatusBar style="auto" />
      <TopicSearchBar />
    </View>
  </SafeAreaView>
);

export default HomeScreen;
