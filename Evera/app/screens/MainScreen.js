import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {mpsb} from '../utils/fonts';

function MainScreen({navigation}) {
  return (
    <View style={styles.main}>
      <Text style={styles.logo}>LOGO</Text>
      <Text style={styles.signuplogo}>Sign Up!</Text>
      <TouchableOpacity style={styles.signup}>
        <Text style={styles.textsignup}>FACEBOOK</Text>
      </TouchableOpacity>
      <Text style={styles.divider}> ──────────── or ────────────</Text>
      <TouchableOpacity
        style={styles.signin}
        onPress={() => navigation.push('Login')}>
        <Text style={styles.textsignin}>GOOGLE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{paddingTop: 20}}>
        <Text style={styles.signuplater}>Sign Up Later </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 40,
  },
  divider: {
    color: '#6D6E72',
    top: 385,
    fontSize: 14,
    fontFamily: 'Proxima Nova',
  },
  logo: {
    fontSize: 40,
    color: '#FECD36',
    top: 114,
    fontFamily: mpsb,
  },
  signin: {
    top: 390,
    backgroundColor: '#FECD36',
    padding: 10,
    width: 240,
    height: 50,
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 60,
    marginRight: 60,
    borderRadius: 40,
    borderWidth: 2,
    fontFamily: mpsb,
  },
  signup: {
    top: 370,
    backgroundColor: '#FECD36',
    padding: 10,
    width: 240,
    height: 50,
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 60,
    marginRight: 60,
    borderRadius: 40,
    borderWidth: 2,
  },
  textsignin: {
    left: 75,
    fontSize: 14,
    color: '#010101',
    fontFamily: mpsb,
    bottom: 3,
  },
  textsignup: {
    left: 75,
    fontSize: 14,
    color: '#010101',
    bottom: 3,
  },
  signuplater: {
    fontSize: 12,
    color: '#E1E1E2',
    top: 390,
  },
  signuplogo: {
    color: '#E1E1E2',
    fontSize: 20,
    fontFamily: 'Proxima Nova',
    top: 350,
  },
});

export default MainScreen;
