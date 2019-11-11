import { 
 
    Dimensions,
    
} from 'react-native';
 import { actionTypes } from "./index";
import { fromJS } from "immutable";
const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;
const defaultState = fromJS({
    list:'',
    isShow: true,//是否显示页面
    text:'',
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
    videoWidth:mWidth,//视频宽度
    videoEnd:false,//视频是否结束标识
    swiperImgs:[],//轮播列表
    swiperIs:false,//是否正在轮播
})

export default (state = defaultState, action) => {
    console.log('create for state')
    // if (action.type === actionTypes.GET_IS_SHOW) {

    //     return state.set('isShow', action.changedata)
    // }

    if (action.type === actionTypes.GET_IS_SHOW) {
        return state.set('isShow', action.changedata)
    }
    if (action.type === actionTypes.GET_DATA) {
        return state;
    }
     if(action.type ===actionTypes.CHANGE_DATA){
         console.log(action.data);
        return state.set('text', state.get('text')+action.data);
     }
     if(action.type ===actionTypes.VIDEO_ON_LOAD){
        return state.merge({
            videoLoadStart:false,
            showVideoCover:true,
            swiperIs:true
        })
    }
     if(action.type ===actionTypes.VIDEO_LOAD_START){
        return state.merge({
            videoLoadStart:false,
            showVideoCover:true
        })
     }
     if(action.type ===actionTypes.JSON_DATA){
         let data = JSON.parse(action.data).data;
         let swiperImgsList = []
         swiperImgsList.push({'video':data.video})
         data.imgs.map((item)=>{
             swiperImgsList.push({'img':item})
         })
        return state.merge({'response':data,
                'swiperImgs':swiperImgsList
    });  
     }
     if(action.type ===actionTypes.CHANGE_VIDEO_STATUS){
         if(state.get('videoIsPlay')==true){
            return state.setIn(['videoIsPlay',false])
        }
         else{
            return state.set('videoIsPlay',true);
         }
     }
     if(action.type===actionTypes.CHANGE_SCREEN_STATUS){
         alert('进料')
         return state.merge(action.data);
     
     }
    

    return state
}