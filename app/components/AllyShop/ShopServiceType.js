import React, { Component } from 'react'
import { connect } from "react-redux";

import { Text, StyleSheet, View,FlatList,Dimensions,Image,TouchableOpacity } from 'react-native'
const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;
 class ShopServiceType extends Component {
    constructor(props) {
        super(props);
        this.state = {
       
        };
      }
    componentWillReceiveProps(nProps){
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
            <>
                <FlatList
                    style={styles.ls}
                    data={this.props.shopServiceTypeList}
                    renderItem={this.renderItemShopServiceTop}
                    horizontal={true}
                    showsHorizontalScrollIndicator = {false}
                    keyExtractor={(item, index) => index.toString()}
                    removeClippedSubviews={true}
                />
            </>
        )
    }
    
}
const mapStateToProps = state => {
    return {
        shopServiceTypeList:(state.getIn(["allyshop","shopServiceTypeList"])).toJS(),//商家服务类别
        // loopList:(state.getIn(["allyshop","loopList"])).toJS(),//商家轮播
        // recommendList:(state.getIn(["allyshop","recommendList"])).toJS(),//推荐
        // isShow:state.getIn(["allyshop","isShow"]),
        // levelSelectDataList:(state.getIn(["allyshop","levelSelectDataList"])).toJS(),//下拉选列表
        // levelSelectDataLists:(state.getIn(['allyshop','levelSelectDataLists'])).toJS(),
        // openStatus:state.getIn(["levelselect","openStatus"]),//下拉选是否展开
        // shopResponse:(state.getIn(["allyshop","shopResponse"])).toJS(),//商店列表
        // isButtom:state.getIn(['allyshop',"isButtom"]),//下拉到底部
        // dataList:(state.getIn(['allyshop','dataList'])).toJS(),
        // page:state.getIn(['allyshop','page']),//合作商店页数
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // _postJson(init,page){
        //     let params ={pageno:page,pagesize:5}
        //     dispatch(actionCreators.postJson(init,params));
        // },
        // _toLevelSelectData(data){
        //     dispatch(levelSelectActionCreators.getData(data))
        // },
        // _contentViewScroll(isButtom){
        //     dispatch(actionCreators.changeIsButtom(isButtom))
        // }
          
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShopServiceType);
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
        resizeMode:'repeat',
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
