import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    TouchableHighlight,
    ScrollView,
    ActivityIndicator

} from 'react-native';
import styles from "./style.js";

import DeviceStorageUtil from '../../util/DeviceStorageUtil';
import MarqueeVertical from './MarqueeVertical';
import { actionCreators } from "./store";
import IconFont from 'react-native-vector-icons/Ionicons'
//react-redux
import { connect } from "react-redux";
//路由
import { Actions } from "react-native-router-flux";
const { height, width } = Dimensions.get('window');

class MailRoll extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentWillMount() {
        this.props._getMailList()
    }
    render() {
        let { mailList } = this.props
        // console.log(mailList)
        return (
            <View style={styles.content}>
                {mailList.length > 0 ?
                    <MarqueeVertical textList={mailList} width={ width * 0.8} height={15}></MarqueeVertical>
                    : <Text style={styles.znxxText}>暂无消息</Text>}
            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        mailList: state.getIn(['mailroll', 'mailList'])
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _getMailList() {
            // console.warn('getMailList dispatch')
            dispatch(actionCreators.getMailList())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MailRoll)