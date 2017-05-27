/*
 * @Author: yewei 
 * @Date: 2017-05-26 15:40:47 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-27 11:11:31
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
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';


import DAYS from '../data/days'; // 每天的数据

export default class MainView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: DAYS
        };
    }

    _jumpToDay(index) {
        this.props.navigator.push({
            title: this.state.days[index].title,
            index: index + 1,
            display: !this.state.days[index].hideNav,
            component: this.state.days[index].component
        });
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
                    <TouchableOpacity onPress={() => this._jumpToDay(0)}>

                    </TouchableOpacity>
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