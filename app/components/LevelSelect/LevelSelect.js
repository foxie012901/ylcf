import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    TouchableHighlight,
    ScrollView,
    ActivityIndicator,
    TouchableOpacity,
    Animated,
    Platform
} from 'react-native';
import IconFont from 'react-native-vector-icons/Ionicons'

//登录相关
import DeviceStorageUtil from '../../util/DeviceStorageUtil';
//react-redux
import { connect } from "react-redux";
//路由
import { Actions } from "react-native-router-flux";
import { actionCreators } from './store';
import { FlatList } from 'react-native-gesture-handler';
const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;

class LevelSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
                is:false,
                vh:new Animated.Value(0)
        };
        console.log("加载合作店初始传递数据",props);
            
    }
    componentWillReceiveProps(nProps){
        console.log('获取到合作店home数据',nProps)
    }
 

    componentWillMount() {
     
    }
    componentDidMount(){
     
    }
    animatedFun =() =>{
        Animated.timing(this.state.vh,{
            toValue:100,
            duration:3000
        }).start()
    }
    //三级
    reanderThreeItem =({item,index})=>{
      console.log(item)
      return <TouchableOpacity key={'three'+index} style={{width:mWidth*0.5,height:mHeight*0.05}} onPress={()=>{}}><Text>{item.typename}</Text></TouchableOpacity>
    }
    //二级
    renderTowItem =({item,index},)=>{
        console.log(item)
        if(this.props.menuSelectIndex===2){
        return <TouchableOpacity key={'tow'+index} style={{width:mWidth*0.5,height:mHeight*0.05}} onPress={()=>{this.props._changeChild(this.props.menuSelectIndex,index,undefined)}} ><Text>{item.text}</Text></TouchableOpacity>
        }else if(this.props.menuSelectIndex===0){
        return <TouchableOpacity key={'tow'+index} style={{width:mWidth*0.5,height:mHeight*0.05}} onPress={()=>{}}><Text>{item.name}</Text></TouchableOpacity>
        }else{
            return <TouchableOpacity key={'tow'+index} style={{width:mWidth*0.5,height:mHeight*0.05}} onPress={()=>{this.props._changeChild(this.props.menuSelectIndex,index,index)}}><Text>{item.name}</Text></TouchableOpacity>
        }
    }
    onPressSelect =() =>{
        this.props._changeMenuSelected(0),this.props._changeStatus(this.props.openStatus);
        if(this.props.openStatus){
            return {openStatus:true};
        }
    }
    toAllyShop =(index) =>{
        if(index===this.props.menuSelectIndex){
            this.props._changeStatus(this.props.openStatus);
        }else{
            if(!this.props.openStatus){
        this.props._changeMenuSelected(index);
        this.props._changeStatus(this.props.openStatus);
        }else{
            this.props._changeMenuSelected(index);
        }
        };
        if(!this.props.openStatus){
            return this.props.click(index);
        }
    }
    render() {
        let {menuList,menuSelectIndex,_changeMenuSelected,openStatus,_changeStatus}=this.props
        console.log(menuList)
        let bg ={}
        !openStatus?bg={}:bg={position:'absolute'}
        return (
            <View style={{flex:1,}} >
            <View style={[{width:'100%',height:mHeight*0.06,flexDirection:'row',zIndex:99}]}>
            {this.props.menuList.map((item,index)=>{
                let isSelect ={}
                if(this.props.openStatus&&this.props.menuSelectIndex===index){
                    isSelect={color:'green'}
                }
                if(index===0){
                return (<TouchableOpacity key={"top"+index} onPress={()=>{this.toAllyShop(index)}} style={{flex:1,backgroundColor:'#ffffff'}}><Text style={[{fontSize:14},isSelect]}>{this.props.levelSelectData[index][item.one].name}</Text></TouchableOpacity>)
                }else if(index===1){
                return (<TouchableOpacity key={"top"+index} onPress={()=>{this.toAllyShop(index)}} style={{flex:1,backgroundColor:'#ffffff'}}><Text style={[{fontSize:14},isSelect]}>{this.props.levelSelectData[index][item.one].name}</Text></TouchableOpacity>)
                }else {
                   
                        return (<TouchableOpacity key={"top"+index} onPress={()=>{this.toAllyShop(index)}} style={{flex:1,backgroundColor:'#ffffff'}}><Text style={[{fontSize:14},isSelect]}>{this.props.levelSelectData[index][item.one].text}</Text></TouchableOpacity>)
                 
                }
           })}
            </View>
            {
                
            this.props.openStatus?
                    <View style={{width:mWidth,height:mHeight}}>
                        {this.props.menuSelectIndex===1?
                        <View style={{flexDirection:'row',position:'absolute'}}>
                            <FlatList   style={{width:mWidth*0.5,height:mHeight*0.25,top:mHeight*0.06,backgroundColor:'#cccc',zIndex:999}}
                                        data={this.props.levelSelectData[this.props.menuSelectIndex]}
                                        renderItem={this.renderTowItem}/>
                            <FlatList   style={{width:mWidth*0.5,height:mHeight*0.25,top:mHeight*0.06,backgroundColor:'#ffffff',zIndex:999}}
                                        data={this.props.levelSelectData[this.props.menuSelectIndex][this.props.menuList[1].one].shopType3Response}
                                        renderItem={this.reanderThreeItem}/>
                        </View>
                    :
                    <FlatList
                    style={{width:mWidth,height:mHeight*0.25,top:mHeight*0.06,backgroundColor:'#ffffff',position:'absolute',zIndex:999}}
                    data={this.props.levelSelectData[this.props.menuSelectIndex]}
                    renderItem={this.renderTowItem}
                        />
                    }
                   
                        <TouchableHighlight style={{width:mWidth,height:mHeight,backgroundColor:'rgba(0,0,0,0.7)',position:'absolute',zIndex:99}} onPress={()=>{this.props._changeStatus(this.props.openStatus)}}><View></View></TouchableHighlight></View>
            :null}

            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        menuSelectIndex:state.getIn(["levelselect",'menuSelectIndex']),//被选中菜单下标
        menuList:(state.getIn(["levelselect","menuList"])).toJS(),//菜单
        openStatus:state.getIn(['levelselect','openStatus']),//展开状态

    }
}
const mapDispatchToProps = dispatch => {
    return { 
        _changeMenuSelected(index){
            dispatch(actionCreators.changeMenu(index));
        },
        _changeStatus(status){
            dispatch(actionCreators.changeLevelSelectStatus(!status))
        },
        _changeChild(menuSelectIndex,towIndex,threeIndex){
            dispatch(actionCreators.changeMenuSelect(menuSelectIndex,towIndex,threeIndex))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LevelSelect)