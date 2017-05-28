/*
 * @Author: yewei 
 * @Date: 2017-05-27 10:52:19 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-27 15:59:54
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
import WatchFace from './components/WatchFace';

export default class Day1 extends Component {



    constructor(props) {
        super(props);
        this.state = {
            totalTime: "00:00.00",
            sectionTime: "00:00.00",
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <WatchFace />
            </View>
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