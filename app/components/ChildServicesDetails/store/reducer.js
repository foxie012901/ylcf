          

import { actionTypes } from "./index";
import { fromJS } from "immutable";
import DeviceStorageUtil from '../../../util/DeviceStorageUtil';
import { Actions, ActionConst } from "react-native-router-flux";
import LoadingUtil from "../../../util/LoadingUtil";

const defaultState = fromJS({
   isRefreshing : false,
   loopList:[],
   serviceReservationResult:[],
   basicsRepairProjectDetailResult:{},
   videoIsShow :false,//视频是否显示标识
   videoLoadStart:true,//视频是否开始加载标识
   videoIsError:false,//视频错误标识
   videoIsPlay:false,//视频是否播放标识
   videoPaused:0,//视频暂停标识
   address :'',//地址
   response:Object,//接口返回
   imgTrue:true,//是否在当前时间段标识
   showVideoCover:false,//是否显示视频封面标识
   showVideoControl:false,//是否显示视频工具标识
   currentTime:0,//视频当前播放时间
   duration:0,//视频总时间
   isFullScreen:false,//是否全屏
   videoHeight:'25%',//视频高度
   videoEnd:false,//视频是否结束标识
   basicsRepairProjectResult:{}
})

export default (state = defaultState, action) => {
    switch(action.type){
        case actionTypes.GET_CHILD_SERVICES_DETAILS_JSON:
            console.log(action.data.data);
            let list = [];
            if(action.data.data.basicsRepairProjectResult.Video!==undefined&&action.data.data.basicsRepairProjectResult.Video!==""){
                list.push({'video':'http://mdglcs3.jlylcf.com/'+action.data.data.basicsRepairProjectResult.Video})
            }
            if(action.data.data.basicsRepairProjectResult.Images.length>0){
                action.data.data.basicsRepairProjectResult.Images.map(item=>{
                    console.log(item);
                    list.push({'img':item})
                })
            }
            return state.merge({"loopList":fromJS(list),
                                "serviceReservationResult":fromJS(action.data.data.serviceReservationResult),
                                "basicsRepairProjectDetailResult":action.data.data.basicsRepairProjectDetailResult,
                                "basicsRepairProjectResult":action.data.data.basicsRepairProjectResult
                            })
        case actionTypes.ORDER_RESULT:
                LoadingUtil.dismissLoading();
                global.toast.show(action.data.message);
                
        case actionTypes.VIDEO_ON_LOAD:
                return state.merge({
                    videoLoadStart:false,
                    showVideoCover:true,
                    swiperIs:true
                })
        case actionTypes.VIDEO_LOAD_START:
                return state.merge({
                    videoLoadStart:false,
                    showVideoCover:true
                })
        case actionTypes.CHANGE_VIDEO_STATUS:
                if(state.get('videoIsPlay')==true){
                    return state.set(['videoIsPlay',false])
                }
                 else{
                    return state.set('videoIsPlay',true);
                 }
        case actionTypes.CHANGE_SCREEN_STATUS:
                return state.merge(action.data);
    }
   
    return state
}