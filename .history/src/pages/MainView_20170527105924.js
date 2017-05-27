/*
 * @Author: yewei 
 * @Date: 2017-05-26 15:40:47 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-27 10:59:23
 * 
 * 首页
 */

'use strict';
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

import DAYS from '../data/days'; // 每天的数据

export default class MainView extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {

        return (
            <ScrollView style={styles.mainView} title={this.props.title}>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        marginTop: 63
    },
});