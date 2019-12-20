import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    ScrollView,
    ActivityIndicator,
    FlatList,
    SectionList,
    TouchableOpacity
} from 'react-native';
import IconFont from 'react-native-vector-icons/Ionicons'

//登录相关
import DeviceStorageUtil from '../../util/DeviceStorageUtil';
//react-redux
import { connect } from "react-redux";
//路由
import { Actions } from "react-native-router-flux";


const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;
class AllyShopList extends Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nProps){
    }
    componentWillMount() {
    }
  
    componentDidMount(){
    }
    getDistrict=(code)=>{
        for(let i in this.props.cdCityResponse){
            if(this.props.cdCityResponse[i].code===code){
                return this.props.cdCityResponse[i].name
            }
        }
    }
  
    render() {

        return (
            <View style={{top:-mHeight*0.94}}>
                {this.props.shopResponse.map((item,index)=>{
                    return(<View style={{flexDirection:'column'}}>
                    <TouchableOpacity style={{width:mWidth,height:mHeight*0.09,backgroundColor:'#ffffff',flexDirection:'row',borderTopColor:'#cccccc',borderTopWidth:1}}>
                        <View style={{flex:2,justifyContent:'center'}}><Image style={{resizeMode:'cover',width:40,height:30,alignSelf:'center'}} source={{uri:item.pic}}/></View>
                        <View style={{flex:8,flexDirection:'column',justifyContent:'space-around'}}>
                            <Text style={{fontSize:18}}>{item.shopname}</Text>
                            <Text style={{fontSize:10,color:'#cccc'}}>{item.shopType2Response.map((items,indexs)=>{if(indexs===0){return items.name}else{return ','+items.name}})}</Text>
                            <Text style={{fontSize:12}}>{this.getDistrict(item.countycode)}|{item.distance}km</Text>
                        </View>
                    </TouchableOpacity>
                        {item.shopTypeResponse.map((shopTypeItem,index)=>{
                            if(index<2){
                                return (<View style={{width:mWidth,height:mHeight*0.05,flexDirection:'row',borderTopColor:'#cccc',borderTopWidth:1,backgroundColor:'#ffffff'}}>
                                    <Text style={{flex:8,fontSize:12,lineHeight:mHeight*0.05}}>{shopTypeItem.servicename}</Text>
                                    <Text style={{flex:8,fontSize:13,color:'blue',lineHeight:mHeight*0.05}}>{shopTypeItem.appprice}</Text>
                                    <Text style={{flex:8,fontSize:10,lineHeight:mHeight*0.05}}>{shopTypeItem.price}</Text>
                                </View>)
                            }
                        })}
                   
                        {item.ckxm!==''?<View style={{width:mWidth,height:mHeight*0.1,backgroundColor:'#ffffff',justifyContent:'center'}}><Text style={{alignSelf:'center',color:'blue'}}>{item.ckxm}</Text></View>:null}
                </View>
                
                )
                })}
                
            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        cdCityResponse:(state.getIn(['allyshop',"cdCityResponse"])).toJS(),//地理编码

    }
}
const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AllyShopList);