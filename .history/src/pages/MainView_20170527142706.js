/*
 * @Author: yewei 
 * @Date: 2017-05-26 15:40:47 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-27 14:27:06
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
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';

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
        let boxs = this.state.days.map((value, key) => {
            let showIcon = value.isFA ?
                <IconFA size={value.size} name={value.icon} style={[styles.boxIcon, { color: value.color }]} /> :
                <Icon size={value.size} name={value.icon} style={[styles.boxIcon, { color: value.color }]} />;
            return (
                <TouchableOpacity
                    style={[styles.touchBox, key % 3 == 2 ? styles.touchBox1 : styles.touchBox2]} // 最后一个只有下边框，没有右边框
                    key={key}
                    underlayColor="#eee"
                    onPress={() => this._jumpToDay(key)}
                >
                    <View style={styles.boxContainer}>
                        <Text style={styles.boxText}>Day{key + 1}</Text>
                        {showIcon}
                    </View>
                </TouchableOpacity>
            );
        });
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
                            <Image style={styles.image} source={require('../images/day2.png')} resizeMode={'cover'} />
                            <Text style={styles.slideText}>Day2: Weather</Text>
                        </View>
                    </TouchableOpacity>
                </Swiper>
                <View style={styles.touchBoxContainer}>
                    {boxs}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    boxIcon: {
        position: "relative",
        // top: -10
    },
    boxText: {
        position: "absolute",
        bottom: 15,
        width: Utils.size.width / 3 - Utils.pixel,
        textAlign: "center",
        left: 0,
        backgroundColor: "transparent"
    },
    boxContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: Utils.size.width / 3 - Utils.pixel,
        height: Utils.size.width / 3 - Utils.pixel,
    },
    touchBox: {
        width: Utils.size.width / 3 - Utils.pixel, // 减去边框的宽度
        height: Utils.size.width / 3 - Utils.pixel,
        backgroundColor: "#fff",
    },
    touchBox1: {
        borderBottomWidth: Utils.pixel,
        borderBottomColor: "#ccc",
    },
    touchBox2: {
        borderBottomWidth: Utils.pixel,
        borderBottomColor: "#ccc",
        borderRightWidth: Utils.pixel,
        borderRightColor: "#ccc",
    },
    touchBoxContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: Utils.size.width,
        borderTopWidth: Utils.pixel,
        borderTopColor: "#ccc",
        borderLeftWidth: Utils.pixel,
        borderLeftColor: "#ccc",
        borderRightWidth: Utils.pixel,
        borderRightColor: "#ccc",
    },
    image: {
        width: Utils.size.width,
        height: 150,
        alignSelf: 'stretch',
        resizeMode: Image.resizeMode.cnotain
    },
    slide: {
        // flexGrow: 1,
        width: Utils.size.width,
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