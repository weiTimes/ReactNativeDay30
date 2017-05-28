/*
 * @Author: yewei 
 * @Date: 2017-05-27 10:52:19 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-27 18:04:59
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
            sectionTime: "00:00.00",
            record: [
                { title: "", time: "" },
                { title: "", time: "" },
                { title: "", time: "" },
                { title: "", time: "" },
                { title: "", time: "" },
                { title: "", time: "" },
                { title: "", time: "" }
            ],
            recordCounter: 0,

        };
    }

    _addRecord() {
        let { recordCounter, record } = this.state;
        recordCounter++;
        if (recordCounter < 8) {
            record.pop();
        }
        record.unshift({ title: '计次', time: this.state.sectionTime })

    }
    _clearRecord() {

    }
    _startWatch() {

    }
    _stopWatch() {

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