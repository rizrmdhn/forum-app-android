/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, useColorScheme, Text} from 'react-native';
import {Provider} from 'react-redux';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import store from './states';
import {NativeBaseProvider} from 'native-base';
import DefaultPage from './pages/DefaultPage';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView style={backgroundStyle}>
        <Provider store={store}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
            <Header />
            <DefaultPage />
          </ScrollView>
        </Provider>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
export default App;
