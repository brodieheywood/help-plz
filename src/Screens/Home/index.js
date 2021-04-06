import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TopicSearchBar from '../../Components/TopicSearchBar';
import Users from '../../Components/Users';
import styles from '../styles';

const HomeScreen = () => (
  <>
    <StatusBar style="auto" />
    <SafeAreaView>
      <View style={styles.home}>
        <TopicSearchBar />
        <Users />
      </View>
    </SafeAreaView>
  </>
);

export default HomeScreen;
