import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SharedElement} from 'react-native-motion';
import {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DepositList from '../DepositList/depositlist';

const MyCards = ({navigation}) => {
  const [sliderState, setSliderState] = useState({currentPage: 0});
  const {width, height} = Dimensions.get('window');
  const values = ['My Cards', 'Deposits'];

  const setSliderPage = (event: any) => {
    const {currentPage} = sliderState;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / (width - 60));
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const {currentPage: pageIndex} = sliderState;

  return (
    <View style={styles.container}>
      <View style={styles.paginationWrapper}>
        {Array.from(Array(2).keys()).map((key, index) => (
          <Text
            style={[
              styles.paginationDots,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                opacity: pageIndex === index ? 1 : 0.2,
                fontSize: pageIndex === index ? 20 : 16,
                color: pageIndex === index ? '#000' : '#000',
                fontWeight: pageIndex === index ? 'bold' : 'normal',
              },
            ]}
            key={index}>
            {values[index]}
          </Text>
        ))}
      </View>
      <View style={styles.pagination}>
        {Array.from(Array(2).keys()).map((key, index) => (
          <View
            style={[
              styles.paginationDotted,
              {
                backgroundColor: pageIndex === index ? '#6C63FF' : '#fff',
              },
            ]}
            key={index}
          />
        ))}
      </View>

      <ScrollView
        style={{background: '#000000'}}
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={(event: any) => {
          setSliderPage(event);
        }}>
        <View style={[{width, height}]}>
          <TouchableOpacity
            style={styles.buttonW}
            onPress={() => navigation.navigate('CardDetailsScreen')}>
            <SharedElement id="card">
              <View style={styles.card}></View>
            </SharedElement>
          </TouchableOpacity>
          <View>
            <View style={[styles.buttonP]}>
              <Text style={{fontSize: 18, fontWeight: '600', flex: 3}}>
                Add Card
              </Text>
              <Icon name="plus" size={25} color="#999" />
            </View>
            <View style={[styles.buttonP]}>
              <Text style={{fontSize: 18, fontWeight: '600', flex: 3}}>
                Deposit
              </Text>
              <Icon name="money-check" size={23} color="#999" />
            </View>
            <View style={[styles.buttonP]}>
              <Text style={{fontSize: 18, fontWeight: '600', flex: 3}}>
                Request Loan
              </Text>
              <Icon name="money-bill-alt" size={23} color="#999" />
            </View>
            <View style={[styles.buttonP]}>
              <Text style={{fontSize: 18, fontWeight: '600', flex: 3}}>
                Buy Airtime
              </Text>
              <Icon name="phone-volume" size={25} color="#999" />
            </View>
          </View>
        </View>
        <View style={{width, height}}>
          <DepositList></DepositList>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 13,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
  paginationWrapper: {
    marginHorizontal: 13,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  paginationDots: {
    marginHorizontal: 15,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 5,
  },
  paginationDotted: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,

    marginHorizontal: 51,
  },
  card: {
    marginVertical: 7,
    borderRadius: 25,
    position: 'relative',
    height: 185,
    marginHorizontal: 15,
    width: '92%',
    backgroundColor: '#6C63FF',
  },
  buttonP: {
    height: 60,
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 10,
    paddingTop: 15,
    marginHorizontal: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    justifyContent: 'center',
  },
});

export default MyCards;
