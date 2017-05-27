/*
 * @Author: yewei 
 * @Date: 2017-05-26 15:34:19 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-26 18:34:53
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

    _renderScene(route, navigator) {
        let Component = route.component;
        return (
            <Component navigator={navigator} {...route} />
        );
    }

    _routeMapper = {
        LeftButton: (route, navigator, index, navState) => {
            if (route.index > 0) {
                return (
                    <TouchableOpacity
                        underlayColor='transparent'
                        onPress={() => {
                            if (index > 0) {
                                navigator.pop();
                            }
                        }}
                    ></TouchableOpacity>
                );
            } else {
                return null;
            }
        }
    }

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
                navigationBar={
                    <NavigationBar
                        routeMapper={this._routeMapper}
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
            let route = routes[routes.length - 1];

            if (route.display === false) {
                return null;
            }
        }
        return super.render();
    }
}

const styles = StyleSheet.create({

});