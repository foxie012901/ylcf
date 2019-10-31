 /* import {
    GET_DATA,
} from "./actionTypes";
*/
 import { actionTypes } from "./index";
import { fromJS } from "immutable";

const defaultState = fromJS({
    list:'',
    isShow: true,
    text:'',
    videoIsShow :false,
    videoLoadStart:true,
    videoIsError:false,
    address :'',
    response:Object,
    imgTrue:true,
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
         return state.set('videoLoadStart',false);
     }
     if(action.type ===actionTypes.VIDEO_LOAD_START){
         return state.set('videoLoadStart',true);
     }
     if(action.type ===actionTypes.JSON_DATA){
        
         
        return state.set('response' ,JSON.parse(action.data).data);
          
     }
    

    return state
}