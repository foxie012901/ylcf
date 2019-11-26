import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  Touchable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  Animated,
} from 'react-native';

import styles from './style'
import { actionCreators } from './store'
//react-redux
import { connect } from "react-redux";
//路由
import { Actions } from "react-native-router-flux";
const { height, width } = Dimensions.get('window');

class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let {
      levelOneIsShow,
      levelTwoIsShow,
      _levelOneIsShow,
      _levelOneIsHidden,
      _levelTwoIsHidden,
      _levelTwoIsShow,
    } = this.props


    let oneLevelBox = (
      <View style={styles.oneLevelBoxContent}>
        {/* 1级弹窗 */}
        <View
          style={styles.oneLevelBox}
        >
          <ScrollView
          >
            <TouchableOpacity
              onPress={() => { _levelTwoIsHidden() }}
              style={styles.oneBtnView}>
              <Text>1122233</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { _levelTwoIsHidden() }}
              style={styles.oneBtnView}>
              <Text>1122233</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { _levelTwoIsHidden() }}
              style={styles.oneBtnView}>
              <Text>1122233</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { _levelTwoIsShow() }}
              style={styles.oneBtnView}>
              <Text>2级导航</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { _levelTwoIsHidden() }}
              style={styles.oneBtnView}>
              <Text>1122233</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { _levelTwoIsHidden() }}
              style={styles.oneBtnView}>
              <Text>1122233</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { _levelTwoIsHidden() }}
              style={styles.oneBtnView}>
              <Text>1122233</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        {/* 半透明蒙版 */}
        <TouchableWithoutFeedback
          onPress={() => { _levelOneIsHidden(); _levelTwoIsHidden(); }}
        >
          <View style={styles.oneLevelWall}>
          </View>
        </TouchableWithoutFeedback>
        {/* 2级窗口 */}
        {

          levelTwoIsShow === false ? null :
            (
              <View style={styles.twolevelBoxContent}>
                <ScrollView>
                  <TouchableOpacity style={styles.twoBtnView}>
                    <Text>1122233</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.twoBtnView}>
                    <Text>1122233</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.twoBtnView}>
                    <Text>1122233</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.twoBtnView}>
                    <Text>1122233</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.twoBtnView}>
                    <Text>1122233</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.twoBtnView}>
                    <Text>1122233</Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            )
        }
      </View>


    )

    return (
      <View
        style={styles.content}
      >
        <View style={styles.oneLevelContent}>
          <TouchableOpacity
            onPress={() => { _levelOneIsShow() }}
            style={styles.oneLevelBtn}>
            <Text>111</Text>
          </TouchableOpacity>
        </View>

        {
          levelOneIsShow === false ? null : oneLevelBox
        }





        {/* 页面主体 */}
        <ScrollView
          style={styles.scrollViewBox}
          androidoverScrollMode={'never'}
        >
          <View style={styles.scrollViewBoxContent}>
            <View>
              <Image
                style={{ width: '100%', height: height }}
                source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574415780708&di=98574574c0e168ec299ba5f45c0b6f61&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F23466cf35a0060443c160d07b09eaaf9bd7c18a832e91-fJ7HTB_fw658' }} />
            </View>
            <View style={{ width: '100%', height: 200, backgroundColor: 'blue' }}></View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    levelOneIsShow: state.getIn(['my', 'levelOneIsShow']),
    levelTwoIsShow: state.getIn(['my', 'levelTwoIsShow'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    _levelOneIsShow() {
      // console.warn('1234')
      dispatch(actionCreators.levelOneIsShow())
    },
    _levelOneIsHidden() {
      dispatch(actionCreators.levelOneIsHidden())
    },
    _levelTwoIsShow() {
      dispatch(actionCreators.levelTwoIsShow())
    },
    _levelTwoIsHidden() {
      dispatch(actionCreators.levelTwoIsHidden())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(My)