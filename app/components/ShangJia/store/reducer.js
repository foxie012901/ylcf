 /* import {
    GET_DATA,
} from "./actionTypes";
*/
import { 
 
    Dimensions,
    
} from 'react-native';
 import { actionTypes } from "./index";
import { fromJS } from "immutable";
const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;
const defaultState = fromJS({
    list:'',
    isShow: true,
    text:'',
    videoIsShow :false,
    videoLoadStart:true,
    videoIsError:false,
    videoIsPlay:false,
    videoPaused:0,
    address :'',
    response:Object,
    imgTrue:true,
    showVideoCover:false,
    showVideoControl:false,
    currentTime:0,
    duration:0,
    isFullScreen:false,
    videoHeight:'25%',
    videoWidth:mWidth,
    videoEnd:false
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
            showVideoCover:true
        })
    }
     if(action.type ===actionTypes.VIDEO_LOAD_START){
        return state.merge({
            videoLoadStart:false,
            showVideoCover:true
        })
     }
     if(action.type ===actionTypes.JSON_DATA){
        return state.set('response' ,JSON.parse(action.data).data);  
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
         return state.merge(action.data);
     
     }
    

    return state
}