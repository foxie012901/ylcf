import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableHighlight,
  ScrollView
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

// import { toJs } from "immutable";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props._getImgListData()
  }

  render() {

    let {
      imgList
    } = this.props

    let newImgList = []
    imgList.map((item) => {
      newImgList.push(item.toJS());
    })
    console.log(imgList)
    console.log(newImgList)
    // console.log(t)

    let { height, width } = Dimensions.get('window');

    let path = new Path();
    path.moveTo(0, 0)
      .lineTo(width, 0)
      .lineTo(width, 120)
      // .lineTo(0,200)
      .arc(-width, 0, 1500)
      .lineTo(0, 0)
      .close()

    return (
      <View style={styles.content}>
        <View style={styles.topBox}>
          <Surface width={width} height={139}
            style={styles.conART}
          >
            <Shape
              d={path}
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
                  source={require('../../images/BZlogo.png')}
                  style={styles.boxLogo}
                />
              </View>
              <View style={styles.boxTopMiddleUpTxt}>
                <Text style={styles.boxTopMiddleUpTxtText}>吉 BMP999</Text>
              </View>
              <View style={styles.boxTopMiddleUpBtn}>
                <View style={styles.boxTopMiddleUpBtnBotton}>
                  <Text style={styles.boxTopMiddleUpBtnBottonText}>查违章</Text>
                </View>
              </View>
            </View>
            {/* 温馨提示 */}
            <View style={styles.boxTopMiddleDown}>
              <View style={styles.boxTopMiddleDownDian}></View>
              <Text style={styles.boxTopMiddleDownText}>温馨提示:交管数据升级,暂不可用!</Text>
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
              newImgList.map((item, index) => {
                console.log(item.url)
                return (
                  <View style={styles.HomeIconBtnButton} key={index}>
                    <View style={styles.HomeIconBtnButtonContent}>
                      <View>
                        <Image source={{url:item.url}}  style={styles.HomeIconBtnImg} />
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
    );
  }
}
const mapStateToProps = state => {
  return {
    isShow: state.getIn(['home', 'isShow']),
    imgList: state.getIn(['home', 'imgList'])
  }
}
const mapDispatchToProps = dispatch => {
  return {
    _getImgListData() {
      dispatch(actionCreators.getImgListData())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)