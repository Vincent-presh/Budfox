/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  PixelRatio,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const Intro = ({navigation}) => {
  const [sliderState, setSliderState] = useState({currentPage: 0});
  const {width, height} = Dimensions.get('window');

  const setSliderPage = (event: any) => {
    const {currentPage} = sliderState;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
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
      <ScrollView
        style={{flex: 1, backgroud: '#FFFFFF'}}
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={(event: any) => {
          setSliderPage(event);
        }}>
        <View style={{width, height}}>
          <Image
            source={require('../../src/assets/images/pay.png')}
            style={styles.imageStyle}
          />
          <View style={styles.wrapper}>
            <Text style={styles.header}>Save</Text>
            <Text style={styles.paragraph}>
              Start Your journey towards a better financial life
            </Text>
          </View>
        </View>
        <View style={{width, height}}>
          <Image
            source={require('../../src/assets/images/loans.png')}
            style={styles.imageStyle}
          />
          <View style={styles.wrapper}>
            <Text style={styles.header}> Take Loans</Text>
            <Text style={styles.paragraph}>
              Apply for a personal loan and get some valuable tips that will
              help you get your application approved.
            </Text>
          </View>
        </View>
        <View style={{width, height}}>
          <Image
            source={require('../../src/assets/images/phone.png')}
            style={styles.imageStyle}
          />
          <View style={styles.wrapper}>
            <Text style={styles.header}>Recharge Airtime Instantly</Text>
            <Text style={styles.paragraph}>... all in one place</Text>
          </View>

          <View style={styles.buttonP}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('SignInScreen')}>
              <Text style={{color: '#FFFFFF'}}> Get Started </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.paginationWrapper}>
        {Array.from(Array(3).keys()).map((key, index) => (
          <View
            style={[
              styles.paginationDots,
              // eslint-disable-next-line react-native/no-inline-styles
              {opacity: pageIndex === index ? 1 : 0.2},
            ]}
            key={index}
          />
        ))}
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
  buttonP: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    width: 110,
    height: 40,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#6C63FF',
  },
  imageStyle: {
    marginVertical: 20,
    height: PixelRatio.getPixelSizeForLayoutSize(135),
    resizeMode: 'contain',
    width: '100%',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  header: {
    paddingHorizontal: 20,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    paddingHorizontal: 20,
    fontSize: 17,
    textAlign: 'center',
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: '#6C63FF',
    marginLeft: 10,
  },
});

export default Intro;
