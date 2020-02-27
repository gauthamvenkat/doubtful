import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Linking,
  ImageBackground,
} from 'react-native';
import TrackPlayer, {
  STATE_PLAYING,
  STATE_PAUSED,
  STATE_STOPPED,
  STATE_READY,
} from 'react-native-track-player';
import {Icon} from 'react-native-elements';
import A from 'react-native-a';
import {Button} from 'react-native-paper';
import {useState} from 'react';
import {useCallback} from 'react';
export default class InterestScreen extends React.Component {
  state = {
    data: [],
    playing: false,
  };
  componentDidMount() {
    this.fetchData();
    this.trackPlayer();
  }
  fetchData = async () => {
    const response = await fetch('https://evera.herokuapp.com/news/sports');
    const json = await response.json();
    this.setState({data: json});
  };
  trackPlayer() {
    TrackPlayer.setupPlayer().then(async () => {
      TrackPlayer.updateOptions({
        alwaysPauseOnInterruption: true,
        waitForBuffer: true,
        stopWithApp: true,
        capabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_SEEK_TO,
        ],
        // compactCapabilities: [
        // 	TrackPlayer.CAPABPLILITY_PLAY,
        // 	TrackPlayer.CAPABILITY_PAUSE,
        // 	TrackPlayer.CAPABILITY_SEEK_TO,
        // 	TrackPlayer.CAPABILITY_JUMP_FORWARD,
        // 	TrackPlayer.CAPABILITY_JUMP_BACKWARD,
        // ],
        // notificationCapabilities: [
        // 	TrackPlayer.CAPABPLILITY_PLAY,
        // 	TrackPlayer.CAPABILITY_PAUSE,
        // 	TrackPlayer.CAPABILITY_SEEK_TO,
        // 	TrackPlayer.CAPABILITY_JUMP_FORWARD,
        // 	TrackPlayer.CAPABILITY_JUMP_BACKWARD,
        // ],
      });
      TrackPlayer.addEventListener('remote-pause', event => {
        TrackPlayer.pause();
      });
      TrackPlayer.addEventListener('remote-play', event => {
        TrackPlayer.play();
      });
    });
  }
  trackplayeradd = async (
    playerid,
    playerurl,
    playertitle,
    playerartist,
    playerartwork,
  ) => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    var itemid = playerid.toString();
    console.log(currentTrack);
    console.log(itemid);
    if (currentTrack === null) {
      await TrackPlayer.add({
        id: playerid,
        url: playerurl,
        title: playertitle,
        artist: playerartist,
        artwork: playerartwork,
      });
      TrackPlayer.play();
      this.setState({playing: true});
    } else if (itemid !== currentTrack) {
      console.log(this.state.playing);
      TrackPlayer.reset();
      await TrackPlayer.add({
        id: playerid,
        url: playerurl,
        title: playertitle,
        artist: playerartist,
        artwork: playerartwork,
      });
      TrackPlayer.play();
      this.setState({playing: true});
    } else {
      console.log('second', this.state.playing);
      if (this.state.playing === false) {
        TrackPlayer.play();
      } else {
        TrackPlayer.pause();
      }
      this.setState({playing: !this.state.playing});
    }
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
                  <TouchableHighlight
                    onPress={() => {
                      this.trackplayeradd(
                        item._id,
                        item.Audio_Link,
                        item.Title,
                        item.Author,
                        item.Image,
                      );
                    }}>
                    <View>
                      <ImageBackground
                        source={{uri: item.Image}}
                        resizeMode="cover"
                        style={styles.image}>
                        {this.state.playing ? (
                          <Icon
                            type="material-community"
                            name="pause-circle"
                            size={20}
                            style={styles.play}
                          />
                        ) : (
                          <Icon
                            type="material-community"
                            name="play-circle"
                            size={20}
                            style={styles.play}
                          />
                        )}
                      </ImageBackground>
                    </View>
                  </TouchableHighlight>
                </View>
                <View style={styles.title}>
                  <Text style={styles.lineStyle}>{`${item.Title}`}</Text>
                </View>
              </View>
              <Text style={styles.author}>
                {`${item.time}`}
                <Text style={{color: '#ffffff'}}> • </Text>
                {`${item.Author}`} <Text style={{color: '#ffffff'}}>•</Text>{' '}
                <A
                  href={item.URL}
                  style={{color: '#A9A9A9', textDecorationLine: 'underline'}}>
                  View Original
                </A>
              </Text>
            </View>
          )}
        />
        <Text style={styles.basedoninterest}>BASED ON YOUR INTERESTS</Text>
        <View style={{padding: 4}} />
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({item}) => (
            <View style={styles.listview}>
              <View style={styles.container2}>
                <View>
                  <TouchableHighlight
                    item={item}
                    onPress={() => {
                      this.trackPlayer(
                        item.id,
                        item.audio,
                        'Song',
                        'Gautham',
                        item.image,
                      );
                      this.setState({playing: !this.state.playing});
                      if (this.state.playing === false) {
                        TrackPlayer.play();
                      } else if (this.state.playing === true) {
                        TrackPlayer.pause();
                      }
                    }}>
                    <View>
                      <ImageBackground
                        source={{uri: item.image}}
                        resizeMode="cover"
                        style={styles.image}>
                        {this.state.playing ? (
                          <Icon
                            type="material-community"
                            name="pause-circle"
                            size={20}
                            style={styles.play}
                            onPress={() => TrackPlayer.pause()}
                          />
                        ) : (
                          <Icon
                            type="material-community"
                            name="play-circle"
                            size={20}
                            style={styles.play}
                            onPress={() => TrackPlayer.pause()}
                          />
                        )}
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
    color: '#ffffff',
    fontSize: 18,
  },
  listview: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: '#A9A9A9',
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
  },
  basedoninterest: {
    color: '#A1A1A4',
    right: 94,
  },
  latestnews: {
    color: '#A1A1A4',
    right: 140,
  },
  list1: {
    flexDirection: 'column',
    paddingBottom: 80,
  },
});
