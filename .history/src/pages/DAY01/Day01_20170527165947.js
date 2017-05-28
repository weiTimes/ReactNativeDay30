/*
 * @Author: yewei 
 * @Date: 2017-05-27 10:52:19 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-27 16:59:10
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
    Platform,
    StatusBar
} from 'react-native';

import Utils from '../../utils/utils';
import WatchFace from './components/WatchFace';
import WatchRecord from './components/WatchRecord';
import WatchControl from './components/WatchControl';

export default class Day1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            totalTime: "00:00.00",
            sectionTime: "00:00.01",
            record: [
                { title: "00:00.01", time: "00:00.01" },
                { title: "00:00.02", time: "00:00.02" },
                { title: "", time: "" },
                { title: "", time: "" },
                { title: "", time: "" },
                { title: "", time: "" },
                { title: "", time: "" }
            ],
        };
    }

    render() {

        return (
            <View style={styles.container}>
                <WatchFace totalTime={this.state.totalTime} sectionTime={this.state.sectionTime} />
                <WatchControl
                    addRecord={() => this._addRecord()}
                    clearRecord={() => this._clearRecord()}
                    startWatch={() => this._startWatch()}
                    stopWatch={() => this._stopWatch()}
                />
                <WatchRecord record={this.state.record}></WatchRecord>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#f3f3f3",
        marginTop: 60,
    }
});