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

} from 'react-native';
const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;
import { Actions } from "react-native-router-flux";
export default class ChildServicesDetailsMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        console.log(props)


    }
    componentWillUpdate() {
     
    }
    componentWillReceiveProps(nProps){
        console.log(nProps)
        this.props.name=nProps.name,
        this.props.custAccountPrice=nProps.custAccountPrice,
        this.props.timeRequired=nProps.timeRequired,
        this.props.remarks=nProps.remarks
    }
    render() {
      
     
        return (
            <View style={styles.viewMessage}>
                <View style={styles.nameRow}><Text style={styles.nameText}>{this.props.name}</Text><Text style={styles.priceText}>参考价格 :  ￥{this.props.custAccountPrice}</Text></View>
                <View style={styles.timeRow}><Text style={styles.timeText}>服务时间 ： 约{this.props.timeRequired}分钟</Text></View>
                <View style={styles.detailRow}><Text numberOfLines={3} style={styles.detailText}>{this.props.remarks}</Text></View>
            </View>
            
        );
    }
}
const styles = StyleSheet.create({
    viewMessage:{
        width:mWidth*0.9,height:mHeight*0.18,flexDirection:'column',alignSelf:'center',backgroundColor:'#ffffff',padding:12,marginTop:10,borderRadius:12
    },
    nameRow:{
        flex:3,justifyContent:'space-between',flexDirection:'row',
    },
    nameText:{
        alignSelf:'flex-end',fontSize:15
    },
    priceText:{
        fontSize:12,color:'rgb(166,211,255)',alignSelf:'flex-end'
    },
    timeRow:{
        flex:2,flexDirection:'row'
    },
    timeText:{
        fontSize:12,alignSelf:'center'
    },
    detailRow:{
        flex:5,
    },
    detailText:{
        fontSize:12,color:'rgb(154,154,154)',alignSelf:"flex-start"
    }
})
