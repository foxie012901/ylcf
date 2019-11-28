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
    Modal,
    Picker,
    TouchableOpacity
} from 'react-native';
const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;
import { Actions } from "react-native-router-flux";
import { actionCreators } from "./store";
import { connect } from "react-redux";
import DeviceInfo from 'react-native-device-info';
import { getLogIn } from './store/actionCreators';
import IconFont from 'react-native-vector-icons/Ionicons'
 class ChlidServicesDetailsTitle extends Component {
    constructor(props) {
        super(props);
        this.props._getData();
        this.state = {
        };



    }
    componentWillUpdate() {
     
    }
    _carListRenderItem({item,index}){
        console.log(item,index);
        return(<TouchableOpacity  onPress={()=>{this.props._changeTitle(item.hphm) ,this.props._changeSelectShow(false)}}><View style={{width:200,height:50,position:'relative'}}><Text>{item.hphm}</Text></View></TouchableOpacity>)
    }
    render() {
      
     
        return (
                <View>
            <View style={{width:mWidth,height:mHeight*0.1,backgroundColor:"#FFFFFF",flexDirection:'row',borderBottomWidth:2,justifyContent:'flex-start'}}>       
                <View style={{alignSelf:'center',flex:1,justifyContent:'flex-start',flexDirection:'row',}}>
                    <TouchableHighlight onPress={()=>{Actions.pop()}} style={{width:50,height:50}}><Text style={{textAlign:'center',lineHeight:50}}>〈</Text></TouchableHighlight>
                </View>
                <TouchableHighlight onPress={()=>{this.props._changeSelectShow(true)}} style={{alignSelf:'center',flex:1}}>
                <Text style={{textAlign:'center'}}>{this.props.title}</Text>
        </TouchableHighlight>
                <View style={{flex:1,}}></View>

            </View>
            {this.props.selectIsShow?<View style={{position:'absolute'}} >
                <FlatList data={this.props.carList}
                style={{width:mWidth*0.25,height:mHeight*0.25,backgroundColor:'#ffffff',position:'absolute',zIndex:99,alignSelf:'center',top:mHeight*0.1}}
                renderItem={this._carListRenderItem.bind(this)}
                />
                <TouchableOpacity  onPress={()=>{this.props._changeSelectShow(false)}}><View style={{width:mWidth,height:mHeight,backgroundColor: 'rgba(0,0,0,0.7)',}}></View></TouchableOpacity>
            </View>:null}

            </View>
            
        );
    }
}

const mapStateToProps = state => {
    return {
       title:state.getIn(['childservicesdetailstitle','title']),//标题
       carList:(state.getIn(['childservicesdetailstitle','carList'])).toJS(),//车牌列表
       selectIsShow:state.getIn(['childservicesdetailstitle','selectIsShow']),//下拉选是否显示

    }
}
const mapDispatchToProps = dispatch => {
    return {
      _getData(){
          dispatch(actionCreators.getCarList());
      },
      _changeSelectShow(show){
          dispatch(actionCreators.changeSelectShow(show))
      },
      _changeTitle(hphm){
          dispatch(actionCreators.changeTitle(hphm));
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChlidServicesDetailsTitle)
