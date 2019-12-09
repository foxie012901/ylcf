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
import ReserveProject from './app/components/ReserveProject/ReserveProject';//预约项目
import ChildServicesDetails from './app/components/ChildServicesDetails/ChildServicesDetails';
import  ChildServicesDetailsTitle from './app/components/ChildServicesDetailsTitle/ChildServicesDetailsTitle';
import AlertView from "./app/components/ChildServicesDetails/AlertView";
//loading
import MyLoading from "./app/MyLoading";
import Toast from 'react-native-easy-toast';

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
    if (Platform.OS === 'android') {
      JPush.init();
      //连接状态
      this.connectListener = result => {
      };
      JPush.addConnectEventListener(this.connectListener);
      //通知回调
      this.notificationListener = result => {
      };
      JPush.addNotificationListener(this.notificationListener);
      //自定义消息回调
      this.customMessageListener = result => {
      };
      JPush.addCustomMessagegListener(this.customMessageListener);
      //本地通知回调 todo
      this.localNotificationListener = result => {
      };
      JPush.addLocalNotificationListener(this.localNotificationListener);
      //tag alias事件回调
      this.tagAliasListener = result => {
      };
      JPush.addTagAliasListener(this.tagAliasListener);
      //手机号码事件回调
      this.mobileNumberListener = result => {
      };
      JPush.addMobileNumberListener(this.mobileNumberListener);
      JPush.getRegistrationID(id => {

        this.setState({
          id: JSON.stringify(id)
        })
      })
    }
  }


  render() {
    return (
      <Provider style={styles.container} store={store}>
        <View
          style={{
            flex: 1,
          }}
        >

          <Router>
            <Stack>
              <Scene key='app' component={App} title='' hideNavBar={true}  initial={true} />
              <Scene key='home' component={Home} title='' hideNavBar={true} />
              <Scene key='shangjia' component={ShangJia} title='' hideNavBar={true} />
              <Scene key='order' component={Order} title='' hideNavBar={true} />
              <Scene key='my' component={My} title='' hideNavBar={true} />
              <Scene key='login' component={Login} title='登录' hideNavBar={false} />
              <Scene key='passwordreset' component={PasswordReset} title='密码重置' hideNavBar={false}></Scene>
              <Scene key='videoplayer' component={VPlayer} hideNavBar={true} />
              <Scene key='shoplist' component={ShangjiaList} hideNavBar={false} title='门店列表' titleStyle={{flex:1,textAlign:'center'}} navigationBarStyle={{height:mHeight*0.1}} rightButtonImage/>
              <Scene key='reserveproject' component={ReserveProject} hideNavBar={false} title='' navigationBarStyle={{height:mHeight*0.1}} titleStyle={{flex:1,textAlign:'center'}} rightButtonImage/>
              <Scene key='childservicesdetails' component={ChildServicesDetails} hideNavBar={false} navBar={ChildServicesDetailsTitle}  rightButtonImage/>
              <Scene key='alertview' component={AlertView} hideNavBar={true}  />

            </Stack>
          </Router>
          {
                    <Toast ref={(ref) =>{global.toast=ref}} position={'center'}/>
          }


          {<MyLoading
            ref={(ref) => {
              global.mLoadingComponentRef = ref;
            }}
          />}
          {<AlertView ref={(ref) =>alertView = ref}/>}
        </View>

      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
