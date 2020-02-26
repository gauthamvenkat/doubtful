import * as React from 'react';
import {View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SearchBar} from 'react-native-elements';
import InterestScreen from '../screens/InterestScreen';
import TrendingScreen from '../screens/TrendingScreen';
export default class HomeScreenNavigator extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;
    const Tab = createMaterialTopTabNavigator();
    return (
      <Tab.Navigator initialRouteName="Your Interest" swipeEnabled={false}>
        <Tab.Screen name="Your Interest" component={InterestScreen} />
        <Tab.Screen name="Trending" component={TrendingScreen} />
      </Tab.Navigator>
    );
  }
}
