
import React from 'react';
import { StyleSheet, Text, Button, Alert, View } from 'react-native';

export default class App extends React.Component {

  _onPressButton() {
  Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.background}>
        <View style={{flex: 1, backgroundColor: 'skyblue'}} >
          <View style={styles.topLoyaltyView}>
            <Button
              onPress={this._onPressButton}
              title="-"
              color="#841584"
            />
            <Text style={styles.loyaltyCounterTop}>
              0
            </Text>
            <Button
              onPress={this._onPressButton}
              title="+"
              color="#841584"
            />
          </View>
          <View style={styles.topCounterView}>
            <Button
              onPress={this._onPressButton}
              title="-"
              color="#841584"
            />
            <Text style={styles.mainCounterTop}>
              20
            </Text>
            <Button
              onPress={this._onPressButton}
              title="+"
              color="#841584"
            />
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: 'darkgrey'}} >
          <View style={styles.bottomCounterView}>
            <Button
              onPress={this._onPressButton}
              title="+"
              color="#841584"
            />
            <Text style={styles.mainCounterBottom}>
              20
            </Text>
            <Button
              onPress={this._onPressButton}
              title="-"
              color="#841584"
            />
          </View>
          <View style={styles.bottomLoyaltyView}>
            <Button
              onPress={this._onPressButton}
              title="+"
              color="#841584"
            />
            <Text style={styles.loyaltyCounterTop}>
              0
            </Text>
            <Button
              onPress={this._onPressButton}
              title="-"
              color="#841584"
            />
          </View>
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
  topLoyaltyView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  topCounterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomCounterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  bottomLoyaltyView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainCounterTop: {
    color: 'white',
    fontSize: 100,
    alignItems: 'center',
    transform: [{ rotate: '180deg'}],
  },
  loyaltyCounterTop: {
    color: 'white',
    fontSize: 100,
    alignItems: 'center',
    transform: [{ rotate: '180deg'}],
  },
  mainCounterBottom: {
    color: 'white',
    fontSize: 100,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingBottom: 0,
  }
});
