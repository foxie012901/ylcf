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
 class ServiceReservation extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        };
        console.log(props)


    }
    componentWillReceiveProps(nProps){
        console.log(nProps)
        this.props.list=nProps.list;
    }
    componentDidMount(){
        
    }
    componentWillUpdate() {
     
    }
    
    render() {
       let {
           list,
           selectServiceIndex,
           _changeSelectIndex
        }= this.props
            console.log(list)
        return (<View style={{flexDirection:'row', flexWrap: 'wrap',justifyContent:'space-between',}}>
                {this.props.list.map((item,index)=>{
                    let style={width:'40%',height:mHeight*0.08,border:1,flexDirection:'column',backgroundColor:'#ffffff',marginTop:10,marginBottom:8,justifyContent:'center',margin:16}
                    let textStyle={textAlign:'center'}
                    if(index===this.props.selectServiceIndex){
                        style={width:'40%',height:mHeight*0.08,border:1,flexDirection:'column',backgroundColor:'rgb(6,123,237)',marginTop:10,marginBottom:8,justifyContent:'center',margin:16}
                        textStyle={textAlign:'center',color:"#ffffff"}
                    }
                        if(item.Num===0){
                            return (<View style={{width:'40%',height:mHeight*0.08,border:1,flexDirection:'column',backgroundColor:'#ffffff',marginTop:10,marginBottom:8,justifyContent:'center',margin:16}}>
                                    <Text style={{textAlign:'center',color:'rgb(154,154,154)'}}>{item.Time}</Text><Text style={{textAlign:'center',color:'rgb(154,154,154)'}}>名额已满</Text>
                                    </View>)
                        }else{
                            return ( <TouchableOpacity onPress={()=>{this.props._changeSelectIndex(index,item.Time)}} style={style}><Text style={textStyle}>{item.Time}</Text><Text style={textStyle}>剩余名额 : {item.Num}</Text></TouchableOpacity>)
                        }
                    
                      
                   
                })}
                </View>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        selectServiceIndex:state.getIn(["servicereservation","selectServiceIndex"]),//已选择服务项目下标
        list:(state.getIn(["servicereservation","list"])).toJS(),

    }
}
const mapDispatchToProps = dispatch => {
    return {
        _changeSelectIndex(index,time){
            dispatch(actionCreators.changeSelectIndex(index,time));
        }
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceReservation)
