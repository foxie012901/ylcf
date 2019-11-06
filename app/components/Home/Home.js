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

import IconFont from 'react-native-vector-icons/Ionicons'

import { actionCreators } from "./store";

import { connect } from "react-redux";

import { Actions } from "react-native-router-flux";

const { height, width } = Dimensions.get('window');


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    };
  }

  componentDidMount() {
    console.log(1)
    this.props._getHomeData(width)
  }

  render() {

    let {
      imgList,  //icon 按钮数据
      isShow,  // 加载logo转圈开关
      brand,   //车品牌
      logo,  //车品牌logo
      plate, //车牌号
      wxts, // 温馨提示
      HomePath, //js代码绘制复杂矩形
    } = this.props

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
            <Text style={styles.titleTopMiddleText}>优辆车服</Text>
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
                  onPress={() => { Actions.login() }}
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
            <Text style={styles.znxxText}>站内消息:今日油价92#汽油6.78元/L,95#汽油惊喜价......</Text>
          </View>
          {/* 8个button */}

          <View style={styles.HomeIconBtnContent}>
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
          </View>
          {/* banner */}
          <View style={styles.HomeBanner}>
            <View style={styles.HomeBannerContent}>
              <Image source={require('../../images/homeBanner.jpeg')}
                style={styles.HomeBannerBg} />
            </View>
          </View>
          <View style={styles.HomeBanner}>
            <View style={styles.HomeBannerContent}>
              <Image source={require('../../images/homeBanner.jpeg')}
                style={styles.HomeBannerBg} />
            </View>
          </View>
          <View style={styles.HomeBanner}>
            <View style={styles.HomeBannerContent}>
              <Image source={require('../../images/homeBanner.jpeg')}
                style={styles.HomeBannerBg} />
            </View>
          </View>
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
    imgList: state.getIn(['home', 'imgList']),
    brand: state.getIn(['home', 'brand']),
    logo: state.getIn(['home', 'logo']),
    plate: state.getIn(['home', 'plate']),
    wxts: state.getIn(['home', 'wxts']),
    HomePath: state.getIn(['home', 'HomePath'])
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
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)