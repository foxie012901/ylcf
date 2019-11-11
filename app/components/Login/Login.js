import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TextInput,
    Button,
    ActivityIndicator,
    Platform
    
} from 'react-native';
import styles from "./style";
import { actionCreators } from "./store";
import { connect } from "react-redux";
import DeviceInfo from 'react-native-device-info';

import { Actions } from "react-native-router-flux";
import { getLogIn } from './store/actionCreators';
const deviceId = DeviceInfo.getUniqueId();
 class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let {
            _getLogIn,//登录
            _changeLoginPassword,//input密码保存
            _changeLoginPhone,//input电话号保存
            phone,//电话号
            isLogin,//登录中
            password,//密码
            actionTo,//跳转标识
            actionData,//跳转参数
            _cleanAction //清理跳转
        }=this.props
            console.log("actopn=",actionTo);
            if(actionTo ==='home'){
                _cleanAction();
                Actions.app(actionData);
            }
     
        return (
            
            <View style={styles.content}>
               
                <View style={styles.formBox}>
                    {/* 两个文本框 */}
                    <View style={styles.textInputBox}>
                        <TextInput
                            placeholder={'输入手机号'}
                            placeholderTextColor={'#bbbbbb'}
                            style={styles.inputText}
                            value={this.props.phone}
                            keyboardType='numeric'
                            onChangeText={text => {
                               this.props._changeLoginPhone(text)
                              }}
                        />
                    </View>
                    <View style={styles.textInputBox}>
                        <TextInput
                            placeholder={'输入密码'}
                            placeholderTextColor={'#bbbbbb'}
                            style={styles.inputText}
                            
                            onChangeText={text => {
                                this.props._changeLoginPassword(text)
                               }}
                        />

                        <View style={styles.textForgetSN}>
                            <Text style={styles.textForgetSNText}>
                                忘记密码?
                            </Text>
                        </View>
                    </View>
                    {/* 按钮 */}
                    <View style={styles.btnDetermineBox}>
                       
                        <TouchableHighlight  style={styles.btnDetermine} onPress={()=>{this.props._getLogIn(this.props.phone,this.props.password)}}>
                            <Text style={styles.btnDetermineText}>确定</Text>
                        </TouchableHighlight>
                        
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
                {this.props.isLogin?  <ActivityIndicator style={{alignSelf:'center',justifyContent:'center'}} animating={true} color='red'/>:null}
                
            </View>
        );
    }
}
export function actioToHome( data){ Actions.home(data) }
const mapStateToProps = state => {
    return {
      isLogin: state.getIn(['login', 'isLogin']),
      phone: state.getIn(['login','phone']),
      password: state.getIn(['login','password']),
      actionTo:state.getIn(['login','actionTo']),
      actionData:state.getIn(['login','actionData']),
     
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      _getLogIn(phone,password){
          dispatch(actionCreators.changeIsLogin(true) );
          let os = null;
          if(Platform.OS==='android'){
              os=0
          }else{
              os=1
          }
         dispatch(actionCreators.getLogIn(phone,password,os,deviceId));
       
      },
      _changeLoginPhone(phone){
        
            dispatch(actionCreators.changeLoginPhone(phone.replace(/[^\d]+/, '')));
      },
      _changeLoginPassword(password){
          dispatch(actionCreators.changeLoginPassword(password));
      },
      _cleanAction(){
          alert("开始")
        dispatch(actionCreators.cleanAction());
      }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Login)