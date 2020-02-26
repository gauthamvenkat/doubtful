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
  }
  fetchData = async () => {
    const response = await fetch(
      'http://www.json-generator.com/api/json/get/ceDWvXunQO?indent=2',
    );
    const json = await response.json();
    this.setState({data: json.news});
  };
  handleclick = () => {
    this.setState({playing: true});
  };
  /*renderIconComponent = playing => {
    const play = false;
    if (play === playing) {
      return (
        <Icon
          type="material-community"
          name="pause-circle"
          size={20}
          style={styles.play}
          onPress={() => TrackPlayer.pause()}
        />
      );
    } else {
      return (
        <Icon
          type="material-community"
          name="play-circle"
          size={20}
          style={styles.play}
          onPress={() => TrackPlayer.play()}
        />
      );
    }
  };*/
  playtrack() {}
  trackPlayer(playerid, playerurl, playertitle, playerartist, playerartwork) {
    TrackPlayer.setupPlayer().then(async () => {
      await TrackPlayer.add({
        id: playerid,
        url: playerurl,
        title: playertitle,
        artist: playerartist,
        artwork: playerartwork,
      });
      this.playsate = await TrackPlayer.getState();
      /*TrackPlayer.addEventListener('playback-state', data => {
        console.log('playback-state:', data.state);
        this.state = data.state;
        return (
        <Icon
          type="material-community"
          name="pause-circle"
          size={20}
          style={styles.play}
          onPress={() => TrackPlayer.pause()}
        />
      );
        }
      });*/
      TrackPlayer.updateOptions({
        alwaysPauseOnInterruption: true,
        waitForBuffer: true,
        stopWithApp: true,
        capabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_SEEK_TO,
          TrackPlayer.CAPABILITY_JUMP_FORWARD,
          TrackPlayer.CAPABILITY_JUMP_BACKWARD,
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
    });
  }
  renderIconComponent() {
    console.log(this.state.playerstate);
    if (this.playsate === 8) {
      console.log('isequal');
      return (
        <Icon
          type="material-community"
          name="pause-circle"
          size={20}
          style={styles.play}
          onPress={() => TrackPlayer.pause()}
        />
      );
    }
  }
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
                      this.trackPlayer(
                        item.id,
                        item.audio,
                        'Song',
                        'Gautham',
                        item.image,
                      );
                      TrackPlayer.play();
                    }}>
                    <View>
                      <ImageBackground
                        source={{uri: item.image}}
                        resizeMode="cover"
                        style={styles.image}>
                        {this.state.isPlaying ? (
                          true
                        ) : (
                          <Icon
                            type="material-community"
                            name="play-circle"
                            size={20}
                            style={styles.play}
                            onPress={() => TrackPlayer.play()}
                          />
                        )}
                        {this.state.isPlaying ? (
                          false
                        ) : (
                          <Icon
                            type="material-community"
                            name="play-circle"
                            size={20}
                            style={styles.play}
                            onPress={() => TrackPlayer.play()}
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
                    onPress={() => {
                      TrackPlayer.setupPlayer().then(async () => {
                        await TrackPlayer.add({
                          id: item.id,
                          url: item.audio,
                          title: 'Track Title',
                          artist: 'Track Artist',
                          artwork: item.image,
                        });
                        TrackPlayer.updateOptions({
                          capabilities: [
                            TrackPlayer.CAPABILITY_PLAY,
                            TrackPlayer.CAPABILITY_PAUSE,
                            TrackPlayer.CAPABILITY_STOP,
                          ],
                          compactCapabilities: [
                            TrackPlayer.CAPABILITY_PLAY,
                            TrackPlayer.CAPABILITY_PAUSE,
                            TrackPlayer.CAPABILITY_STOP,
                          ],
                        });
                      });
                      TrackPlayer.play();
                    }}>
                    <View>
                      <ImageBackground
                        source={{uri: item.image}}
                        resizeMode="cover"
                        style={styles.image}>
                        {this.renderIconComponent()}
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
    fontSize: 20,
  },
  listview: {
    paddingTop: 10,
    paddingBottom: 8,
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
  },
});
