import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Platform
} from 'react-native';
import Video from 'react-native-video';

//安卓阴影保留
// import {BoxShadow} from 'react-native-shadow';

import { connect } from "react-redux";
import { actionCreators } from "./store";
import DateUtil from '../../util/DateUtil';
const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;
class ShangJia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }

  componentDidMount() {
    this.props._getData()
    console.log(this.props.isShow)
    this.setState({
      isShow: false
    })

  }

  render() {
    const shadowOpt = {
      // 安卓阴影保留
      width: mWidth * 0.9,
      height: mHeight * 0.2,
      color: "#067bed",
      border: 3,
      radius: 15,
      opacity: 0.1,
      x: 0,
      y: 1,
      style: { alignSelf: 'center', marginTop: 24 }
    }
    let {
      isShow,
      text,
      videoIsError,
      videoIsShow,
      videoLoadStart,
      _addText,
      _videoLoadStart,
      _videoOnLoad,
      response,
      _isRun
    } = this.props
    /*  if(DateUtil.time_range(JSON.parse(response).data.businessHours.split("-")[0],JSON.parse(response).data.businessHours.split("-")[1],DateUtil.formatDate(new Date().getTime(),'hh:mm:ss'))){
        runImg=require('../../images/triangle.png');
      }else{
        runImg=require('../../images/unt.png');
      }*/
    let Loading = (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator animating={this.props.isShow} />
    </View>);
    let ShangJiaPage = (
    <View style={styles.content}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.qjdfu}>旗舰店服务</Text>
        <TouchableOpacity onPress={() => { alert("去换点") }} style={styles.hd}>
          <Text style={styles.hdtext}>换店</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.videoView}>
        <Video style={{ flex: 1 }}
          ref={(ref) => {
            this.player = ref
          }}
          rate={this.state.rate}                          // 控制暂停/播放，0 代表暂停paused, 1代表播放normal.
          paused={this.state.paused}
          volume={1}                   // 声音的放大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数
          muted={false}
          repeat={true}                  // true代表静音，默认为false.
          resizeMode='stretch'       // 视频的自适应伸缩铺放行为，
          onLoad={_videoOnLoad}                       // 当视频加载完毕时的回调函数
          onLoadStart={_videoLoadStart}

          source={{ uri: 'http://vd2.bdstatic.com/mda-jb6ryav5df4hntd2/sc/mda-jb6ryav5df4hntd2.mp4' }} />
        <ActivityIndicator style={{ position: 'absolute', alignSelf: 'center' }} animating={videoLoadStart} color='red' />
      </View>
      {/* <BoxShadow setting={shadowOpt}> */}
      {/* boxshadow 安卓阴影保留 */}
      <View style={styles.storeMessageView}>
        <View style={styles.storeMessageViewChild1}>
          <View style={styles.storeMessageViewChild1Storename}>
            <Text style={{ alignSelf: 'center', fontSize: 16 }}>{response.name}</Text>
            <Image style={styles.map_pointImg} source={require('../../images/map_point.png')} />
            <Text style={{ alignSelf: 'center', fontSize: 10, color: '#067bed' }}>约 0.6km</Text>
          </View>
          <Text style={styles.storeMessageViewAddressDetail}>{response.address}</Text>
          <TouchableOpacity style={styles.storeMessageViewRunTime}>
            <Text >营业时间：{response.businessHours}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: 1, height: mHeight * 0.2, flexDirection: 'row' }}>
          <View style={{ width: 1, backgroundColor: '#B0B0B0', height: mHeight * 0.15, alignSelf: 'center' }}></View>
        </View>
        <View style={{ flex: 1}}>
          <Image style={styles.untAndtImage} source={_isRun(response)}></Image>

          <TouchableOpacity>
            <Image style={{ height: mHeight * 0.04, width: mWidth * 0.08, borderTopRightRadius: 10, alignSelf: 'center', resizeMode: 'stretch', alignItems: 'baseline' }} source={require('../../images/phone.png')} />
          </TouchableOpacity>
        </View>
      </View>
      {/* </BoxShadow> */}

          

    </View>);
    return (
      <View style={{ width: '100%', height: '100%' }}>
        {
          this.props.isShow ? Loading : ShangJiaPage
        }
      </View >

    );
  }
}
const mapStateToProps = state => {
  return {
    response: state.getIn(["shangjia", "response"]),
    isShow: state.getIn(["shangjia", "isShow"]),
    text: state.getIn(["shangjia", "text"]),
    videoIsShow: state.getIn(["shangjia", "videoIsShow"]),
    videoLoadStart: state.getIn(["shangjia", "videoLoadStart"]),
    videoIsError: state.getIn(["shangjia", "videoIsError"])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    _getIsShow(changedata) {
      // console.log('getIsShow', changedata)
      // const action = getIsShow(changedata)
      // dispatch(action)
      dispatch(actionCreators.getIsShow(changedata))
    },
    _getData() {
      dispatch(actionCreators.getShangJia());
    },
    _addText() {
      dispatch(actionCreators.changeData("123123"));
    },
    _videoOnLoad() {
      dispatch(actionCreators.videoOnLoad());
    },
    _videoLoadStart() {
      dispatch(actionCreators.videoLoadStart());
    },
    _isRun(response) {
      console.log((response.businessHours + '').split("-")[0])
      if (DateUtil.time_range((response.businessHours + '').split("-")[0], (response.businessHours + '').split("-")[1], DateUtil.formatDate(new Date().getTime(), 'hh:mm:ss'))) {
        return require("../../images/triangle.png");
      } else {
        return require("../../images/unt.png");
      }
    }
  }
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: '#FFFFFF'
  },
  qjdfu: {
    height: mHeight * 0.05,
    width: mWidth,
    textAlign: 'center',
    lineHeight: mHeight * 0.05,
    fontSize: mHeight * 0.03
  },
  hd: {
    position: 'relative',
    right: mWidth * 0.15,
    height: mHeight * 0.05
  },
  hdtext: {
    lineHeight: mHeight * 0.05,
    fontSize: mHeight * 0.02,
    color: 'blue'
  },
  videoView: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: mWidth,
    height: "25%"
  },
  storeMessageView: {  // "react-native-shadow"  "react-native-svg" 安卓阴影保留
    width: mWidth * 0.9,
    height: mHeight * 0.2,
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor:'#fff',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius:8,
    borderBottomRightRadius:8,
    //fox
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: .1,
    shadowRadius: 3,
    elevation: 5,

  },
  storeMessageViewChild1: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    // backgroundColor: '#f00',
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    // borderWidth: 1,


  },
  storeMessageViewChild1Storename: {
    flex: 4,
    flexDirection: 'row',
    // borderTopLeftRadius: 10,
    paddingLeft: mHeight * 0.01,
    // backgroundColor: '#00f',
    // borderWidth:1,
  },

  map_pointImg: {
    marginLeft: 9,
    alignSelf: 'center',
    width: mWidth * 0.02,
    height: mHeight * 0.02,
    resizeMode: 'stretch'
  },
  storeMessageViewAddressDetail: {
    paddingLeft: mHeight * 0.01,
    paddingRight: mWidth * 0.1,
    fontSize: 11,
    flex: 4
  },
  storeMessageViewRunTime: {
    padding: mHeight * 0.01,
    flex: 2,
  },
  untAndtImage: {
    height: mHeight * 0.06, width: mWidth * 0.14, 
    borderTopRightRadius: 8, 
    
    alignSelf: 'flex-end', resizeMode: 'stretch'
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(ShangJia)
