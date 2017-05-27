/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Root from './src/Root';
export default class Day30ReactNative extends Component {
  render() {
    return (
      <Root />
    );
  }
}

AppRegistry.registerComponent('Day30ReactNative', () => Day30ReactNative);
