/*
 * @Author: yewei 
 * @Date: 2017-05-26 15:40:47 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-27 11:38:15
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
    TouchableOpacity,
    Image
} from 'react-native';
import Swiper from 'react-native-swiper';

import Utils from '../utils/utils';
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
                        <View style={styles.slide}>
                            <Image style={styles.image} source={require('../images/day1.png')} />
                            <Text style={styles.slideText}>Day1: Timer</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._jumpToDay(1)}>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={require('../images/day2.png')} />
                            <Text style={styles.slideText}>Day2: Weather</Text>
                        </View>
                    </TouchableOpacity>
                </Swiper>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: Utils.size.width,
        flexGrow: 1,
        alignSelf: 'stretch',
        // resizeMode: Image.resizeMode.cnotain
    },
    slide: {
        flexGrow: 1,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideText: {
        position: "absolute",
        bottom: 0,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "rgba(255,255,255,0.5)",
        width: Utils.size.width,
        textAlign: "center",
        fontSize: 12
    },
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