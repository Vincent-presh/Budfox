import React from 'react';

import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {SharedElement} from 'react-native-motion';
import Bheader from '../BHeader';
import Header from '../Header/header';
import DepositList from '../DepositList/depositlist';

class Cardetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navigation: props.navigation,
    };
  }

  render() {
    const {width, height} = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <Bheader></Bheader>
        <ScrollView style={[width, height, styles.containView]}>
          <SharedElement sourceId="card">
            <View style={styles.card}></View>
          </SharedElement>
          <View>
            <DepositList></DepositList>
          </View>
        </ScrollView>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
  card: {
    marginVertical: 7,
    borderRadius: 25,
    height: 185,
    marginHorizontal: 15,
    width: '92%',
    backgroundColor: '#6C63FF',
  },
  containView: {
    marginTop: 65,
    minHeight: 0,
    width: 100 + '%',
  },
});
export default Cardetails;
