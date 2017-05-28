/*
 * @Author: yewei 
 * @Date: 2017-05-27 16:33:07 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-27 18:35:50
 * 
 * 显示计数记录
 */


'use strict';
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';

import Utils from '../../../utils/utils';

export default class WatchRecord extends Component {
    static propTypes = {
        record: React.PropTypes.array.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    _renderRow(item) {
        return (
            <View style={styles.recordItem}>
                <Text style={styles.recordItemTitle}>{item.title}</Text>
                <View style={styles.recordTime}>
                    <Text style={styles.recordTimeText}>{item.time}</Text>
                </View>
            </View>
        );
    }

    render() {
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        let dataSource = ds.cloneWithRows(this.props.record);

        return (
            <ListView
                style={styles.recordList}
                dataSource={dataSource}
                renderRow={(item) => this._renderRow(item)}
            />
        );
    }
}

const styles = StyleSheet.create({
    recordTime: {
        alignItems: 'center'
    },
    recordTimeText: {},
    recordItemTitle: {
        backgroundColor: "transparent",
        flex: 1,
        textAlign: "left",
        paddingLeft: 20,
        color: "#777"
    },
    recordList: {
        width: Utils.size.width,
        height: Utils.size.height - 300,
        paddingLeft: 15,
        marginTop: 30
    },
    recordItem: {
        height: 40,
        borderBottomWidth: Utils.pixel,
        borderBottomColor: "#bbb",
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        flexDirection: "row",
        alignItems: "center"
    },
});