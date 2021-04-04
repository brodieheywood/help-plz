import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './src/Screens/Home';

/* Theme for entire App. */
const extendedTheme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default function App() {
  return (
    <PaperProvider theme={extendedTheme}>
      <HomeScreen />
    </PaperProvider>
  );
}
