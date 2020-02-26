import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

function LoginScreen({navigation}) {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container1}>
      <View style={styles.con}>
        <View style={styles.container2}>
          <TextInput
            placeholder="username"
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={styles.input}
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            placeholder="password"
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={styles.input}
            secureTextEntry
            returnKeyType="go"
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.push('Navigation')}>
            <Text style={styles.buttontext}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    //backgroundColor: '#141414'
  },
  container2: {
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10,
  },
  buttontext: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '700',
  },
  buttonContainer: {
    backgroundColor: '#f3c534',
    padding: 10,
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 30,
    borderWidth: 2,
  },
  con: {
    justifyContent: 'center',
    paddingTop: 250,
  },
});

export default LoginScreen;
