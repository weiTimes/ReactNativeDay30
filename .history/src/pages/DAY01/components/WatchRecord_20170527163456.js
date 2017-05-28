/*
 * @Author: yewei 
 * @Date: 2017-05-27 16:33:07 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-27 16:34:12
 * 
 * 显示计数记录
 */


'use strict';
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';

export default class WatchRecord extends Component {
    static propTypes = {
        record: React.PropTypes.array.isRequired,
    };

    constructor(props) {
        super(props);

        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
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