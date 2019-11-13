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
import {
  Surface, //  一个矩形可渲染的区域，是其他元素的容器
  Shape, // 形状定义，可填充
  Path, // 路径
  Group, // 可容纳多个形状、文本和其他的分组
  LinearGradient, // 渐变色
  Pattern, // 填充图片
  ClippingRectangle, // 剪辑
} from '@react-native-community/art'
import NoticesBar from 'react-native-noticesbar'
//封装活动格式
import ActiveStyle from './ActiveStyle'

import DeviceStorageUtil from '../../util/DeviceStorageUtil';
import IconFont from 'react-native-vector-icons/Ionicons'
import  MarqueeVertical      from './MarqueeVertical';
import { actionCreators } from "./store";
import { actionCreators as lo } from '../Login/store';

import { connect } from "react-redux";

import { Actions } from "react-native-router-flux";

//图片轮播
import Swiper from 'react-native-swiper'

const { height, width } = Dimensions.get('window');


class Home extends Component {
  constructor(props) {
    super(props);
    // props._getHomeData(width)
    this.state = {
      isShow: true,
    };
  }

  componentWillMount() {
    this.props._getHomeData(width)
  }

  render() {

    let {
      homeFunctionAreaList, // 可配置功能区域
      bannerV180ResponseList, // banner 轮播
      creditV192ResponseList,// 玩转积分
      activityStyleV180ResponseList, // 活动设置

      iconList, // icon 按钮数据 6个
      isShow,  // 加载logo转圈开关
      brand,   //车品牌
      logo,  //车品牌logo
      plate, //车牌号
      wxts, // 温馨提示
      HomePath, //js代码绘制复杂矩形
      mailList,//站内新
      _toLogin,//判断token跳转到login页
    } = this.props
   console.log(mailList)
  
    // console.log('活动设置:', activityStyleV180ResponseList)
    // console.log('homeFunctionAreaList', homeFunctionAreaList)
    // console.log('imgList', imgList)
    // let newImgList = []
    // imgList.map((item) => {
    //   newImgList.push(item.toJS());
    // })

    // console.log(topData)
    // console.log(brand, logo, plate)
    // console.log(imgList)
    // console.log(newImgList)
    // console.log(t)

    // let { height, width } = Dimensions.get('window');

    // let path = new Path();
    // path.moveTo(0, 0)
    //   .lineTo(width, 0)
    //   .lineTo(width, 120)
    //   // .lineTo(0,200)
    //   .arc(-width, 0, 1500)
    //   .lineTo(0, 0)
    //   .close()

    let Loading = (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator animating={this.state.isShow} /></View>
    )
    let PageHome = (
      <View>
        <View style={styles.topBox}>
          <Surface width={width} height={139}
            style={styles.conART}
          >
            <Shape
              d={HomePath}
              // stroke="#f00"  // 描边
              strokeWidth={1}
              visible={true}
              opacity={1.0}
              fill="#1D6BBD" />
          </Surface>

          {/* 头部标题 和 换一辆 */}
          <View style={styles.titleTopMiddle}>
            <TouchableHighlight onPress={() => { alert("清除"); DeviceStorageUtil.clean(); }}>
              <Text style={styles.titleTopMiddleText}>优辆车服</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.titleTopRight}>
            <IconFont name={'ios-sync'} size={11} color={'#fff'} /><Text style={styles.titleTopRightText}>换一辆</Text>
          </View>
          {/* 车牌号 */}
          <View style={styles.boxTopMiddle}>
            <View style={styles.boxTopMiddleUp}>
              <View style={styles.boxTopMiddleUpLogo}>
                <Image
                  source={{ uri: logo }}
                  style={styles.boxLogo}
                />
              </View>
              <View style={styles.boxTopMiddleUpTxt}>
                <Text style={styles.boxTopMiddleUpTxtText}>{plate}</Text>
              </View>
              <View style={styles.boxTopMiddleUpBtn}>
                <TouchableHighlight
                  onPress={() => { this.props._toLogin() }}
                  style={styles.boxTopMiddleUpBtnBotton}>
                  <Text style={styles.boxTopMiddleUpBtnBottonText}>查违章</Text>
                </TouchableHighlight>
              </View>
            </View>
            {/* 温馨提示 */}
            <View style={styles.boxTopMiddleDown}>
              <View style={styles.boxTopMiddleDownDian}></View>
              <Text style={styles.boxTopMiddleDownText}>温馨提示:{wxts}</Text>
            </View>
          </View>
        </View>

        <ScrollView>
          {/* 站内信息  */}
          <View style={styles.znxxContent}>
            <IconFont name={'ios-notifications'} size={16} color={'rgb(58,151,237)'} />
            <Text style={styles.znxxText}>站内消息:</Text>
            {mailList.length>0?
              <MarqueeVertical textList={mailList} width={width*0.8} height={20}></MarqueeVertical>
              :<Text style={styles.znxxText}>暂无消息</Text>}
          </View>
          {/* 8个button */}

          {/* <View style={styles.HomeIconBtnContent}>
            {
              imgList.map((item, index) => {
                return (
                  <View style={styles.HomeIconBtnButton} key={index}>
                    <View style={styles.HomeIconBtnButtonContent}>
                      <View>
                        <Image source={{ uri: item.url }} style={styles.HomeIconBtnImg} />
                      </View>
                      <Text style={styles.HomeIconBtnText}>{item.name}</Text>
                    </View>
                  </View>
                )
              })
            }
          </View> */}

          <View style={styles.HomeIconBtnContent}>
            {
              // console.log('homeFunctionAreaList',homeFunctionAreaList)

              homeFunctionAreaList === undefined || homeFunctionAreaList.size === 0 ? null :
                homeFunctionAreaList.map((item, index) => {
                  return (
                    <View style={styles.HomeIconBtnButton} key={index}>
                      <View style={styles.HomeIconBtnButtonContent}>
                        <View>
                          <Image source={{ uri: item.pic }} style={styles.HomeIconBtnImg} />
                        </View>
                        <Text style={styles.HomeIconBtnText}>{item.title}</Text>
                      </View>
                    </View>
                  )
                })
            }
          </View>



          {/* banner 轮播图 */}
          <View style={styles.HomeBanner}>
            <View style={{ width: '100%', height: 90, borderRadius: 8, overflow: 'hidden' }}>
              {
                bannerV180ResponseList === undefined || bannerV180ResponseList.size === 0 ? null :


                  bannerV180ResponseList.length ?
                    <Swiper
                      showsButtons={false}
                      loop={true}
                      autoplay={true}
                      horizontal={true}
                      automaticallyAdjustContentInsets={true}
                      paginationStyle={{
                        bottom: 5
                      }}
                    >
                      {
                        bannerV180ResponseList.map((item, i) => {
                          return <View key={i}>
                            <Image source={{ uri: item.pic }} style={styles.HomeBannerBg}></Image>
                          </View>
                        })
                      }
                    </Swiper> : null
              }
            </View>
          </View>
          {/* <BasePicPlay duration={2000} ImageData={this.state.ImageData} /> */}



          {/* 玩转积分 */}
          <View style={styles.HomeWZJF}>
            <View style={styles.HomeWZJFTitle}>
              <View style={styles.HomeWZJFTitleLeft}>
                <View style={styles.HomeWZJFTitleLeftGray}></View>

              </View>
              <View style={styles.HomeWZJFTitleMiddle}>
                <Text style={styles.HomeWZJFTitleMiddleText}>玩转积分</Text>

              </View>
              <View style={styles.HomeWZJFTitleRight}>
                <Text style={styles.HomeWZJFTitleRightText}>更多积分商品</Text>

              </View>
            </View>
            <View style={styles.HomeWZJFBody}>
              {
                creditV192ResponseList === undefined || creditV192ResponseList.size === 0 ? null :
                  creditV192ResponseList.map((item, index) => {
                    return (
                      <View style={styles.HomeWZJFIconBtn} key={index}>
                        <View style={styles.HomeWZJFIconBtnContent}>
                          <View>
                            <Image source={{ uri: item.icon }} style={styles.HomeWZJFIconBtnImg} />
                          </View>
                          <Text style={styles.HomeWZJFIconBtnText}>{item.title}</Text>
                        </View>
                      </View>
                    )
                  })
              }
            </View>
          </View>

          <View>



          </View>
          <View>
            {
              activityStyleV180ResponseList === undefined || activityStyleV180ResponseList.size === 0 ? null :
                activityStyleV180ResponseList.map((item, index) => {

                  return (
                    <ActiveStyle
                      key={index}
                      styleType={item.styleType}
                      activityStyleOneV180Response={item.activityStyleOneV180Response === null ? null : item.activityStyleOneV180Response}
                      activityStyleTwoV180Response={item.activityStyleTwoV180Response === null ? null : item.activityStyleTwoV180Response}
                    />
                  )
                })
            }
          </View>




          {/* <View style={styles.HomeBanner}>
            <View style={styles.HomeBannerContent}>
              <Image source={require('../../images/homeBanner.jpeg')}
                style={styles.HomeBannerBg} />
            </View>
          </View> */}
        </ScrollView>
      </View>
    )

