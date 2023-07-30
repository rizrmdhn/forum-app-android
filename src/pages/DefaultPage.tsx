import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import LeaderboardPage from './LeaderboardPage';
import ThreadPage from './ThreadPage';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MenuPage from './MenuPage';
import {AppDispatch} from '../states';
import {useDispatch} from 'react-redux';
import {asyncSetIsPreload} from '../states/isPreload/action';
import useSelectState from '../hooks/useSelectState';
import LoginPage from './LoginPage';

const Tab = createMaterialBottomTabNavigator();

export default function DefaultPage() {
  const authUser = useSelectState('authUser');

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(asyncSetIsPreload());
  }, [dispatch]);

  return (
    <Tab.Navigator
      initialRouteName="Thread"
      activeColor="#00C2FF"
      inactiveColor="#fff"
      barStyle={{backgroundColor: '#393E46'}}>
      <Tab.Screen
        name="Leaderboard"
        component={LeaderboardPage}
        options={{
          tabBarLabel: 'Leaderboard',
          tabBarIcon: ({color}) => <MaterialIcons name="leaderboard" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Thread"
        component={ThreadPage}
        options={{
          tabBarLabel: 'Forum',
          tabBarIcon: ({color}) => <MaterialIcons name="forum" color={color} size={26} />,
        }}
      />
      {authUser !== null ? (
        <Tab.Screen
          name="Menu"
          component={MenuPage}
          options={{
            tabBarLabel: 'Menu',
            tabBarIcon: ({color}) => <MaterialIcons name="menu" color={color} size={26} />,
          }}
        />
      ) : (
        <Tab.Screen
          name="Login"
          component={LoginPage}
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({color}) => <MaterialIcons name="login" color={color} size={26} />,
          }}
        />
      )}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
