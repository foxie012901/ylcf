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
    //二级
    renderTowItem =({item,index},)=>{
        console.log(item,index,this.props.menuSelectIndex)
        if(this.props.menuSelectIndex===2){
        return <TouchableOpacity style={{width:mWidth*0.5,height:mHeight*0.05}}><Text>{item.text}</Text></TouchableOpacity>
        }else{
        return <TouchableOpacity style={{width:mWidth*0.5,height:mHeight*0.05}}><Text>{item.name}</Text></TouchableOpacity>
        }
    }
    onPressSelect =() =>{
        this.props._changeMenuSelected(0),this.props._changeStatus(this.props.openStatus);
        if(this.props.openStatus){
            return {openStatus:true};
        }
    }
    toAllyShop =(index) =>{
        if(!this.props.openStatus){
            return this.props.click(index);
        }
    }
    render() {
        let {menuList,menuSelectIndex,_changeMenuSelected,openStatus,_changeStatus}=this.props
        let bg ={}
        !openStatus?bg={}:bg={position:'absolute'}
        return (
            <View style={{flex:1,}} >
            <View style={[{width:'100%',height:mHeight*0.06,flexDirection:'row',zIndex:99}]}>
            {this.props.menuList.map((item,index)=>{
                console.log(item,index)
                console.log(this.props.levelSelectData[index][item.one])
                if(index===0){
                return (<TouchableOpacity  onPress={()=>{this.toAllyShop(index),this.props._changeMenuSelected(index),this.props._changeStatus(this.props.openStatus)}} style={{flex:1,backgroundColor:'green'}}><Text>{this.props.levelSelectData[index][item.one].name}</Text></TouchableOpacity>)
                }else if(index===1){
                return (<TouchableOpacity onPress={()=>{this.toAllyShop(index),this.props._changeMenuSelected(index),this.props._changeStatus(this.props.openStatus)}} style={{flex:1,backgroundColor:'green'}}><Text>{this.props.levelSelectData[index][item.one].name}</Text></TouchableOpacity>)
                }else {
                    if(item.one===0){
                        return (<TouchableOpacity onPress={()=>{this.toAllyShop(index),this.props._changeMenuSelected(index),this.props._changeStatus(this.props.openStatus)}} style={{flex:1,backgroundColor:'green'}}><Text>{this.props.levelSelectData[index][item.one].text}</Text></TouchableOpacity>)
                    }else{
                        return (<TouchableOpacity onPress={()=>{ this.props._changeMenuSelected(index),this.props._changeStatus(this.props.openStatus)}} style={{flex:1,backgroundColor:'green'}}><Text>{this.props.levelSelectData[index][item.one].text}</Text></TouchableOpacity>)

                    }
                }
           })}
            </View>
            {console.log(this.props.levelSelectData[this.props.menuSelectIndex])}

            {
                
            this.props.openStatus?
                    
                        <FlatList
                    style={{width:mWidth,height:mHeight*0.25,top:mHeight*0.06,backgroundColor:'rgba(50,50,50,0.2)',position:'absolute',zIndex:999}}
                    data={this.props.levelSelectData[this.props.menuSelectIndex]}
                    renderItem={this.renderTowItem}
                    />
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LevelSelect)