/*
 * @Author: yewei 
 * @Date: 2017-05-27 10:52:19 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-27 15:55:37
 * 
 * day01 计时器  A stop watch
 */


'use strict';
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Utils from '../../utils/utils';

export default class Day1 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <View style={styles.container}></View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 40,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        height: 170,
    }
});