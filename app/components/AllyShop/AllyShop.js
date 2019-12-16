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
import ShopServiceType from './ShopServiceType';
import Recommend from './Recommend';
//登录相关
import DeviceStorageUtil from '../../util/DeviceStorageUtil';
//react-redux
import { connect } from "react-redux";
import Carousel from 'react-native-looped-carousel'
//路由
import { Actions } from "react-native-router-flux";
import {actionCreators, allyshop} from './store'
import LevelSelect from '../LevelSelect/LevelSelect'
import TopMenu from './TopMenu';
const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;
class AllyShop extends Component {
    constructor(props) {
        super(props);
        this.myRef=React.createRef();
        this.state = {      
        };
    }
    componentWillMount() {
        this.props._postJson()
    }
    onSelectMenu=(index, subindex, data)=>{
        this.setState({index, subindex, data});
    };
    render() {
        console.log(12313213123213123);
        let page = ( 
            <View>
                <View style={{width:mWidth,height:mHeight*0.08,backgroundColor:"#cccccc"}}>
                    <Text style={{lineHeight:mHeight*0.08,textAlign:'center',fontSize:15}}>服务商家</Text>
                </View>
                <ScrollView  ref={(e)=>this.myRef=e} stickyHeaderIndices={[5]}  >
                    <ShopServiceType data={this.props.shopServiceTypeList}/>
                    <View style={{width:mWidth,height:mHeight*0.05,backgroundColor:'#ffffff',borderBottomWidth:1,borderColor:'#cccc'}}></View>
                    <Carousel  style={{width: mWidth, height:mHeight*0.15}}
                        bullets={true}
                        delay={6000}>
                     {this.props.loopList.length>0?this.props.loopList.map((item,index)=>{
                         return<TouchableOpacity onPress={()=>{alert(JSON.stringify(item))}} key={index}>
                                <Image  style={{width:mWidth,height:mHeight*0.15,resizeMode:'stretch'}} source={{uri:item.pic}}/>
                              </TouchableOpacity>
                     })
                    :(<View><Image style={{width:mWidth,height:mHeight*0.2,resizeMode:'stretch'}} source={require('../../images/unphoto.png')}/></View>)}
                    </Carousel>
                    <View style={{width:mWidth,height:mHeight*0.07,backgroundColor:'#ffffff',borderBottomColor:'#cccc',borderBottomWidth:1}}>
                        <Text style={{fontSize:18,paddingLeft:10,lineHeight:mHeight*0.07}}>推荐</Text>
                    </View>
                    <Recommend data={this.props.recommendList}/>
                    <View style={{zIndex:999,height:mHeight*0.36}}>
                   {<LevelSelect click={(e)=>{this.myRef.scrollTo({x:mHeight,y:mHeight,animated:true})}} levelSelectData={this.props.levelSelectDataLists}/>}
                    </View>
                    <View style={{width:mWidth,height:mHeight*0.3,backgroundColor:'red',marginBottom:20,position:'relative',top:-mHeight*0.25}}></View>
                    <View style={{width:mWidth,height:mHeight*0.3,backgroundColor:'red',marginBottom:20}}></View>
                   
                    <View style={{width:mWidth,height:mHeight*0.3,backgroundColor:'red',marginBottom:20}}></View>
                    <View style={{width:mWidth,height:mHeight*0.3,backgroundColor:'red',marginBottom:20 }} ></View>


                    
                </ScrollView>
            </View>
           )     
           let Loading =(<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ActivityIndicator animating={!this.props.isShow} />
  </View>);  
        return (
           this.props.isShow?page:Loading
        );
    }
}
const mapStateToProps = state => {
    return {
        shopServiceTypeList:(state.getIn(["allyshop","shopServiceTypeList"])).toJS(),//商家服务类别
        loopList:(state.getIn(["allyshop","loopList"])).toJS(),//商家轮播
        recommendList:(state.getIn(["allyshop","recommendList"])).toJS(),//推荐
        isShow:state.getIn(["allyshop","isShow"]),
        levelSelectDataList:(state.getIn(["allyshop","levelSelectDataList"])).toJS(),//下拉选列表
        levelSelectDataLists:(state.getIn(['allyshop','levelSelectDataLists'])).toJS()

    }
}
const mapDispatchToProps = dispatch => {
    return {
        _postJson(){
            let params ={pageno:1,pagesize:5}
            dispatch(actionCreators.postJson(params));
        }  
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AllyShop);