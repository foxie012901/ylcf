import React, { Component } from 'react';
import { View, Text, YellowBox, StyleSheet,Platform,Dimensions } from 'react-native';
import {
    Router,
    Stack,
    Scene
} from "react-native-router-flux";

import App from "./App";
import Home from './app/components/Home/Home'//首页
import ShangJia from './app/components/ShangJia/ShangJia'//旗舰店
import Order from './app/components/Order/Order'//其他
import My from './app/components/My/My'//我的
import Login from "./app/components/Login/Login";//登录
import PasswordReset from './app/components/PasswordReset/PasswordReset';//忘记密码
import ShangjiaList from './app/components/ShangjiaList/ShangjiaList'; //门店列表
//react-redux
import { Provider } from "react-redux";
import store from './app/store'
import VPlayer from './app/components/VideoPlayer/VideoPlayer';
import JPush from 'jpush-react-native';

const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;
export default class Main extends Component {
    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
            'Warning: componentWillUpdate is deprecated',
            'Warning: ViewPagerAndroid has been extracted from react-native',
            // 'Warning: componentWillReceiveProps has been',
            'Warning: componentWillReceiveProps has been',
            'Warning: Async Storage has been extracted from'

        ])
        this.state = {
        };
    }

    componentDidMount() {
        //极光初始化  ios环境未配置，所以ios暂不支持
        if(Platform.OS ==='android'){
        JPush.init();
        //连接状态
        this.connectListener = result => {
          console.log("connectListener:" + JSON.stringify(result))
        };
        JPush.addConnectEventListener(this.connectListener);
        //通知回调
        this.notificationListener = result => {
          console.log("notificationListener:" + JSON.stringify(result))
        };
        JPush.addNotificationListener(this.notificationListener);
        //自定义消息回调
        this.customMessageListener = result => {
          console.log("customMessageListener:" + JSON.stringify(result))
        };
        JPush.addCustomMessagegListener(this.customMessageListener);
        //本地通知回调 todo
        this.localNotificationListener = result => {
          console.log("localNotificationListener:" + JSON.stringify(result))
        };
        JPush.addLocalNotificationListener(this.localNotificationListener);
        //tag alias事件回调
        this.tagAliasListener = result => {
          console.log("tagAliasListener:" + JSON.stringify(result))
        };
        JPush.addTagAliasListener(this.tagAliasListener);
        //手机号码事件回调
        this.mobileNumberListener = result => {
          console.log("mobileNumberListener:" + JSON.stringify(result))
        };
        JPush.addMobileNumberListener(this.mobileNumberListener);
        JPush.getRegistrationID(id =>{
          
          this.setState({
            id :JSON.stringify(id)
          })
        })
      }
      }

    render() {
        return (
            <Provider style={styles.container} store={store}>
                <Router>
                    <Stack>
                        <Scene key='app' component={App} title='' hideNavBar={true} />
                        <Scene key='home' component={Home} title='' hideNavBar={true} />
                        <Scene key='shangjia' component={ShangJia} title='' hideNavBar={true} />
                        <Scene key='order' component={Order} title='' hideNavBar={true} />
                        <Scene key='my' component={My} title='' hideNavBar={true} />
                        <Scene key='login' component={Login} title='登录' hideNavBar={false} />
                        <Scene key='passwordreset' component={PasswordReset} title='密码重置' hideNavBar={false}></Scene>
                        <Scene key='videoplayer' component={VPlayer} hideNavBar={true}/>
                        <Scene key='shoplist' component={ShangjiaList} hideNavBar={false} title='门店列表' titleStyle={{marginLeft:mWidth*0.25}}/>
                    </Stack>
                </Router>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
