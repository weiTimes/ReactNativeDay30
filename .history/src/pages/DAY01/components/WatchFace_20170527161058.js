/*
 * @Author: yewei 
 * @Date: 2017-05-27 15:56:47 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-27 16:10:52
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
        fontSize: Utils.size.width === 375 ? 70 : 60,
        fontWeight: "100",
        color: "#222",
        paddingLeft: 20
    },
    sectionTime: {
        fontSize: 20,
        fontWeight: "100",
        paddingRight: 30,
        color: "#555",
        position: "absolute",
        left: Utils.size.width - 140,
        top: 30
    },
    container: {
        flex: 1,
        paddingTop: 50,
        // paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 40,
        backgroundColor: "#0af",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        height: 170,
    }
});