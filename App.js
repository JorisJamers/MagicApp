import React from 'react';
import { StyleSheet, Text, Button, Alert, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: 'skyblue'}} />
        <View style={{flex: 1, backgroundColor: 'darkgrey'}} >
          <Text style={styles.test}>
            If you like React on the web, you'll like React Native.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  test: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
