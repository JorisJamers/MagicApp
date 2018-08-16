import React from 'react';
import { StyleSheet, Text, Button, Alert, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={{flex: 1, backgroundColor: 'skyblue'}} >
          <Text style={styles.mainCounterTop}>
            20
          </Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'darkgrey'}} >
          <Text style={styles.mainCounterBottom}>
            20
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
  mainCounterBottom: {
    color: 'white',
    fontSize: 30,
    alignItems: 'center',
  },
  mainCounterTop: {
    color: 'white',
    fontSize: 30,
    alignItems: 'center',
    transform: [{ rotate: '180deg'}]
  },

});
