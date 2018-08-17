
import React from 'react';
import { StyleSheet, Text, Button, Alert, View } from 'react-native';

export default class App extends React.Component {

  _onPressButton() {
  Alert.alert('This is a button, and you pressed it.')
  }
  _onPressTopLoyaltyMinusButton(){

  }
  _onPressTopLoyaltyAddButton(){

  }
  _onPressTopLifeMinusButton(){

  }
  _onPressTopLifeAddButton(){

  }
  _onPressTopLoyaltyAddButton(){

  }
  _onPressTopLoyaltyAddButton(){

  }
  _onPressTopLoyaltyAddButton(){

  }
  _onPressTopLoyaltyAddButton(){

  }

  render() {

    let topLoyaltyVar = 0;
    let topLifeVar = 20;
    let bottomLifeVar = 20;
    let bottomLoyaltyVar = 0;

    return (
      <View style={styles.background}>
        <View style={{flex: 1, backgroundColor: 'skyblue'}} >
          <View style={styles.topLoyaltyView}>
            <Button
              onPress={this._onPressButton}
              title="+"
              color="#841584"
            />
            <Text style={styles.loyaltyCounterTop}>
              {topLoyaltyVar}
            </Text>
            <Button
              onPress={this._onPressButton}
              title="-"
              color="#841584"
            />
          </View>
          <Text style={styles.topTitle}>
            Loyalty Points
          </Text>
          <View style={styles.topCounterView}>
            <Button
              onPress={this._onPressButton}
              title="+"
              color="#841584"
            />
            <Text style={styles.mainCounterTop}>
              {topLifeVar}
            </Text>
            <Button
              onPress={this._onPressButton}
              title="-"
              color="#841584"
            />
          </View>
          <Text style={styles.topTitle}>
            Lifepoints
          </Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'darkgrey'}} >
          <Text style={styles.bottomTitle}>
            Lifepoints
          </Text>
          <View style={styles.bottomCounterView}>
            <Button
              onPress={this._onPressButton}
              title="-"
              color="#841584"
            />
            <Text style={styles.mainCounterBottom}>
              {bottomLifeVar}
            </Text>
            <Button
              onPress={this._onPressButton}
              title="+"
              color="#841584"
            />
          </View>
          <Text style={styles.bottomTitle}>
            Loyalty Points
          </Text>
          <View style={styles.bottomLoyaltyView}>
            <Button
              onPress={this._onPressButton}
              title="-"
              color="#841584"
            />
            <Text style={styles.loyaltyCounterTop}>
              {bottomLoyaltyVar}
            </Text>
            <Button
              onPress={this._onPressButton}
              title="+"
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
  topTitle: {
    transform: [{ rotate: '180deg'}],
    fontSize: 20,
  },
  bottomTitle: {
    fontSize: 20,
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
    paddingTop: 10,
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

  }
});
