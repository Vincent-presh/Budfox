import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';

const DepositList = () => {
  return (
    <View style={styles.container}>
      {Array.from(Array(3).keys()).map((key, index) => (
        <View style={styles.listItem} key={index}>
          <Image
            style={styles.dp_Image}
            source={require('../../src/assets/images/loans.png')}
          />
          <Text style={styles.boldText}>Savings</Text>
          <Text style={styles.lightText}>{'\u20A6'} 675</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
  boldText: {
    fontSize: 18,
    fontWeight: '600',
    flex: 5,
    paddingTop: 10,
    paddingLeft: 15,
  },
  dp_Image: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    flexDirection: 'row',
    paddingVertical: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    height: 65,
  },
  lightText: {
    paddingTop: 15,
    paddingRight: 15,
  },
});

export default DepositList;
