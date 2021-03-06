/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
var {height, width} = Dimensions.get('window');

type Props = {};
export default class App extends Component<Props> {

  onSuccess(e) {
    console.log(e.data);
  }

  render() {
    return (
      <View style={styles.container}>

        <QRCodeScanner
          onRead={this.onSuccess.bind(this)}

          topContent={
            <Text style={styles.centerText}>
              Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
            </Text>
          }

          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              {/* <Text style={styles.buttonText}>OK. Got it!</Text> */}
            </TouchableOpacity>
          }

          cameraStyle={{
            height: height
          }}

          markerStyle={{
            height: height / 4
          }}

          showMarker={true}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: height,
    flex: 1
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
