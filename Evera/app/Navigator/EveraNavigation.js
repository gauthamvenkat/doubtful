import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import HomeScreenNavigator from '../Navigator/HomeScreenNavigator';
import DownloadScreen from '../screens/DownloadScreen';
import SavedScreen from '../screens/SavedScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createMaterialBottomTabNavigator();
function EveraNavigation({navigation}) {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#FFFFFF">
      <Tab.Screen
        name="Home"
        component={HomeScreenNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={26} color="#A9A9A9" />
          ),
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={DownloadScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="download" size={26} color="#A9A9A9" />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="bookmark" size={26} color="#A9A9A9" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user" size={26} color="#A9A9A9" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default EveraNavigation;
