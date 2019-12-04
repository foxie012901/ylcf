import React, { Component } from 'react';
import {
    View,
    Text ,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    Platform,
    TouchableWithoutFeedback,
    Slider,
    FlatList,
    ScrollView,
    RefreshControl,
} from 'react-native';
import Video from 'react-native-video';
import   Carousel       from 'react-native-looped-carousel';
//安卓阴影保留
// import {BoxShadow} from 'react-native-shadow';
import { connect } from "react-redux";
import { actionCreators } from "./store";
import DateUtil from '../../util/DateUtil';
import {Actions} from 'react-native-router-flux';
import MyLBS from '../../androidModules/BaiduLBS';
import LoadingUtil from "../../util/LoadingUtil";
import ReserveProject  from '../ReserveProject/ReserveProject';
const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;
const unIcon = require('../../images/unphoto.png');
class ShangJia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
    console.log(props)
    if(!this.props.isShow && this.props.isChangeLoding){

    LoadingUtil.showLoading();
      }else{
      LoadingUtil.dismissLoading();
    }
    this.props._getData(this.props.shangjiaId);
  }
 componentWillReceiveProps(nProps){

   if(!this.props.isShow && nProps.isChangeLoding&&this.props.shangjiaId!==undefined){
    LoadingUtil.showLoading();

   }else{      LoadingUtil.dismissLoading();
   }
 }

  componentWillMount() {

  }
  componentWillUpdate(){
  }

  renderItem =({item})=>  {
    let iconUri ="";
    if(item.icon===""||item.icon===null){
      iconUri=unIcon
    }else{iconUri={uri:item.icon}}
    return (<TouchableOpacity onPress={ ()=>{Actions.reserveproject({title:'预约'+item.itemName,accPackageId:this.props.response.accPackageId,storeId:this.props.response.id,storeItemId:item.id})} } style={styles.aaa}>
  <Image source={iconUri} style={{ width: mWidth * 0.15, height: mHeight * 0.08, resizeMode: 'stretch', alignSelf: 'center', marginLeft: mWidth * 0.02 }} />
        <Text style={{ width: mWidth * 0.1, height: mHeight * 0.15, alignSelf: 'center', textAlign: 'center', lineHeight: mHeight * 0.15, fontSize: 12, marginLeft: mWidth * 0.04 }}>{item.itemName}</Text>
    </TouchableOpacity>)
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
      isShow,//是否显示页面
      text,
      videoIsError,//视频错误标识
      videoIsShow,//视频是否显示标识
      videoLoadStart,//视频开始加载标识
      _addText,
      videoIsPlay,//视频是否正在播放
      _videoLoadStart,//视频开始加载方法
      showVideoCover,//显示视频封面
      showVideoControl,//显示视频控件
      isFullScreen,//当前是否全屏显示
      currentTime,//视频当前时间
      duration,//视频总时长
      _videoOnLoad,//视频加载方法
      response,//返回数据
      _isRun,//视频是否进行
      _onControlShrinkPress,//点击全屏按钮
      _onLayout,
      videoEnd,//视频播放结束
      _videoEnd,//视频播放结束
      _changeVideoStatus,//修改视频属性
      swiperImgs,//轮播图片
      shangjiaPhone,//商家电话
      refreshing,//下拉刷新开关
      isChangeLoding,//请稍后
      _onRefresh
    } = this.props

    let Loading =(<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ActivityIndicator animating={this.props.isShow} />
  </View>);
    let ShangJiaPage = (
    <View style={styles.content}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.qjdfu}>旗舰店服务</Text>
        <TouchableOpacity onPress={() => {Actions.shoplist()}} style={styles.hd}>
          <Text style={styles.hdtext}>换店</Text>
        </TouchableOpacity>
      </View>

      <View style={{width:mWidth,height:mHeight*0.25}}>
      <Carousel  style={{width: mWidth, height:mHeight*0.25}}
       bullets={true}
       delay={6000}
      >
      {
          swiperImgs.map((item,index) =>{

            if((item.video!==undefined)||(!item.video==="")){
               return(<View style={styles.videoView} key={index}>
              <TouchableOpacity style={{flex:1}} onPress={()=>{alert("点了视频");_changeVideoStatus(videoIsPlay);}}>
             <Video   style={{ width: mWidth, height: '100%', backgroundColor:'#000000'}}
                      ref={(ref) => {
                      this.player = ref
                                     }}
                      rate={1}
                      paused={!videoIsPlay}
                      volume={1}
                      muted={false}
                      repeat={false}
                      resizeMode='stretch'
                      onLoad={_videoOnLoad}
                      onEnd={()=>{_videoEnd(videoIsPlay)}}
            source={{uri:response.video}} />
            </TouchableOpacity>
            {
                  showVideoCover ?
                  <TouchableOpacity style={{ width:mWidth,
                    height:"100%"}}   onPress={()=>{alert("点了海报");_changeVideoStatus(videoIsPlay)}}>
                    {<Image

                      style={{
                        position:'absolute',
                        top: 0,
                        left: 0,
                        width:mWidth,
                        height:"100%"
                      }}
                      resizeMode={'cover'}
                      source={{uri: 'http://124.129.157.208:8889/data/uploads/kecheng/2018/01/18/5a600b2c99836.png@0o_0l_220w.png'}}
                    /> }</TouchableOpacity>: null
                }
                  <View
                    style={{
                      position: 'absolute',

                      backgroundColor: videoIsPlay ? 'transparent' : 'rgba(0, 0, 0, 0.2)',
                      alignSelf:'center',
                      justifyContent:'center'
                    }}>
                    {
                      videoIsPlay||videoLoadStart ? null :
                        <TouchableWithoutFeedback onPress={()=>{alert("点了支");_changeVideoStatus(videoIsPlay)}}>
                           <Image
                            onPress={()=>{alert("点了支");_changeVideoStatus(videoIsPlay)}}
                            style={{flex:1,width:50,height:50,zIndex:999,resizeMode:'stretch'}}
                            source={require('../../images/videoStop.png')}

                          />

                        </TouchableWithoutFeedback>
                    }
                  </View>
                  <View
                    style={{
                      position: 'absolute',

                      backgroundColor: videoIsPlay ? 'transparent' : 'rgba(0, 0, 0, 0.2)',
                      alignSelf:'center',
                      justifyContent:'center'
                    }}>
                    {
                      videoEnd ?
                        <TouchableWithoutFeedback onPress={()=>{alert("点了重播"+videoIsPlay);_changeVideoStatus(videoIsPlay)}}>
                           <Image

                            style={{flex:1,width:50,height:50,zIndex:999,resizeMode:'stretch'}}
                            source={require('../../images/chongbo.png')}

                          />

                        </TouchableWithoutFeedback>:null
                    }
                  </View>
                {
                 <TouchableOpacity style={{width:20,height:20,position:'absolute',top:mHeight*0.2,}} onPress={()=>{Actions.videoplayer({url:response.video})}}>
                   <Image source={require('../../images/expand.png')} style={{flex:1,resizeMode:'stretch'}}/>
                 </TouchableOpacity>
                }
          <ActivityIndicator style={{position:'absolute',alignSelf:'center'}} animating={videoLoadStart} color='red'/>
          </View>)
            }else if (item.img!==undefined){
              return (<View key={index} style={{flex:1}}><Image style={{flex:1,resizeMode:'stretch'}} source={{uri:item.img}}></Image></View>)
            }else{
              return ;
            }
         })
      }
      </Carousel>

          {

          }

      </View>


    <ScrollView alwaysBounceVertical={true}
            refreshControl={
              <RefreshControl
                title={'下拉刷新'}
                refreshing={refreshing}
                colors={['rgb(255, 176, 0)', "#ffb100"]}
                progressViewOffset={0}
                onRefresh={() => {
                 _onRefresh(this.props.shangjiaId)
                }}
              />
            }
    >
    <View style={styles.storeMessageView}>
      <View style={styles.storeMessageViewChild1}>
        <View style={styles.storeMessageViewChild1Storename}>
          <Text style={{alignSelf:'center',fontSize:16}}>{response.name}</Text>
          <Image style={styles.map_pointImg}source={require('../../images/map_point.png')}/>
          <Text style={{alignSelf:'center',fontSize:10,color:'#067bed'}}>约 {response.distance}km</Text>
        </View>
      <Text style={styles.storeMessageViewAddressDetail}>{response.address}</Text>
      <TouchableOpacity  style={styles.storeMessageViewRunTime}>
        <Text >营业时间：{response.businessHours}</Text>
      </TouchableOpacity>
     </View>
      <View style={{width:1,height:mHeight*0.2,flexDirection:'row'}}>
        <View style={{width:1,backgroundColor:'#B0B0B0',height:mHeight*0.15,alignSelf:'center'}}></View>
      </View>
    <View style={{flex:1}}>
    <Image style={styles.untAndtImage} source={_isRun(response)}></Image>

    <TouchableOpacity>
    <Image style={styles.storeMessageViewChild2} source={require('../../images/phone.png')}/>
    </TouchableOpacity>
    </View>
    </View>
    <FlatList style={{ width: mWidth ,marginTop:24}}
        horizontal={false}
        numColumns={2}
        data={response.storeItemList}
        renderItem={this.renderItem}
      />
      </ScrollView>
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
    response :state.getIn(["shangjia","response"]),
    isShow: state.getIn(["shangjia","isShow"]),
    text:state.getIn(["shangjia","text"]),
    videoIsShow :state.getIn(["shangjia","videoIsShow"]),
    videoLoadStart:state.getIn(["shangjia","videoLoadStart"]),
    videoIsError:state.getIn(["shangjia","videoIsError"]),
    videoIsPlay:state.getIn(["shangjia","videoIsPlay"]),
    showVideoCover:state.getIn(["shangjia","showVideoCover"]),
    showVideoControl:state.getIn(['shangjia','showVideoControl']),
    duration:state.getIn(['shangjia','duration']),
    currentTime:state.getIn(['shangjia','currentTime']),
    isFullScreen:state.getIn(['shangjia','isFullScreen']),
    videoHeight:state.getIn(['shangjia','videoHeight']),
    videoWidth:state.getIn(['shangjia','videoWidth']),
    videoEnd:state.getIn(['shangjia','videoEnd']),
    swiperImgs:state.getIn(['shangjia','swiperImgs']),
    shangjiaPhone:state.getIn(['shangjia','shangjiaPhone']),
    refreshing:state.getIn(['shangjia','refreshing']),
    isChangeLoding:state.getIn(['shangjia','isChangeLoding'])
  }
}


