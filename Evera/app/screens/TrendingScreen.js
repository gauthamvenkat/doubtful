import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableHighlight,
  Linking,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import A from 'react-native-a';
export default class TrendingScreen extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const response = await fetch(
      'http://www.json-generator.com/api/json/get/cgzBaNUsUi?indent=2',
    );
    const json = await response.json();
    this.setState({data: json.news});
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.latestnews}>LATEST NEWS</Text>
        <View style={{padding: 10}} />
        <FlatList
          style={styles.list1}
          data={this.state.data}
          horizontal={true}
          keyExtractor={(x, i) => i}
          renderItem={({item}) => (
            <View style={styles}>
              <View style={styles.container2}>
                <View>
                  <TouchableHighlight onPress={() => {}}>
                    <View>
                      <ImageBackground
                        source={{uri: item.image}}
                        resizeMode="cover"
                        style={styles.image}>
                        <Icon name="play" style={styles.play} size={20} />
                      </ImageBackground>
                    </View>
                  </TouchableHighlight>
                </View>
                <View style={styles.title}>
                  <Text style={styles.lineStyle}>{`${item.title}`}</Text>
                </View>
              </View>
              <Text style={styles.author}>
                {`${item.time}`}
                <Text style={{color: '#ffffff'}}> • </Text>
                {`${item.author}`} <Text style={{color: '#ffffff'}}>•</Text>{' '}
                <A
                  href={item.url}
                  style={{color: '#A9A9A9', textDecorationLine: 'underline'}}>
                  View Original
                </A>
              </Text>
            </View>
          )}
        />
        <Text style={styles.trendingnews}>TRENDING NEWS</Text>
        <View style={{padding: 4}} />
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({item}) => (
            <View style={styles.listview}>
              <View style={styles.container2}>
                <View>
                  <TouchableHighlight
                    onPress={() => {
                      this.playSound;
                    }}>
                    <View>
                      <ImageBackground
                        source={{uri: item.image}}
                        resizeMode="cover"
                        style={styles.image}>
                        <Icon name="play" style={styles.play} size={20} />
                      </ImageBackground>
                    </View>
                  </TouchableHighlight>
                </View>
                <View style={styles.title}>
                  <Text style={styles.lineStyle}>{`${item.title}`}</Text>
                </View>
              </View>
              <Text style={styles.author}>
                {`${item.time}`}
                <Text style={{color: '#ffffff'}}> • </Text>
                {`${item.author}`} <Text style={{color: '#ffffff'}}>•</Text>{' '}
                <A
                  href={item.url}
                  style={{color: '#A9A9A9', textDecorationLine: 'underline'}}>
                  View Original
                </A>
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  lineStyle: {
    color: '#E1E1E2',
    fontSize: 20,
  },
  listview: {
    paddingTop: 10,
    paddingBottom: 8,
    borderBottomColor: '#A1A1A4',
    borderBottomWidth: 1,
  },
  author: {
    color: '#A9A9A9',
  },
  image: {
    width: 80,
    height: 70,
    padding: 10,
    flex: 1,
    borderRadius: 5,
    alignItems: 'flex-start',
  },
  container2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexBasis: 100,
  },
  play: {
    margin: 5,
    position: 'absolute',
    top: 40,
    left: 50,
    width: 25,
    height: 25,
    color: 'black',
  },
  title: {
    flexDirection: 'row',
    flexBasis: 290,
    left: 10,
  },
  trendingnews: {
    color: '#A1A1A4',
    right: 130,
  },
  latestnews: {
    color: '#A1A1A4',
    right: 140,
  },
  list1: {
    flexDirection: 'column',
  },
});
