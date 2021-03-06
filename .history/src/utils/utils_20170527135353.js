/*
 * @Author: yewei 
 * @Date: 2017-05-27 11:23:38 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-27 13:53:53
 * 
 * 工具方法
 */


import React from 'react';
import { PixelRatio } from 'react-native';
import Dimensions from 'Dimensions';

const Utils = {
    ratio: PixelRatio.get(),
    pixel: 1 / PixelRatio.get(), // 最小宽度
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    post(url, data, callback) {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(url, fetchOptions)
            .then((response) => {
                return response.json()
            })
            .then((responseData) => {
                callback(responseData);
            });
    },
    key: 'BDKHFSDKJFHSDKFHWEFH-REACT-NATIVE',
};

export default Utils;