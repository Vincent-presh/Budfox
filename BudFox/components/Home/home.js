import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  PixelRatio,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../Header/header';
import MyCards from '../MyCards/mycards';
import {SharedElement, TranslateYAndOpacity} from 'react-native-motion';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scroller}>
        <View style={styles.horiflex}>
          <View style={styles.horiobj}>
            <Text style={{flex: 1}}>Total Balance</Text>
            <Text style={[styles.boldText, {flex: 1}]}>{'\u20A6'} 15,269</Text>
            <Image
              style={[styles.curv_Image, {flex: 1}]}
              source={require('../../src/assets/images/icons8-wavy-line-48.png')}
            />
          </View>
          <View style={styles.horiobj}>
            <Text style={{flex: 1}}>Monthly Spending</Text>
            <Text style={[styles.boldText, {flex: 1}]}>{'\u20A6'} 6,342</Text>
            <Image
              style={[styles.curv_Image, {flex: 1}]}
              source={require('../../src/assets/images/icons8-wavy-line-481.png')}
            />
          </View>
        </View>
        <View>
          <MyCards navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },

  scroller: {
    marginTop: 65,
    minHeight: 250,
    width: 100 + '%',
  },

  horiflex: {
    height: 155,
    marginVertical: 7,
    paddingHorizontal: 13,
    flexDirection: 'row',
  },
  horiobj: {
    flex: 1,
    height: 140,
    flexDirection: 'column',
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#f2f2f2',
  },
  curv_Image: {
    width: 58,
  },
  boldText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Home;
