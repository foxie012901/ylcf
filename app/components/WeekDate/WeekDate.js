import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TextInput,
    Button,
    ActivityIndicator,
    Platform,
    Dimensions,
    FlatList,
    TouchableOpacity,
    DeviceEventEmitter
} from 'react-native';
const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;
import { Actions } from "react-native-router-flux";
import { actionCreators } from "./store";
import { connect } from "react-redux";
import DeviceInfo from 'react-native-device-info';
import { getLogIn } from './store/actionCreators';
import IconFont from 'react-native-vector-icons/Ionicons';
import ChildServicesDetails from "../ChildServicesDetails/ChildServicesDetails"
import LoadingUtil from "../../util/LoadingUtil";
 class WeekDate extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        };



    }
    componentDidMount(){
        this.listener = DeviceEventEmitter.addListener('refresh',(val)=>{
            this.props._changeSelectIndex(this.props.selectIndex,this.props.accPackageId,this.props.storeId,this.props.storeChildItemId)
        });
    }
    componentWillUpdate() {
     
    }
    componentWillUnmount(){
        this.listener.remove();
    }
    
    render() {
       let {
           list,
           selectIndex,
           _changeSelectIndex,
        }= this.props
            console.log(list)
        return (<View style={{marginTop:10}}>
                <View style={{width:mWidth,height:41,backgroundColor:'#ffffff',justifyContent:'center'}}><Text style={{fontSize:15,paddingLeft:16}}>预约时间</Text></View>
                <View style={{width:mWidth,height:50,flexDirection:'row'}}>
                    
                {this.props.list.map((item,index)=>{
                    console.log(item,index);
                    let week = "";
                    let styleText={textAlign:'center',flex:4,color:'rgb(154,154,154)'}
                    let colorV = (<View></View>)
                    if(index===this.props.selectIndex){
                        styleText={textAlign:'center',color:'rgb(6,123,237)',flex:4}
                        colorV=<View style={{flex:0.5,backgroundColor:'blue',marginLeft:8,marginRight:8}}></View>
                    }
                    switch (item.strDate){
                        
                        case '0':
                           week="周日"
                           break
                        case '1':
                          week="周一"
                          break
                        case '2':
                           week="周二"
                           break
                        case '3':
                            week="周三"
                             break
                        case '4':
                            week="周四"
                             break
                        case '5':
                            week="周五"
                             break
                        case '6': 
                            week="周六"
                             break
                    } 
                    console.log(week);
                    if(index===0){
                        week="明天"
                    }
                    return (<TouchableOpacity onPress={()=>{this.props._changeSelectIndex(index,this.props.accPackageId,this.props.storeId,this.props.storeChildItemId)}} style={{flex:1,flexDirection:'column',backgroundColor:'#ffffff'}}><Text style={styleText}>{week}</Text><Text style={styleText}>{item.strD}</Text>{colorV}</TouchableOpacity>)
                })}
            </View>
            </View>
            
        );
    }
}

const mapStateToProps = state => {
    return {
       list:(state.getIn(["weekdate","list"])).toJS(),//日期列表
       selectIndex:state.getIn(['weekdate',"selectIndex"]),//已选择的index

    }
}
const mapDispatchToProps = dispatch => {
    return {
        _changeSelectIndex(index,accPackageId,storeId,storeChildItemId){
            dispatch(actionCreators.changeSelectIndex(index,accPackageId,storeId,storeChildItemId));
            LoadingUtil.showLoading()
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeekDate)
