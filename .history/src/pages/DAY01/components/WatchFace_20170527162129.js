/*
 * @Author: yewei 
 * @Date: 2017-05-27 15:56:47 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-27 16:21:19
 * 
 * 计数显示区域
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

export default class WatchFace extends Component {
    static propTypes = {
        sectionTime: React.PropTypes.string.isRequired,
        totalTime: React.PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.sectionTime}>{this.props.sectionTime}</Text>
                <Text style={styles.totalTime}>{this.props.totalTime}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    totalTime: {
        fontSize: 80,
        fontWeight: "100",
        color: "#222",
        textAlign: 'right'
    },
    sectionTime: {
        fontSize: 20,
        fontWeight: "100",
        color: "#555",
        textAlign: 'right'
    },
    container: {
        width: Utils.size.width,
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 40,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        height: 170,
    }
});