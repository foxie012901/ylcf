import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';

import styles from "./style.js";
import IconFont from 'react-native-vector-icons/Ionicons'


export default class BindCarInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let { InitVioIndex } = this.props
        console.log('hhhh', InitVioIndex)

        let NoBindCar = (
            <View style={{ width: '100%', height: 107 }}>
                <View style={{ width: '100%', height: 107 }}>
                    <View style={styles.boxTopMiddleUpNoLogin}>
                        <IconFont name={'ios-add-circle'} size={22} color={'rgb(204,204,204)'} />
                        <TouchableHighlight
                        // onPress={() => { this.props._toLogin() }}
                        >
                            <Text style={styles.boxTopMiddleUpNoLoginText}>{InitVioIndex.hphm}登录未绑车</Text>
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
            <View style={{ width: '100%', height: 107 }}>
                {
                    InitVioIndex === null ? null :
                        InitVioIndex.hphm === '添加车辆'
                            ?
                            NoBindCar
                            :
                            BindCar
                }
            </View>
        );
    }
}
