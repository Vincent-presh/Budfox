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
import { useEffect, useRef } from "react";
import WEB_CLIENT_ID from '../../utils/keys';
import { GoogleSignin } from '@react-native-community/google-signin';
//import firebase from '../../firebase';
import auth from '@react-native-firebase/auth';

const SignIn = ({navigation}) => {

  const {width, height} = Dimensions.get('window');

  
  //const app = firebase.app("Apamo");

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['profile', 'email', 'https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '147053141410-s3h7a0nln14ptvhrqf3j1unvdpsrekgu.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true,
      forceCodeForRefreshToken: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
     // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, []);

  const onGoogleButtonPress = async () =>{
    // Get the users ID tokeen
    
      try {
        
        await GoogleSignin.hasPlayServices();
        const User = await GoogleSignin.signIn();
        console.log(User);
        // setloggedIn(true);
        //navigation.navigate('EnterNumScreen');
        const credential = auth.GoogleAuthProvider.credential(
          User.idToken,
        );
        let response = await auth().signInWithCredential(credential).then(()=>navigation.navigate('Home'));
        if (response){
          
        }
      } catch (error) {
        
        console.log(error);
      }
    
    
    // Create a Google credential with the token
  }

  const loginInto = () => {
    () => onGoogleButtonPress();
  };
//then(() => navigation.navigate('EnterNumScreen')
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
        
        <View style={styles.buttonP}>
          <TouchableOpacity
            style={styles.buttonW}
            onPress={() => onGoogleButtonPress()}>
            <Text style={{color: '#FFFFFF'}}> Continue With Google </Text>
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
