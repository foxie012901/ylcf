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
        for(let i=0;i<this.props.levelSelectData.length;i++){
           
            if(i!==2){
                console.log(this.props.levelSelectData[i].name)  
                this.props.menuNameList.push({name:this.props.levelSelectData[i][0].name})
            }else{
                this.props.menuNameList.push({name:this.props.levelSelectData[i][0].text})
            }
          
        }
        this.props._initMenuListName(this.props.menuNameList);      
      
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
      return <TouchableOpacity key={'three'+index} style={{width:mWidth*0.5,height:mHeight*0.05}} onPress={()=>{this.props._changeMenuListName(this.props.menuSelectIndex,item.typename,this.props.openStatus)}}><Text>{item.typename}</Text></TouchableOpacity>
    }
    shopTypeItem =(item,index) =>{
        console.log(item,index);
        if(item.shopType3Response.length===0){
            this.props._changeMenuListName(this.props.menuSelectIndex,item.name,this.props.openStatus)
        }
    }
    //二级
    renderTowItem =({item,index},)=>{
        console.log(item)
        if(this.props.menuSelectIndex===2){
        return <TouchableOpacity key={'tow'+index} style={{width:mWidth*0.5,height:mHeight*0.05}} onPress={()=>{this.props._changeChild(this.props.menuSelectIndex,index,undefined),this.props._changeMenuListName(this.props.menuSelectIndex,item.text,this.props.openStatus)}} ><Text>{item.text}</Text></TouchableOpacity>
        }else if(this.props.menuSelectIndex===0){
        return <TouchableOpacity key={'tow'+index} style={{width:mWidth*0.5,height:mHeight*0.05}} onPress={()=>{this.props._changeChild(this.props.menuSelectIndex,index,index);this.props._changeMenuListName(this.props.menuSelectIndex,item.name,this.props.openStatus)}}><Text>{item.name}</Text></TouchableOpacity>
        }else{
            return <TouchableOpacity key={'tow'+index} style={{width:mWidth*0.5,height:mHeight*0.05,zIndex:99}} onPress={()=>{this.props._changeChild(this.props.menuSelectIndex,index,index),this.shopTypeItem(item,index)}}><Text>{item.name}</Text></TouchableOpacity>
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
            {this.props.menuNameList.map((item,index)=>{
                console.log(item,index)
                let isSelect ={}
                if(this.props.openStatus&&this.props.menuSelectIndex===index){
                    isSelect={color:'green'}
                }
                return (<TouchableOpacity key={"top"+index} onPress={()=>{this.toAllyShop(index)}} style={{flex:1,backgroundColor:'#ffffff'}}><Text style={[{fontSize:14},isSelect]}>{item.name}</Text></TouchableOpacity>)

           })}
            </View>
            {                
            this.props.openStatus?
                    <View style={{width:mWidth,height:mHeight}}>
                        {this.props.menuSelectIndex===1?
                        <View style={{flexDirection:'row',position:'absolute',zIndex:999}} pointerEvents={'auto'}>
                            <FlatList   style={{width:mWidth*0.5,height:mHeight*0.2,backgroundColor:'#cccc',zIndex:99}}
                                        data={this.props.levelSelectData[this.props.menuSelectIndex]}
                                        renderItem={this.renderTowItem}
                                        keyExtractor={(item, index) => index.toString()}/>
                            <FlatList   style={{width:mWidth*0.5,height:mHeight*0.2,backgroundColor:'#ffffff',zIndex:99}}
                                        data={this.props.levelSelectData[this.props.menuSelectIndex][this.props.menuList[1].one].shopType3Response}
                                        renderItem={this.reanderThreeItem}
                                        pointerEvents={'auto'}
                                        keyExtractor={(item, index) => index.toString()}
                                        />
                        </View>
                    :
                    <FlatList
                    style={{width:mWidth,height:mHeight*0.25,backgroundColor:'#ffffff',position:'absolute',zIndex:999}}
                    data={this.props.levelSelectData[this.props.menuSelectIndex]}
                    renderItem={this.renderTowItem}
                    keyExtractor={(item, index) => index.toString()}
                        />
                    }
                   
                        <TouchableHighlight style={{width:mWidth,height:mHeight,backgroundColor:'rgba(0,0,0,0.7)',position:'absolute',zIndex:9}} onPress={()=>{this.props._changeStatus(this.props.openStatus)}}><View></View></TouchableHighlight></View>
            :null}

            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        menuSelectIndex:state.getIn(["levelselect",'menuSelectIndex']),//被选中菜单下标
        menuList:(state.getIn(["levelselect","menuList"])).toJS(),//菜单下标保存
        openStatus:state.getIn(['levelselect','openStatus']),//展开状态
        menuNameList:(state.getIn(['levelselect','menuNameList'])).toJS(),//菜单名称
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
        },
        _initMenuListName(list){
            dispatch(actionCreators.initMenuListName(list))
        },
        _changeMenuListName(menuSelectIndex,name,status){
            console.log(menuSelectIndex,name)
            dispatch(actionCreators.changeMenuListName(menuSelectIndex,name));
            dispatch(actionCreators.changeLevelSelectStatus(!status));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LevelSelect)