/*
 * @Author: yewei 
 * @Date: 2017-05-27 10:52:19 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-27 18:33:27
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
                { title: "df", time: "adf" },
                { title: "", time: "" },
                { title: "", time: "" },
                { title: "", time: "" },
                { title: "", time: "" },
                { title: "", time: "" },
                { title: "", time: "" }
            ],
            recordTime: 0,
            recordCounter: 0,
            timeAccumulation: 0,
            intialTime: 0,
            currentTime: 0,
            stopWatch: false,
            resetWatch: true,

        };
    }

    _addRecord() {
        let { recordCounter, record } = this.state;
        recordCounter++;
        if (recordCounter < 8) {
            record.pop();
        }
        console.log(this.state.currentTime);

        record.unshift({ title: '计次', time: this.state.sectionTime });
        this.setState({
            recordTime: this.state.timeAccumulation + this.state.currentTime - this.state.initialTime,
            recordCounter: recordCounter,
            record: record
        });

    }

    /**
     * 回到初始状态
     * 
     * 
     * @memberof Day1
     */
    _clearRecord() {
        this.setState({
            stopWatch: false,
            resetWatch: true,
            intialTime: 0,
            currentTime: 0,
            recordTime: 0,
            timeAccumulation: 0,
            totalTime: "00:00.00",
            sectionTime: "00:00.00",
            recordCounter: 0,
            record: [
                { title: "", time: "" },
                { title: "", time: "" },
                { title: "", time: "" },
                { title: "", time: "" },
                { title: "", time: "" },
                { title: "", time: "" },
                { title: "", time: "" }
            ],
        });
    }
    _startWatch() {
        if (this.state.resetWatch) {
            this.setState({
                stopWatch: false,
                resetWatch: false,
                timeAccumulation: 0,
                initialTime: (new Date()).getTime()
            })
        } else {
            this.setState({
                stopWatch: false,
                initialTime: (new Date()).getTime()
            })
        }
        let milSecond, second, minute, countingTime, secmilSecond, secsecond, secminute, seccountingTime;
        let interval = setInterval(
            () => {
                this.setState({
                    currentTime: (new Date()).getTime()
                })
                countingTime = this.state.timeAccumulation + this.state.currentTime - this.state.initialTime;
                minute = Math.floor(countingTime / (60 * 1000));
                second = Math.floor((countingTime - 6000 * minute) / 1000);
                milSecond = Math.floor((countingTime % 1000) / 10);
                seccountingTime = countingTime - this.state.recordTime;
                secminute = Math.floor(seccountingTime / (60 * 1000));
                secsecond = Math.floor((seccountingTime - 6000 * secminute) / 1000);
                secmilSecond = Math.floor((seccountingTime % 1000) / 10);
                this.setState({
                    totalTime: (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second) + "." + (milSecond < 10 ? "0" + milSecond : milSecond),
                    sectionTime: (secminute < 10 ? "0" + secminute : secminute) + ":" + (secsecond < 10 ? "0" + secsecond : secsecond) + "." + (secmilSecond < 10 ? "0" + secmilSecond : secmilSecond),
                })
                if (this.state.stopWatch) {
                    this.setState({
                        timeAccumulation: countingTime
                    })
                    clearInterval(interval)
                };
            }, 10);
    }
    _stopWatch() {
        this.setState({
            stopWatch: true
        });
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