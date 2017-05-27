/*
 * @Author: yewei 
 * @Date: 2017-05-26 15:34:19 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-26 15:49:13
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
    Navigator
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

    render() {
        return (
            <Navigator
                initialRoute={{
                    title: '30 Days of RN',
                    index: 0,
                    display: true,
                    component: MainView
                }}
                configureScene={(route, routeStack) => this._configureScene(route, routeStack)}
                renderScene={(route, navigator) => this._renderScene(route, navigator)}
                navigationBar={
                    <NavigationBar />
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