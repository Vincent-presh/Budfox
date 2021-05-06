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

class Bheader extends React.Component {
  constructor(props) {
    super();
    this.state = {
      someKey: 'someValue',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Icon name="arrow-left" size={20} color="#999" />
        </View>
        <View style={{flex: 15}}>
          <Text style={styles.text}> Card Details</Text>
        </View>
        <View style={{flex: 1}}>
          <Icon name="ellipsis-v" size={20} color="#999" />
        </View>
      </View>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue',
    });
  }
}

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

export default Bheader;
