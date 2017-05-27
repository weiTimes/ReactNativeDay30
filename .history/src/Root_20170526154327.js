/*
 * @Author: yewei 
 * @Date: 2017-05-26 15:34:19 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-26 15:43:16
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
            />
        );
    }
}

const styles = StyleSheet.create({

});