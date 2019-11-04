import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TextInput,
    Button
} from 'react-native';
import styles from "./style";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.content}>
                <View style={styles.formBox}>
                    {/* 两个文本框 */}
                    <View style={styles.textInputBox}>
                        <TextInput
                            placeholder={'输入手机号'}
                            placeholderTextColor={'#bbbbbb'}
                            style={styles.inputText}
                        />
                    </View>
                    <View style={styles.textInputBox}>
                        <TextInput
                            placeholder={'输入密码'}
                            placeholderTextColor={'#bbbbbb'}
                            style={styles.inputText}
                        />

                        <View style={styles.textForgetSN}>
                            <Text style={styles.textForgetSNText}>
                                忘记密码?
                            </Text>
                        </View>
                    </View>
                    {/* 按钮 */}
                    <View style={styles.btnDetermineBox}>
                        <View style={styles.btnDetermine}>
                            <Text style={styles.btnDetermineText}>确定</Text>
                        </View>
                    </View>
                    {/* 短信快捷登录 和 立即注册 */}
                    <View style={styles.otherBtnBox}>
                        <View style={styles.otherBtnLeft}>
                            <Text style={styles.otherBtnLeftText}>短信快捷登录</Text>
                        </View>
                        <View style={styles.otherBtnRight}>
                            <Text style={styles.otherBtnRightText}>立即注册</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
