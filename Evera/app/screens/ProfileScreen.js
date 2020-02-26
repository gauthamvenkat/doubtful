import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {mpr, mpb} from '../utils/fonts';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Ionicons';

function ProfileScreen({navigation}) {
  return (
    <ScrollView>
      <View>
        <View style={styles.containermain}>
          <ImageBackground
            source={{
              uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            }}
            style={styles.cover}>
            <Image
              source={{
                uri:
                  'https://reactnativecode.com/wp-content/uploads/2018/01/2_img.png',
              }}
              style={styles.profile}
            />
            <TouchableOpacity>
              <Text style={styles.edit}>EditProfile</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View>
          <Text style={styles.name}>Gautham V</Text>
          <Text style={styles.number}>+91 8220374459</Text>
          <Text style={styles.email}>gauthamperam@gmail.com</Text>
          <Text style={styles.borderA}>────────────────────────────</Text>
        </View>
        <View style={styles.containerA}>
          <Icon name="book-open" style={styles.ICON} size={35} />
          <TouchableOpacity>
            <Text style={styles.buttontext}>My Stories</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerB}>
          <Icon1 name="web" style={styles.ICON} size={35} />
          <TouchableOpacity>
            <Text style={styles.buttontext}>Language</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerC}>
          <Icon2 name="hearto" style={styles.ICON} size={35} />
          <TouchableOpacity>
            <Text style={styles.buttontext}>Interests</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.border}>──────────────────────────</Text>
        <View style={styles.containerC}>
          <Icon3 name="md-help-buoy" style={styles.ICON} size={35} />
          <TouchableOpacity>
            <Text style={styles.buttontext}>Help</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerC}>
          <Icon1 name="logout" style={styles.ICON} size={35} />
          <TouchableOpacity>
            <Text style={styles.buttontext}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  buttontext: {
    fontFamily: mpr,
    color: '#E1E1E2',
    paddingLeft: 8,
    paddingTop: 3,
    fontSize: 20,
  },
  constainermain: {
    justifyContent: 'center',
  },
  containerA: {
    flexDirection: 'row',
    paddingTop: 140,
    paddingLeft: 24,
  },
  containerB: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 24,
  },
  containerC: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 24,
  },
  ICON: {
    color: '#E1E1E2',
  },
  border: {
    paddingLeft: 28.5,
    paddingTop: 20,
    color: '#6D6E72',
  },
  cover: {
    width: 440,
    height: 250,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 150 / 2,
    left: 150,
    top: 200,
  },
  edit: {
    fontSize: 20,
    fontFamily: mpr,
    color: '#FFFFFF',
    left: 290,
    top: 100,
    backgroundColor: '#01010180',
    width: 105,
    height: 24,
    opacity: 100,
    alignContent: 'center',
  },
  name: {
    color: '#E1E1E2',
    fontFamily: mpb,
    fontSize: 16,
    top: 60,
    left: 155,
  },
  number: {
    color: '#A1A1A4',
    top: 70,
    fontFamily: mpr,
    left: 150,
    fontSize: 12,
  },
  email: {
    color: '#A1A1A4',
    top: 80,
    fontFamily: mpr,
    left: 125,
    fontSize: 12,
  },
  borderA: {
    color: '#6D6E72',
    left: 16,
    right: 16,
    top: 100,
  },
});
export default ProfileScreen;
