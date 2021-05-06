/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  PixelRatio,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const SignIn = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <Image
        source={require('../../src/assets/images/logo.png')}
        style={styles.logo}
      />
      <View style={{flex: 2}}>
        <View>
          <TextInput style={styles.button} placeholder="First Name" />
        </View>
        <View style={styles.button}>
          <Text style={{color: '#A00'}}>Log In With Google</Text>
        </View>
        <View style={styles.buttonP}>
          <TouchableOpacity
            style={styles.buttonW}
            onPress={() => navigation.navigate('EnterNumScreen')}>
            <Text style={{color: '#FFFFFF'}}> Continue </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#000',
  },

  logo: {
    padding: 20,
    height: PixelRatio.getPixelSizeForLayoutSize(155),
    width: '80%',
    resizeMode: 'contain',
    flex: 1,
  },
  button: {
    padding: 10,
    margin: 5,
    fontSize: 15,

    fontWeight: 'bold',
    alignItems: 'flex-start',
    width: Dimensions.get('window').width - 60,
    height: 47,
    color: '#000',
    borderColor: '#F2F2F2',
    borderStyle: 'solid',
    borderRadius: 8,
    borderWidth: 1,
  },
  buttonW: {
    padding: 10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width - 60,
    height: 47,
    borderColor: '#F2F2F2',
    borderStyle: 'solid',
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#6C63FF',
  },
  buttonP: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default SignIn;
