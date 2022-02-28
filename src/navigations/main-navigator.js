import React from 'react';
import {Text, Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {COLORS} from '@/themes';

import Home from '@/containers/Home';
import Profile from '@/containers/Profile';
import History from '@/containers/History';

const TabNavigatorConfig = {
  initialRouteName: 'Home',
  backBehavior: 'history',
  tabBarOptions: {
    style: {
      height: 78,
      backgroundColor: COLORS.WHITE,
    },
  },
};

const TabBarIcon = ({icon, focused}) => {
  return <Image source={icon} style={{opacity: focused ? 1 : 0.5}} />;
};

const TabBarLabel = ({focused, label}) => (
  <Text
    style={{
      fontFamily: focused ? 'Montserrat-Bold' : 'Montserrat-Medium',
      fontSize: 15,
      opacity: focused ? 1 : 0.5,
      color: COLORS.SUCCESS,
      textAlign: 'center',
      bottom: 10,
    }}>
    {label}
  </Text>
);

const RouteConfigs = {
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: props => (
        <TabBarIcon
          icon={require('@/assets/images/navigations/home.png')}
          {...props}
        />
      ),
      tabBarLabel: props => <TabBarLabel label="Payment" {...props} />,
    },
  },
  History: {
    screen: History,
    navigationOptions: {
      tabBarIcon: props => (
        <TabBarIcon
          icon={require('@/assets/images/navigations/history.png')}
          {...props}
        />
      ),
      tabBarLabel: props => <TabBarLabel label="History" {...props} />,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: props => (
        <TabBarIcon
          icon={require('@/assets/images/navigations/profile.png')}
          {...props}
        />
      ),
      tabBarLabel: props => <TabBarLabel label="Profile" {...props} />,
    },
  },
};

const MainNavigator = createBottomTabNavigator(
  RouteConfigs,
  TabNavigatorConfig,
);

export default MainNavigator;