const mapDispatchToProps = dispatch => {
  return {

    _videoEnd(videoIsPlay){
      alert("视频结束");

      let map ={};
      map={videoEnd:true};
      map={videoEnd:true,
          videoIsPlay:false,
      };
      dispatch(actionCreators.changeShangjiaScreenStatus(map))
    },
    _changeVideoStatus  (videoStatus) {
      let map={};
      if(videoStatus){
        map={videoIsPlay : false,showVideoCover:false};
        map={videoIsPlay : false,showVideoCover:false,videoEnd:false};
      }else{
        map={videoIsPlay:true,showVideoCover:false};
        map={videoIsPlay:true,showVideoCover:false,videoEnd:false};
      }

        dispatch(actionCreators.changeShangjiaScreenStatus(map));
    },
    _onControlShrinkPress(isFullScreen) {
      if (isFullScreen) {
        Orientation.lockToPortrait();
      } else {
        Orientation.lockToLandscape();
      }
    },
    _onLayout  (event) {
      //获取根View的宽高
      let {width, height} = event.nativeEvent.layout;
      console.log('通过onLayout得到的宽度：' + width);
      console.log('通过onLayout得到的高度：' + height);

      // 一般设备横屏下都是宽大于高，这里可以用这个来判断横竖屏
      let isLandscape = (width > height);
      if (isLandscape){
       dispatch(actionCreators.changeShangjiaScreenStatus(isLandscape));
      } else {
        dispatch(actionCreators.changeShangjiaScreenStatus(isLandscape));
      }
      Orientation.unlockAllOrientations();
    },
    _formatTime(secound){
      let h = 0, i = 0, s = parseInt(second);
      if (s > 60) {
        i = parseInt(s / 60);
        s = parseInt(s % 60);
      }
      // 补零
      let zero = function (v) {
        return (v >> 0) < 10 ? "0" + v : v;
      };
      return [zero(h), zero(i), zero(s)].join(":");
    },
    _onRefresh(shangjiaId) {
      dispatch(actionCreators.refreshing(true));
      dispatch(actionCreators.getShangJia(shangjiaId,1));//0:init,1:refreshing,2:change
    },
    _getIsShow(changedata) {
      dispatch(actionCreators.getIsShow(changedata))
    },
    _getData(shangjiaId) {
      if(shangjiaId===undefined){
        dispatch(actionCreators.getShangJia(shangjiaId,0))  //0:init,1:refreshing,2:change
      }else{
        dispatch(actionCreators.changePageIsLoding(true));
        dispatch(actionCreators.getShangJia(shangjiaId,2));
      }

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
      if (DateUtil.time_range((response.businessHours + '').split("-")[0], (response.businessHours + '').split("-")[1], DateUtil.formatDate(new Date().getTime(), 'hh:mm:ss'))) {
        return require("../../images/triangle.png");
      } else {
        return require("../../images/unt.png");
      }
    },

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

  videoView :{
    flexDirection:'column',
    justifyContent:'center',
    width:mWidth,
    height:'100%'
  },
  storeMessageView: {  // "react-native-shadow"  "react-native-svg" 安卓阴影保留
    width: mWidth * 0.9,
    height: mHeight * 0.2,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop:23,
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
    resizeMode: 'stretch'},
  storeMessageViewChild2:{
    height:mHeight*0.04,width:mWidth*0.08,borderTopRightRadius:10,
    alignSelf:'center',resizeMode:'stretch',alignItems:'baseline'
  },
  map_pointImg :{
    marginLeft:9,
    alignSelf:'center',
    width:mWidth*0.02,
    height:mHeight*0.02,
    resizeMode:'stretch'
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
          height: mHeight * 0.06,
          width: mWidth * 0.14,
          borderTopRightRadius: 8,
          alignSelf: 'flex-end',
          resizeMode: 'stretch'
      },
      playButton: {
          width: 50,
          height: 50,
          backgroundColor: 'red',
          alignItems: 'center', justifyContent: 'center', position: 'absolute', zIndex: 9999
      },
      control: {
          flexDirection: 'row',
          height: 34,
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          position: 'absolute',
          bottom: 0,
          left: 0
      },
      playControl: {
          width: 24,
          height: 24,
          marginLeft: 15,
      },
      shrinkControl: {
          width: 15,
          height: 15,
          marginRight: 15,
      },
      aaa: {
          width: mWidth * 0.43, height: mHeight * 0.1, flexDirection: 'row',
          marginLeft: mWidth * 0.05, borderColor: '#F0F0F0', borderWidth: 1,
          justifyContent: 'flex-start',
          marginBottom: mHeight * 0.02,
          backgroundColor: '#ffffff',
          borderRadius: 8

      },
      wrapper: {
      },

})

export default connect(mapStateToProps, mapDispatchToProps)(ShangJia)

