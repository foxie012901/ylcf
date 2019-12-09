import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TextInput,
    StyleSheet,
    Button,
    ActivityIndicator,
    Platform,
    Dimensions,
    Animated,
    TouchableOpacity,
    BackHandler
} from 'react-native';
const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;
import { Actions } from "react-native-router-flux";
export default class AlertView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time:"",
            serviceName:'',
            isShow:false,
            imgHeight:255,
            translateValue:new Animated.ValueXY({x:0,y:0}),
            sz:new Animated.Value(0),
            line:new Animated.Value(0),
            fz:new Animated.Value(0)
        };
        console.log(this.state.sz)
    }
    getText =(dateTime,serviceName) =>{
        this.setState({isShow:true,time:dateTime,serviceName:serviceName})
        this.executionAnimated();
    }
    closeAlert(){
        this.setState({    time:"",
        serviceName:'',
        isShow:false,
        imgHeight:255,
        translateValue:new Animated.ValueXY({x:20,y:20}),
        sz:new Animated.Value(0),
        line:new Animated.Value(0),
        fz:new Animated.Value(0)})
    }
    componentWillUpdate() {
     
    }
    componentDidMount(){
      
       
    }
    componentWillUnmount(){
    }
   
    componentWillReceiveProps(nProps){
        console.log(nProps)
        this.props.name=nProps.name,
        this.props.custAccountPrice=nProps.custAccountPrice,
        this.props.timeRequired=nProps.timeRequired,
        this.props.remarks=nProps.remarks
    }
    executionAnimated =() =>{
        Animated.parallel(
            [Animated.timing(this.state.translateValue, //四个动画同时执行
            {
                toValue: {x:mHeight*0.3, y:mWidth*0.8},    //目标值
                duration: 500,                   // 让动画持续一段时间
                isInteraction: false
            }).start(),
        Animated.timing(this.state.sz,
                {
                    toValue: 15,   
                    duration:500,
                    isInteraction: false
                }).start(),
        Animated.timing(this.state.fz,
                    {
                        toValue: 18,   
                        duration:500,
                        isInteraction: false
                    }).start(),
        Animated.timing(this.state.line,
                        {
                            toValue: 2,   
                            duration:500,
                            isInteraction: false
                        }).start(),
            ])
                
        
          
    }
    render() {
        return this.state.isShow? (
        <View style={styles.viewMessage} >
            <TouchableOpacity  onPress={()=>{this.setState({time:"",
            isShow:false,
            imgHeight:255,
            translateValue:new Animated.ValueXY({x:0,y:0}),
            sz:new Animated.Value(0),
            line:new Animated.Value(0),
            fz:new Animated.Value(0)})}}><View style={{width:mWidth,height:mHeight,backgroundColor: 'rgba(0,0,0,0.7)',}}></View></TouchableOpacity>
                 <Animated.View
         
          style={ {
            backgroundColor:'rgb(255,255,255)',
            alignSelf:'center',
            height: this.state.translateValue.x,
            width: this.state.translateValue.y,
            position:'absolute',
         }}
        
        >
            <Animated.View style={{flex:3,justifyContent:'center',flexDirection:'row',}}><Animated.Text style={{fontSize:this.state.fz,textAlign:'center',alignSelf:'center',flex:1}}>预约提交成功</Animated.Text></Animated.View>
            <Animated.View style={{flex:4,justifyContent:'center',flexDirection:'row',padding:10,}}>
                <Animated.Text style={{fontSize:5,textAlign:'center',alignSelf:'center',flex:1,fontSize:this.state.sz}}>您于{this.state.time}到店享受{this.state.serviceName}业务的预约提交成功，请到我的【我的预约】跟踪预约状态。</Animated.Text>
            </Animated.View>
            <Animated.View style={{height:this.state.line,backgroundColor:'red',}}></Animated.View>
            <Animated.View style={{flex:2,justifyContent:'center',flexDirection:'row',zIndex:99,}}><Animated.Text style={{fontSize:this.state.fz,textAlign:'center',alignSelf:'center',flex:1}}>去查看</Animated.Text></Animated.View>


        </Animated.View>
        

            </View>
            
        ):null;
    }
}
const styles = StyleSheet.create({
    viewMessage:{
       
        position:'absolute',justifyContent:'center'
    },
   
})
