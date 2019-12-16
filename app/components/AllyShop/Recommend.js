import React, { Component } from 'react'
import { Text, StyleSheet, View,FlatList,Dimensions,Image,TouchableOpacity } from 'react-native'
const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;
export default class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {
       
        };
        console.log(props)
      }
    componentWillReceiveProps(nProps){
        console.log(nProps)
    }
    renderRecommendList({item,index}) {
       
        return (
            <View style={styles.item}>
            <Image style={styles.topimg} source={{uri: item.pic}}/>
            <Text style={styles.title}>{item.itemtitle}</Text>
            <Text style={styles.explainText} numberOfLines={1}>{item.itemdesc}</Text>
        </View>
        );
    
    }

    render() {
        return (
            <View>
                <FlatList
                    style={styles.ls}
                    data={this.props.data}
                    renderItem={this.renderRecommendList}
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
        height:mHeight*0.25,
        alignContent:'center'
    },
    topimg: {
        width:mWidth*0.3,
        height:mHeight*0.1,
        resizeMode:'stretch',
        alignSelf:'center'
    }, title: {
        fontSize: 12,
        marginTop:15,
        alignSelf:'flex-start'
    },explainText:{
        fontSize:10,
        color:'rgb(88,88,88)',
        marginTop:10,
    },
    item: {
        backgroundColor: '#F5FCFF',
        padding: 10,
        fontSize: 12,
        width:mWidth*0.35,
        height:mHeight*0.25,
        flexDirection: 'column',
        alignSelf:'center',
        justifyContent: 'center',
    },
})
