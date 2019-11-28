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

} from 'react-native';
const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;
import { Actions } from "react-native-router-flux";

export default class TiTle extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };



    }
    componentWillUpdate() {
     
    }
    render() {
      
     
        return (

            <View style={{width:mWidth,height:mHeight*0.1,backgroundColor:"#FFFFFF",flexDirection:'row',borderBottomWidth:2,justifyContent:'flex-start'}}>       
                <View style={{alignSelf:'center',flex:1,justifyContent:'flex-start',flexDirection:'row',}}>
                    <TouchableHighlight onPress={()=>{Actions.pop()}} style={{width:50,height:50}}><Text style={{textAlign:'center',lineHeight:50}}>〈</Text></TouchableHighlight>
                </View>
                <TouchableHighlight onPress={()=>{alert("aa")}} style={{alignSelf:'center',flex:1}}>
                <Text style={{textAlign:'center'}}>{this.props.title}</Text>
                </TouchableHighlight>
                <View style={{flex:1,}}></View>
            </View>
        );
    }
}
