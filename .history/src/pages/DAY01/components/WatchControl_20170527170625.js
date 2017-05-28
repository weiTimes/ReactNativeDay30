/*
 * @Author: yewei 
 * @Date: 2017-05-27 16:58:50 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-27 17:05:08
 * 
 * 计数控制器
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
import Utils from '../../../utils/utils';

export default class WatchControl extends Component {
    static propTypes = {
        stopWatch: React.PropTypes.func.isRequired,
        clearRecord: React.PropTypes.func.isRequired,
        startWatch: React.PropTypes.func.isRequired,
        addRecord: React.PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.start}></View>
                <View style={styles.end}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    width: Utils.size.width,
    height: 100,
    flexDirection: "row",
    backgroundColor: '#f3f3f3',
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 0,
});