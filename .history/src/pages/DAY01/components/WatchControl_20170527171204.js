/*
 * @Author: yewei 
 * @Date: 2017-05-27 16:58:50 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-27 17:12:04
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
    TouchableOpacity
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
            btnStopText: '记次'
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.start}>
                    <TouchableOpacity style={styles.btnStop}>
                        <Text style={styles.btnStopText}>{this.state.btnStopText}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.end}>
                    <TouchableOpacity style={styles.btnStart}>

                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btnStop: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    btnStopText: {
        fontSize: 14,
        backgroundColor: "transparent",
        color: "#555"
    },
    start: {
        flex: 1,
        alignItems: 'flex-start'
    },
    end: {
        flex: 1,
        alignItems: 'flex-end'
    },
    container: {
        width: Utils.size.width,
        height: 100,
        flexDirection: "row",
        backgroundColor: '#f3f3f3',
        paddingTop: 30,
        paddingLeft: 60,
        paddingRight: 60,
        paddingBottom: 0,
    }
});