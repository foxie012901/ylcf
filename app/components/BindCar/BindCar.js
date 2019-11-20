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
import IconFont from 'react-native-vector-icons/Ionicons'
import { actionCreators } from "./store";

//登录相关
import DeviceStorageUtil from '../../util/DeviceStorageUtil';
//react-redux
import { connect } from "react-redux";
//路由
import { Actions } from "react-native-router-flux";
class BindCar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentWillMount() {
        this.props._getVioIndex()
    }
    render() {
        let {
            InitVioIndex
        } = this.props

        console.log('22222 BindCar  initVioIndex', InitVioIndex)

        let NoLoginType = (
            <View style={{ width: '100%', height: 107 }}>
                <View style={styles.boxTopMiddleUpNoLogin}>
                    <IconFont name={'ios-add-circle'} size={22} color={'rgb(204,204,204)'} />
                    <TouchableHighlight
                    // onPress={() => { this.props._toLogin() }}
                    >
                        <Text style={styles.boxTopMiddleUpNoLoginText}>添加车辆</Text>
                    </TouchableHighlight>
                </View>

                <View style={styles.boxTopMiddleDown}>
                    <View style={styles.boxTopMiddleDownContent}>
                        <Text style={styles.boxTopMiddleDownText}>绑定车辆可查询违章、办理年检、优惠洗车等</Text>
                    </View>
                </View>
            </View>
        )

        let NoBindCar = (
            InitVioIndex === null ? null :
                <View style={{ width: '100%', height: 107 }}>
                    <View style={{ width: '100%', height: 107 }}>
                        <View style={styles.boxTopMiddleUpNoLogin}>
                            <IconFont name={'ios-add-circle'} size={22} color={'rgb(204,204,204)'} />
                            <TouchableHighlight
                            // onPress={() => { this.props._toLogin() }}
                            >
                                <Text style={styles.boxTopMiddleUpNoLoginText}>登录-添加车辆</Text>
                            </TouchableHighlight>
                        </View>

                        <View style={styles.boxTopMiddleDownNoLogin}>
                            <View style={styles.boxTopMiddleDownNoLoginContent}>
                                <Text style={styles.boxTopMiddleDownNoLoginText}>{InitVioIndex.wxts}</Text>
                            </View>
                        </View>
                    </View>
                </View>
        )

        let BindCar = (
            InitVioIndex === null ? null :
                <View style={{ width: '100%', height: 107 }}>
                    <View style={styles.boxTopMiddleUp}>
                        <View style={styles.boxTopMiddleUpLogo}>
                            <Image
                                source={
                                    InitVioIndex.pic === null ? require('../../images/invalidName.png') : { uri: InitVioIndex.pic }
                                }
                                style={styles.boxLogo}
                            />
                        </View>
                        <View style={styles.boxTopMiddleUpTxt}>
                            <Text style={styles.boxTopMiddleUpTxtText}>{InitVioIndex.hphm}</Text>
                        </View>
                        <View style={styles.boxTopMiddleUpBtn}>
                            <TouchableHighlight
                                style={styles.boxTopMiddleUpBtnBotton}>
                                <Text style={styles.boxTopMiddleUpBtnBottonText}>查违章</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    {
                        InitVioIndex.wfsl === null || InitVioIndex.fqje === null || InitVioIndex.wzfs === null
                            ?
                            <View style={styles.boxTopMiddleDown}>
                                <View style={styles.boxTopMiddleDownADD}></View>
                                <View style={styles.boxTopMiddleDownContentMiddle}>
                                    <View style={styles.boxTopMiddleDownDian}></View>
                                    <Text style={styles.boxTopMiddleDownText}>温馨提示:没有违章信息</Text>
                                </View>
                                <View style={styles.boxTopMiddleDownADD}></View>

                            </View>
                            :
                            <View style={styles.boxTopMiddleDown}>
                                <View style={styles.boxTopMiddleDownADD}></View>
                                <View style={styles.boxTopMiddleDownContentLeft}>
                                    <View style={styles.boxTopMiddleDownDian}></View>
                                    <Text style={styles.boxTopMiddleDownText}>共计{InitVioIndex.wzfs}分</Text>
                                </View>

                                <View style={styles.boxTopMiddleDownContentMiddle}>
                                    <View style={styles.boxTopMiddleDownDian}></View>
                                    <Text style={styles.boxTopMiddleDownText}>罚款{InitVioIndex.fqje}元</Text>
                                </View>

                                <View style={styles.boxTopMiddleDownContentRight}>
                                    <View style={styles.boxTopMiddleDownDian}></View>
                                    <Text style={styles.boxTopMiddleDownText}>{InitVioIndex.wfsl}条交通违法行为</Text>
                                </View>
                                <View style={styles.boxTopMiddleDownADD}></View>
                            </View>
                    }

                </View>
        )



        return (
            <View style={styles.content}>
                <View style={styles.boxTopMiddle}>
                    {
                        InitVioIndex === null ? null :
                            InitVioIndex.type === '未登录'
                                ?
                                NoLoginType
                                :
                                InitVioIndex.type === '未绑车'
                                    ?
                                    NoBindCar
                                    :
                                    BindCar
                    }
                </View>
            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        isShow: null,
        InitVioIndex: state.getIn(['bindcar', 'InitVioIndex']),

    }
}
const mapDispatchToProps = dispatch => {
    return {
        _getVioIndex() {
            // dispatch()
            console.log('bindcar 111')
            dispatch(actionCreators.getVioIndex())

        },
        async  _isLogin() {

            let token = ''
            await DeviceStorageUtil.get('token').then(val => {
                // console.log('333 initvioindex token==' + token)
                islogin = 1
                token = val
            });
            if (token === null || token === '') {
                islogin = 0
                // alert('未登录')
                // alert(islogin)
            } else {
                console.log(token);
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BindCar)