import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../styles';

const HomeScreen = () => (
  <SafeAreaView>
    <View style={styles.home}>
      <StatusBar style="auto" />
    </View>
  </SafeAreaView>
);

export default HomeScreen;
