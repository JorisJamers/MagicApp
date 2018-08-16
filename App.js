
import React from 'react';
import { StyleSheet, Text, Button, Alert, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={{flex: 1, backgroundColor: 'skyblue'}} >
          <Text style={styles.loyaltyCounterTop}>
            0
          </Text>
          <Text style={styles.mainCounterTop}>
            20
          </Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'darkgrey'}} >
          <Text style={styles.mainCounterBottom}>
            20
          </Text>
          <Text style={styles.loyaltyCounterBottom}>
            0
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
  },
  mainCounterTop: {
    color: 'white',
    fontSize: 100,
    alignItems: 'center',
    transform: [{ rotate: '180deg'}],
    paddingLeft: 130,
    paddingTop: 120,
  },
  loyaltyCounterTop: {
    color: 'white',
    fontSize: 100,
    alignItems: 'center',
    transform: [{ rotate: '180deg'}],
    paddingLeft: 160,
    paddingBottom: 50,
  },
  mainCounterBottom: {
    color: 'white',
    fontSize: 100,
    alignItems: 'center',
    paddingLeft: 130,
  },
  loyaltyCounterBottom: {
    color: 'white',
    fontSize: 100,
    alignItems: 'center',
    paddingLeft: 160,
  }
});
