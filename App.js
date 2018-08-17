
import React from 'react';
import { StyleSheet, Text, Button, Alert, View } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      topLoyaltyVar: 0,
      topLifeVar: 20,
      bottomLifeVar: 20,
      bottomLoyaltyVar: 0,
    };
  }

  render() {

    return (
      <View style={styles.background}>
        <View style={{flex: 1, backgroundColor: 'skyblue'}} >
          <View style={styles.topLoyaltyView}>
            <Button
              onPress={this.setState({topLoyaltyVar: this.state.topLoyaltyVar + 1})}
              title="+"
              color="#841584"
            />
            <Text style={styles.loyaltyCounterTop}>
              {this.state.topLoyaltyVar}
            </Text>
            <Button
              onPress={this.setState({topLoyaltyVar: this.state.topLoyaltyVar - 1})}
              title="-"
              color="#841584"
            />
          </View>
          <Text style={styles.topTitle}>
            Loyalty Points
          </Text>
          <View style={styles.topCounterView}>
            <Button
              onPress={this.setState({topLifeVar: this.state.topLifeVar + 1})}
              title="+"
              color="#841584"
            />
            <Text style={styles.mainCounterTop}>
              {this.state.topLifeVar}
            </Text>
            <Button
              onPress={this.setState({topLifeVar: this.state.topLifeVar - 1})}
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
              onPress={this.setState({bottomLifeVar: this.state.bottomLifeVar - 1})}
              title="-"
              color="#841584"
            />
            <Text style={styles.mainCounterBottom}>
              {this.state.bottomLifeVar}
            </Text>
            <Button
              onPress={this.setState({bottomLifeVar: this.state.bottomLifeVar + 1})}
              title="+"
              color="#841584"
            />
          </View>
          <Text style={styles.bottomTitle}>
            Loyalty Points
          </Text>
          <View style={styles.bottomLoyaltyView}>
            <Button
              onPress={this.setState({bottomLoyaltyVar: this.state.bottomLoyaltyVar - 1})}
              title="-"
              color="#841584"
            />
            <Text style={styles.loyaltyCounterTop}>
              {this.state.bottomLoyaltyVar}
            </Text>
            <Button
              onPress={this.setState({bottomLoyaltyVar: this.state.bottomLoyaltyVar + 1})}
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
