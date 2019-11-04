import React, { Component } from 'react';
import { View, Text, YellowBox, StyleSheet,Platform } from 'react-native';
import {
    Router,
    Stack,
    Scene
} from "react-native-router-flux";

import App from "./App";
import Home from './app/components/Home/Home'
import ShangJia from './app/components/ShangJia/ShangJia'
import Order from './app/components/Order/Order'
import My from './app/components/My/My'
import Login from "./app/components/Login/Login";
//react-redux
import { Provider } from "react-redux";
import store from './app/store'

import JPush from 'jpush-react-native';


export default class Main extends Component {
    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
            'Warning: componentWillUpdate is deprecated',
            'Warning: ViewPagerAndroid has been extracted from react-native',
            // 'Warning: componentWillReceiveProps has been',
            'Warning: componentWillReceiveProps has been'

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