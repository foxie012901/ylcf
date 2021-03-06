import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TextInput,
    Button,
    ActivityIndicator,
    Platform,
    ScrollView,
    Dimensions,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    BackHandler
} from 'react-native';
import { actionCreators } from "./store";
import { connect } from "react-redux";
import DeviceInfo from 'react-native-device-info';
import { Actions } from "react-native-router-flux";
import { getLogIn } from './store/actionCreators';
import IconFont from 'react-native-vector-icons/Ionicons'
const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;
import NetInfo from '@react-native-community/netinfo'
import Video from 'react-native-video';
import Carousel  from 'react-native-looped-carousel';
import ChildServicesDetailsMessage from './ChildServicesDetailsMessage'
import DateUtil from "../../util/DateUtil";
import WeekDate  from "../WeekDate/WeekDate";
import ServiceReservation  from "../ServiceReservation/ServiceReservation";
import LoadingUtil from '../../util/LoadingUtil';
class ChildServicesDetails extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
        };
        this._dateList();
    }
    _dateList(){
   
    }
    componentWillMount(){
        this.props._getData(this.props.accPackageId,this.props.storeId,this.props.storeChildItemId,this.props.date);

    }

    componentDidMount(){
      if (Platform.OS === 'android') {
        this.backHandler= BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid); //添加安卓物理返回键监听,防止遮罩层与页面一同被返回
    }
        NetInfo.fetch().then(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            if(state.type==='wifi'){
              global.toast.show('当前为wifi');
            }
          });
    }
    onBackAndroid(){
      alertView.closeAlert();   //关闭遮罩层 返回上一页
      Actions.pop();
      return true
        }
        componentWillUnmount() {   if (Platform.OS === 'android') {this.backHandler.remove()}} //页面销毁时监听一同销毁

    componentWillUpdate() {
     
    }
    render() {
      let{
        isRefreshing,
        loopList,
        serviceReservationResult,
        basicsRepairProjectResult,
        basicsRepairProjectDetailResult,
        videoLoadStart,
        videoIsPlay,//视频是否正在播放
        _videoLoadStart,//视频开始加载方法
        showVideoCover,//显示视频封面
        showVideoControl,//显示视频控件
        isFullScreen,//当前是否全屏显示
        currentTime,//视频当前时间
        duration,//视频总时长
        _videoOnLoad,//视频加载方法
        _isRun,//视频是否进行
        _onControlShrinkPress,//点击全屏按钮
        _onLayout,
        videoEnd,//视频播放结束
        _videoEnd,//视频播放结束
        _changeVideoStatus,//修改视频属性
        _getFromDate,
        time,//选择的时段
        plateNum,//选择的车牌号
        weekIndex,//选择日历下标
      }=this.props 
     
     let page = (<View style={{flex:1}}>
       <ScrollView style={{flex:1}} >
               {loopList.length>0?<Carousel  style={{width: mWidth, height:mHeight*0.18}}
       bullets={true}
       delay={6000}
      >

{
            loopList.map((item,index) =>{
                console.log(item);
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
            source={{uri:item.video}} />
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
        
      </Carousel>:<View><Image style={{width: mWidth, height:mHeight*0.25,resizeMode:'stretch'}} source={require('../../images/BZlogo.png')}/></View>}
      <ChildServicesDetailsMessage name={basicsRepairProjectResult.ProjectName} custAccountPrice={basicsRepairProjectDetailResult.CustAccountPrcie} 
                                    timeRequired={basicsRepairProjectResult.TimeRequired} remarks={basicsRepairProjectResult.Remarks}/>
                    
        <WeekDate accPackageId={this.props.accPackageId} storeId={this.props.storeId} storeChildItemId={this.props.storeChildItemId}/>
        <ServiceReservation list={serviceReservationResult} />
            


        </ScrollView >
        <TouchableOpacity onPress={()=>{this.props._getFromDate(
            this.props.accPackageId,this.props.storeId,plateNum,time,DateUtil.formatDate( DateUtil.getAfterDayDate(weekIndex+1).getTime(),"yyyy-MM-dd"),this.props.basicsRepairProjectDetailResult.ID,this.props.storeChildItemId,this.props.basicsRepairProjectResult.ProjectName)}} 
        style={{width:mWidth,height:60,backgroundColor:'rgb(6,123,237)'}}>
            <Text style={{lineHeight:60,textAlign:'center',fontSize:16,color:'rgb(255,255,255)'}}>确定预约</Text>
        </TouchableOpacity>
       

    </View>)
        return (
       page   
        );
    }
}
const mapStateToProps = state => {
    return {     
        isRefreshing:state.getIn(["childservicesdetails","isRefreshing"]),//下拉刷新
        loopList:(state.getIn(['childservicesdetails','loopList'])).toJS(),//轮播列表
        serviceReservationResult:(state.getIn(["childservicesdetails","serviceReservationResult"])).toJS(),
        basicsRepairProjectDetailResult:state.getIn(["childservicesdetails","basicsRepairProjectDetailResult"]),
        videoIsShow :state.getIn(["childservicesdetails","videoIsShow"]),
        videoLoadStart:state.getIn(["childservicesdetails","videoLoadStart"]),
        videoIsError:state.getIn(["childservicesdetails","videoIsError"]),
        videoIsPlay:state.getIn(["childservicesdetails","videoIsPlay"]),
        showVideoCover:state.getIn(["childservicesdetails","showVideoCover"]),
        showVideoControl:state.getIn(['childservicesdetails','showVideoControl']),
        duration:state.getIn(['childservicesdetails','duration']),
        currentTime:state.getIn(['childservicesdetails','currentTime']),
        isFullScreen:state.getIn(['childservicesdetails','isFullScreen']),
        videoHeight:state.getIn(['childservicesdetails','videoHeight']),
        videoWidth:state.getIn(['childservicesdetails','videoWidth']),
        videoEnd:state.getIn(['childservicesdetails','videoEnd']),
        basicsRepairProjectResult:state.getIn(["childservicesdetails","basicsRepairProjectResult"]),
        time:state.getIn(['servicereservation','selectTime']),
        plateNum:state.getIn(["childservicesdetailstitle","selectPlateNum"]),
        weekIndex:state.getIn(['weekdate',"selectIndex"]),
    }
}
const mapDispatchToProps = dispatch => {
    return {
      _getData(accPackageId,storeId,storeChildItemId,date){
       dispatch(actionCreators.getStoreChildItemInfo(accPackageId,storeId,storeChildItemId,date))
      },
      _getFromDate(accPackageId,storeId,plateNum,time,date,storeChildItemDetailId,storeChildItemId,projectName){
        if(plateNum===undefined){
          alert("请选择车牌号")
        }
        if(time===undefined){
          alert("请选择预约时间")
        }
        else{
          
        console.log(accPackageId,storeId,plateNum,time,date,storeChildItemDetailId,storeChildItemId);
        let formData = new FormData();
        
          formData.append("accPackageId",accPackageId);
          formData.append("storeId",storeId);
          formData.append("plateNum",plateNum);
          formData.append("time",time);
          formData.append("date",date);
          formData.append("storeChildItemDetailId",storeChildItemDetailId);
          formData.append("storeChildItemId",storeChildItemId);
          let serviceName=projectName;
          let dateTime=date+" "+time
          console.log(dateTime)
        dispatch(actionCreators.orderStoreChildItem(formData,serviceName,dateTime));
        LoadingUtil.showLoading();
        }
      },
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
      _onRefresh(shangjiaId) {
        dispatch(actionCreators.refreshing(true));
        dispatch(actionCreators.getShangJia(shangjiaId,1));//0:init,1:refreshing,2:change
      },
      _videoOnLoad() {
        dispatch(actionCreators.videoOnLoad());
      },
      _videoLoadStart() {
        dispatch(actionCreators.videoLoadStart());
      },
    }
}
const styles = StyleSheet.create({  
  videoView :{
    flexDirection:'column',
    justifyContent:'center',
    width:mWidth,
    height:'100%'
  },

})
export default connect(mapStateToProps, mapDispatchToProps)(ChildServicesDetails)