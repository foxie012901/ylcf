import React, { Component } from 'react'
import { Text, StyleSheet, View,FlatList,Dimensions,Image,TouchableOpacity } from 'react-native'
const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;
export default class ShopServiceType extends Component {
    constructor(props) {
        super(props);
        this.state = {
       
        };
        console.log(props)
      }
    componentWillReceiveProps(nProps){
        console.log(nProps)
    }
    renderItemShopServiceTop({item,index}) {
        if(item.istop==='0'){
        return (
            <TouchableOpacity style={styles.item} key={index} onPress={()=>{alert(JSON.stringify(item))}}>
            <Image style={styles.topimg} source={{uri: item.pic}}/>
            <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
        );
    }
    }

    render() {
        return (
            <View>
                <FlatList
                    style={styles.ls}
                    data={this.props.data}
                    renderItem={this.renderItemShopServiceTop}
                    horizontal={true}
                    showsHorizontalScrollIndicator = {false}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ls:{
        borderBottomWidth:1,
        borderBottomColor:'#707070',
        flexDirection:'row',
        width:mWidth,
        height:mHeight*0.15,
        alignContent:'center'
    },
    topimg: {
        width: 60,
        height: 40,
        resizeMode:'stretch',
        alignSelf:'center'
    }, title: {
        fontSize: 12,
        marginTop:15,
        alignSelf:'center'
    },
    item: {
        backgroundColor: '#F5FCFF',
        padding: 10,
        fontSize: 12,
        width:mWidth*0.25,
        height:mHeight*0.15,
        flexDirection: 'column',
        alignSelf:'center',
        justifyContent: 'center',

    },
})
