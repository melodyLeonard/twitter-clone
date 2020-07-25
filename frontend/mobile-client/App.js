
import React from 'react';
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import { UIManager } from 'react-native';


import { store, client } from './src/redux/store'
import { colors } from './src/utils/constants'

import HomeScreen from './src/screens/HomeScreen'

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

export default function App() {
  return (
    <ApolloProvider store={store} client={client}>
      <ThemeProvider theme={colors}>
        <HomeScreen />
      </ThemeProvider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
