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
import {actionCreators as levelSelectActionCreators} from '../LevelSelect/store'
import LevelSelect from '../LevelSelect/LevelSelect'
import AllyShopList from'../AllyShopList/AllyShopList';
import {actionCreators as allyShopListActionCreators} from "../AllyShopList/store"
const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;
class AllyShop extends Component {
    constructor(props) {
        super(props);
        this.myRef=React.createRef();
        this.state = {      
        };
        console.log(this.props)
    }
    componentWillMount() {
       
        this.props._postJson(1,this.props.page);
    }
    onSelectMenu=(index, subindex, data)=>{
        this.setState({index, subindex, data});
    };
    componentDidMount(){
    }
     // 监听上拉触底
     _onScroll =(e) => {
        let offsetY = e.nativeEvent.contentOffset.y; //滑动距离
        let contentSizeHeight = e.nativeEvent.contentSize.height; //scrollView contentSize高度
        let oriageScrollHeight = e.nativeEvent.layoutMeasurement.height; //scrollView高度
        if(offsetY+oriageScrollHeight>=contentSizeHeight-10){
            this.props._contentViewScroll(this.props.isButtom)
            this.props._postJson(0,this.props.page);
        }
        
      }
    render() {
        console.log(this.props.dataList);
  
        let page = ( 
            <View style={{flex:1}}>
                <View style={{width:mWidth,height:mHeight*0.08,backgroundColor:"#cccccc"}}>
                    <Text style={{lineHeight:mHeight*0.08,textAlign:'center',fontSize:15}}>服务商家</Text>
                </View>
                <ScrollView style={{flex:1}}  ref={(e)=>this.myRef=e} stickyHeaderIndices={[5]} scrollEnabled={!this.props.openStatus} onMomentumScrollEnd={(e)=>{this._onScroll(e)}}>
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
                    <View style={{zIndex:999}}>
                   <LevelSelect click={(e)=>{this.myRef.scrollTo({x:mHeight,y:mHeight,animated:true})}} levelSelectData={this.props.levelSelectDataLists}/>
                    </View>
                   <AllyShopList shopResponse={this.props.shopResponse}/>  
                   {this.props.isButtom?<View style={{width:mWidth,height:mHeight*0.05,flexDirection:'column',}}>
                        <Text style={{fontSize:16,alignSelf:'center'}}>加载中...</Text>
                        <ActivityIndicator style={{alignSelf:'center'}} animating={true} color='red'/>
                    </View>:null} 
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
        levelSelectDataLists:(state.getIn(['allyshop','levelSelectDataLists'])).toJS(),
        openStatus:state.getIn(["levelselect","openStatus"]),//下拉选是否展开
        shopResponse:(state.getIn(["allyshop","shopResponse"])).toJS(),//商店列表
        isButtom:state.getIn(['allyshop',"isButtom"]),//下拉到底部
        dataList:(state.getIn(['allyshop','dataList'])).toJS(),
        page:state.getIn(['allyshop','page']),//合作商店页数
    }
}
const mapDispatchToProps = dispatch => {
    return {
        _postJson(init,page){
            let params ={pageno:page,pagesize:5}
            dispatch(actionCreators.postJson(init,params));
        },
        _toLevelSelectData(data){
            dispatch(levelSelectActionCreators.getData(data))
        },
        _contentViewScroll(isButtom){
            dispatch(actionCreators.changeIsButtom(isButtom))
        }
          
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AllyShop);