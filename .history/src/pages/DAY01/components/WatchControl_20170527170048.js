/*
 * @Author: yewei 
 * @Date: 2017-05-27 16:58:50 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-27 17:00:47
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
            <View></View>
        );
    }
}

const styles = StyleSheet.create({

});