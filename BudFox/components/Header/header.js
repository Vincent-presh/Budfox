import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Image
          style={styles.dp_Image}
          source={require('../../src/assets/images/profile.png')}
        />
      </View>
      <View style={{flex: 7}}>
        <Text style={styles.text}> Hi, James!</Text>
      </View>
      <View style={{flex: 1}}>
        <Icon name="bell" size={29} color="#999" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    height: 65,
    width: 100 + '%',
    zIndex: 2,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingHorizontal: 18,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
  dp_Image: {
    height: 45,
    width: 45,
    borderRadius: 32,
  },
  text: {
    fontSize: 16,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    letterSpacing: 1.3,
  },
  icon: {
    borderWidth: 1,
  },
});

export default Header;
