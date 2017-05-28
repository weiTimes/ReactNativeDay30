/*
 * @Author: yewei 
 * @Date: 2017-05-26 15:34:19 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-27 14:32:59
 * 
 * 项目根入口
 */

'use strict';
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import MainView from './pages/MainView';

export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    /**
     * 转场动画
     * 
     * @param {any} route 
     * @param {any} routeStack 
     * @returns 
     * 
     * @memberof Root
     */
    _configureScene(route, routeStack) {
        if (route.type == 'Bottom') {
            return Navigator.SceneConfigs.FloatFromBottom;
        }
        return Navigator.SceneConfigs.PushFromRight;
    }

    /**
     * 渲染组件
     * 
     * @param {any} route 
     * @param {any} navigator 
     * @returns 
     * 
     * @memberof Root
     */
    _renderScene(route, navigator) {
        let Component = route.component;
        return (
            <Component navigator={navigator} {...route} />
        );
    }

    /**
     * 渲染顶部视图
     * 
     * 
     * @memberof Root
     */
    _routeMapper = {
        LeftButton: (route, navigator, index, navState) => {
            if (route.index > 0) {
                return <TouchableOpacity
                    underlayColor='transparent'
                    onPress={() => { if (index > 0) { navigator.pop() } }}>
                    <Text style={styles.navBackBtn}><Icon size={18} name="ios-arrow-back"></Icon> back</Text>
                </TouchableOpacity>;
            } else {
                return null;
            }
        },
        RightButton: (route, navigator, index, navState) =>
        { return null; },
        Title: (route, navigator, index, navState) =>
        { return (<Text style={styles.navTitle}>{route.title}</Text>); },
    };

    render() {
        return (
            <Navigator
                initialRoute={{
                    title: '30 Days of RN',
                    index: 0, // 初始路由的索引
                    display: true, // 是否显示 NavigationBar
                    component: MainView // 初始加载的组件
                }}
                configureScene={(route, routeStack) => this._configureScene(route, routeStack)} // 转场动画
                renderScene={(route, navigator) => this._renderScene(route, navigator)}
                navigationBar={ // 顶部导航栏
                    <NavigationBar
                        routeMapper={this._routeMapper} // 顶部导航栏的视图配置
                        style={styles.navBar}
                    />
                }
            />
        );
    }
}

class NavigationBar extends Navigator.NavigationBar {
    render() {
        let routes = this.props.navState.routeStack;

        if (routes.length) {
            let route = routes[routes.length - 1]; // 最新入栈的组件，即当前组件

            // 根据 display 是否显示 NavigationBar 顶部导航栏(ios: 63)
            if (route.display === false) {
                return null;
            }
        }
        return super.render(); // 正常显示顶部导航栏
    }
}

const styles = StyleSheet.create({
    navBar: {
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    navTitle: {
        paddingTop: 10,
        fontSize: 18,
        fontWeight: "500",
    },
    navBackBtn: {
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 18,
        color: "#555",
    },
});