    return (
      <View style={styles.content}>
        {
          this.props.isShow ? Loading : PageHome
        }
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    isShow: state.getIn(['home', 'isShow']),
    homeFunctionAreaList: state.getIn(['home', 'homeFunctionAreaList']),
    bannerV180ResponseList: state.getIn(['home', 'bannerV180ResponseList']),
    creditV192ResponseList: state.getIn(['home', 'creditV192ResponseList']),
    activityStyleV180ResponseList: state.getIn(['home', 'activityStyleV180ResponseList']),



    iconList: state.getIn(['home', 'iconList']),
    brand: state.getIn(['home', 'brand']),
    logo: state.getIn(['home', 'logo']),
    plate: state.getIn(['home', 'plate']),
    wxts: state.getIn(['home', 'wxts']),
    HomePath: state.getIn(['home', 'HomePath']),
    mailList:state.getIn(['home','mailList']),
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // _beginPainting(){
    //   dispatch(actionCreators.beginPainting())
    // },
    _getHomeData(width) {
      console.log(2)
      dispatch(actionCreators.getHomeData())
      dispatch(actionCreators.beginPainting(width))
    },
    async  _toLogin() {

      let token = ''
      await DeviceStorageUtil.get('token').then(val => {
        console.log('token==' + token)
        token = val
      });
      if (token === null || token === '') {
        Actions.login();
      } else {
        console.log(token);
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
