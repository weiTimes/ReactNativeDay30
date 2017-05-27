/*
 * @Author: yewei 
 * @Date: 2017-05-26 15:40:47 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-27 11:06:56
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
import Swiper from 'react-native-swiper';


import DAYS from '../data/days'; // 每天的数据

export default class MainView extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        console.log(this.props);

        return (
            <ScrollView style={styles.mainView} title={this.props.title}>
                <Swiper
                    height={150}
                    showsButtons={false}
                    autoplay={true}
                    activeDot={<View style={styles.activeDot} />}
                >
                </Swiper>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    activeDot: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    },
    mainView: {
        marginTop: 63 // 43 + 20
    },
});