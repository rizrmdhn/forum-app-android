/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import store from './states';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import LeaderboardPage from './pages/LeaderboardPage';
import DefaultPage from './pages/DefaultPage';
import DetailThreadPage from './pages/DetailThreadPage';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Default">
              <Stack.Screen name="Default" component={DefaultPage} options={{headerShown: false}} />
              <Stack.Screen
                name="Leaderboard"
                component={LeaderboardPage}
                options={{headerShown: true}}
              />
              <Stack.Screen
                name="DetailThread"
                component={DetailThreadPage}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
export default App;
