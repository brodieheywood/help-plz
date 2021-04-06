import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import store from './src/Store';
import { Provider as ReduxProvider } from 'react-redux';
import HomeScreen from './src/Screens/Home';

/* Theme for entire App. */
const extendedTheme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
  },
};

const App = () => (
  <ReduxProvider store={store}>
    <PaperProvider theme={extendedTheme}>
      <HomeScreen />
    </PaperProvider>
  </ReduxProvider>
);

export default App;
