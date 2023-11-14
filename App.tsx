import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import MainBottomNavigation from './src/navigation/MainBottomNavigation';
import {theme} from './src/theme/theme';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PaperProvider theme={theme}>
        <NavigationContainer
          theme={{
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              background: theme.colors.white,
            },
          }}>
          <MainBottomNavigation />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
