/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Animated,
    ScrollView,
    Dimensions,
    PixelRatio,
    Text,
    TouchableWithoutFeedback,
    TouchableHighlight,
    View, FlatList, Image, TouchableOpacity, DeviceEventEmitter,
} from 'react-native';

import {
    Surface, //  一个矩形可渲染的区域，是其他元素的容器
    Shape, // 形状定义，可填充
    Path, // 路径
    Group, // 可容纳多个形状、文本和其他的分组
    LinearGradient, // 渐变色
    Pattern, // 填充图片
    ClippingRectangle, // 剪辑
  } from '@react-native-community/art'

const {width, height} = Dimensions.get('window');

const T_WIDTH = 7;
const T_HEIGHT = 4;

const COLOR_HIGH = '#00bea9';
const COLOR_NORMAL = '#6c6c6c';

const LINE = 1 / PixelRatio.get();

class Triangle extends React.Component {

    render() {

        var path;
        var fill;
        if (this.props.selected) {
            fill = COLOR_HIGH;
            path = new Path()
                .moveTo(T_WIDTH / 2, 0)
                .lineTo(0, T_HEIGHT)
                .lineTo(T_WIDTH, T_HEIGHT)
                .close();
        } else {
            fill = COLOR_NORMAL;
            path = new Path()
                .moveTo(0, 0)
                .lineTo(T_WIDTH, 0)
                .lineTo(T_WIDTH / 2, T_HEIGHT)
                .close();
        }

        return (
            <Surface width={T_WIDTH} height={T_HEIGHT}>
                <Shape d={path} stroke="#00000000" fill={fill} strokeWidth={0}/>
            </Surface>
        )
    }
}
const TopMenuItem = (props) => {
    console.log("初始化+++++++"+JSON.stringify(props));
    const onPress = () => {
        props.onSelect(props.index);
    }
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.item}>
                <Text style={props.selected ? styles.menuTextHigh : styles.menuText}>{props.label}</Text>
                <Triangle selected={props.selected}/>
            </View>
        </TouchableWithoutFeedback>
    );
};

const Subtitle = (props) => {
    let textStyle = props.selected ?
        [styles.tableItemText, styles.highlight, styles.marginHigh] :
        [styles.tableItemText, styles.margin];

    let rightTextStyle = props.selected ? [styles.tableItemText, styles.highlight] : styles.tableItemText;

    let onPress = () => {
        props.onSelectMenu(props.index, props.subindex, props.data);
    }

    return (
        <TouchableHighlight onPress={onPress} underlayColor="#f5f5f5">
            <View style={styles.tableItem}>
                <View style={styles.row}>
                    {props.selected && <Check />}
                    <Text style={textStyle}>{props.data.name}</Text>
                </View>
                <Text style={rightTextStyle}>{props.data.subtitle}</Text>
            </View>
        </TouchableHighlight>
    );
};
const Title = (props) => {
    let textStyle = props.selected ?
        [styles.tableItemText, styles.highlight, styles.marginHigh] :
        [styles.tableItemText, styles.margin];

    let rightTextStyle = props.selected ? [styles.tableItemText, styles.highlight] : styles.tableItemText;


    let onPress = () => {
        props.onSelectMenu(props.index, props.subindex, props.data);
    }

    return (
        <TouchableHighlight onPress={onPress} underlayColor="#f5f5f5">
            <View style={styles.titleItem}>
                {props.selected && <Check />}
                <Text style={textStyle}>{props.data.name}</Text>
            </View>
        </TouchableHighlight>
    );
};
const lable =(props) =>{
    let textStyle = props.selected ?
        [styles.tableItemText, styles.highlight, styles.marginHigh] :
        [styles.tableItemText, styles.margin];

    let rightTextStyle = props.selected ? [styles.tableItemText, styles.highlight] : styles.tableItemText;


    let onPress = () => {
        props.onSelectMenu(props.index, props.subindex, props.data);
    }

    return (
        <TouchableHighlight onPress={onPress} underlayColor="#f5f5f5">
            <View style={styles.titleItem}>
                {props.selected && <Check />}
                <Text style={textStyle}>{props.data.text}</Text>
            </View>
        </TouchableHighlight>)
}

const ttt =(props) =>{
    let textStyle = props.selected ?
        [styles.tableItemText, styles.highlight, styles.marginHigh] :
        [styles.tableItemText, styles.margin];

    let rightTextStyle = props.selected ? [styles.tableItemText, styles.highlight] : styles.tableItemText;


    let onPress = () => {
        props.onSelectMenu(props.index, props.subindex, props.data);
    }

    return (
        <TouchableHighlight onPress={onPress} underlayColor="#f5f5f5">
            <View style={styles.titleItem}>
                {props.selected && <Check />}
                <Text style={textStyle}>{props.data.name}</Text>
            </View>
        </TouchableHighlight>)
}

const Check = () => {
    return (
        <Surface
            width={18}
            height={12}
        >
            <Group scale={0.03}>
                <Shape
                    fill={COLOR_HIGH}
                    d={`M494,52c-13-13-33-13-46,0L176,324L62,211c-13-13-33-13-46,0s-13,33,0,46l137,136c6,6,15,10,23,10s17-4,23-10L494,99
      C507,86,507,65,494,52z`}
                />
            </Group>
        </Surface>
    );
}
export default class TopMenu extends Component {

    constructor(props) {
        super(props);
        this.setShowFalse=this.setShowFalse.bind(this);
        let array = props.config;
        let top = [];
        let maxHeight = [];
        let subselected = [];
        let height = [];
        //最大高度
        var max = parseInt((height - 80) * 0.8 / 43);


        for (let i = 0, c = array.length; i < c; ++i) {
            let item = array[i];
            top[i] = item.data[item.selectedIndex].name;
            maxHeight[i] = Math.min(item.data.length, max) * 43;
            subselected[i] = item.selectedIndex;
            height[i] = new Animated.Value(0);
        }


        //分析数据
        this.state = {
            isShow:false,
            top: top,
            maxHeight: maxHeight,
            subselected: subselected,
            height: height,
            fadeInOpacity: new Animated.Value(0),
            selectedIndex: null,
            childResponse:[]
        };

    } componentWillReceiveProps(props) {
        console.log("TopMenu===="+JSON.stringify(props))
        let array = props.config;
        let top = [];
        let maxHeight = [];
        let subselected = [];
        let height = [];
        //最大高度
        var max = parseInt((height - 80) * 0.8 / 43);
        console.log("top======="+JSON.stringify(top))

        for (let i = 0, c = array.length; i < c; ++i) {
            let item = array[i];
            if (item.type=='lab'){
                top[i] = item.data[item.selectedIndex].text;
            }else {
                top[i] = item.data[item.selectedIndex].name;}
            maxHeight[i] = Math.min(item.data.length, max) * 43;
            subselected[i] = item.selectedIndex;
            height[i] = new Animated.Value(0);
        }
        this.setState(   {
            isShow:false,
            top: top,
            maxHeight: maxHeight,
            subselected: subselected,
            height: height,
            fadeInOpacity: new Animated.Value(0),
            selectedIndex: null,
            childResponse:[]
        })


    }
    setShowFalse(item)  {
        this.setState({isShow:false});
        this.onSelect(this.state.selectedIndex);
        DeviceEventEmitter.emit('select',item);

    }
    renderRecommendList({item}) {
        // { item }是一种“解构”写法，请阅读ES2015语法的相关文档
        // item也是FlatList中固定的参数名，请阅读FlatList的相关文档
        return (
            <View style={styles.item}>
                <Text onPress={() =>this.setShowFalse(item)} style={styles.title}>{item.typename}</Text>
            </View>

        );

    }

    componentDidMount() {

    }

    createAnimation = (index, height) => {
        return Animated.timing(
            this.state.height[index],
            {
                toValue: height,
                duration: 250
            }
        );
    }

    createFade = (value) => {
        return Animated.timing(
            this.state.fadeInOpacity,
            {
                toValue: value,
                duration: 250,
            }
        );
    }


    onSelect = (index) => {
        if (index === this.state.selectedIndex) {
            DeviceEventEmitter.emit('scoll',true);

            //消失
            this.hide(index);
            this.setState({childResponse:[]})
        } else {
            DeviceEventEmitter.emit('scoll',false);
            this.setState({selectedIndex: index, current: index,childResponse:[]});
            this.onShow(index);
        }
    }

    hide = (index, subselected) => {
        console.log("index="+index+"sub="+subselected)
        let opts = {selectedIndex: null, current: index};
        if (subselected !== undefined) {
            this.state.subselected[index] = subselected;
            this.state.top[index] = this.props.config[index].data[subselected].name;
            opts = {selectedIndex: null, current: index, subselected: this.state.subselected.concat()};

        }
        /*  if (subselected !== undefined) {
              this.state.subselected[index] = subselected;
              this.state.top[index] = this.props.config[index].data[subselected].name;
              opts = {selectedIndex: null, current: index, subselected: subselected};

          }*/
        this.setState(opts);
        this.onHide(index);

    }


    onShow = (index) => {
        this.setState({isShow:true})
        Animated.parallel([this.createAnimation(index, this.state.maxHeight[index]), this.createFade(1)]).start();
    }

    onHide = (index) => {
        this.setState({isShow:false})
        //其他的设置为0
        for (let i = 0, c = this.state.height.length; i < c; ++i) {
            if (index != i) {
                this.state.height[i].setValue(0);
            }
        }

        Animated.parallel([this.createAnimation(index, 0), this.createFade(0)]).start();

    }

    onSelectMenu = (index, subindex, data) => {
        this.setState({
            childResponse:data.shopType3Response
        })
        console.log("选择标签"+JSON.stringify(data))

        if (data.shopType3Response==null||data.shopType3Response==""){

            if (subindex !== undefined) {
                if ((data.name==undefined||data.name==null)&&data.text!=""){
                    this.state.subselected[index] = subindex;
                    this.state.top[index] = this.props.config[index].data[subindex].text;
                    let opts = {selectedIndex: index, current: index, subselected: this.state.subselected.concat()};
                    this.setState(opts);
                }else {
                    this.state.subselected[index] = subindex;
                    this.state.top[index] = this.props.config[index].data[subindex].name;
                    let opts = {selectedIndex: index, current: index, subselected: this.state.subselected.concat()};
                    this.setState(opts);
                }
            }
            this.onSelect(index)
            DeviceEventEmitter.emit('scoll',true);
            DeviceEventEmitter.emit('select',data);

        }else {
            if (subindex !== undefined) {
                this.state.subselected[index] = subindex;
                this.state.top[index] = this.props.config[index].data[subindex].name;
                let opts = {selectedIndex: index, current: index, subselected: this.state.subselected.concat()};
                this.setState(opts);
            }

        }

    }
    onSelectItem = (index, subindex, data) => {
        this.hide(index, subindex);
        this.props.onSelectMenu && this.props.onSelectMenu(index, subindex, data);
    }


    renderList = (d, index) => {
        let subselected = this.state.subselected[index];
        let Comp = null;
        if (d.type == 'title') {
            Comp = Title;
        }else if (d.type=='ttt'){
            Comp=ttt;
        }else if (d.type=="lab"){
            Comp = lable;
        }

        let enabled = this.state.selectedIndex == index || this.state.current == index;


        return (
            <Animated.View key={index} pointerEvents={enabled ? 'auto' : 'none'}
                           style={[styles.content, {opacity: enabled ? 1 : 0, height: this.state.height[index]}]}>

                <ScrollView style={styles.scroll} bounces={true}>
                    {d.data.map((data, subindex) => {
                        return <Comp
                            onSelectMenu={this.onSelectMenu}
                            index={index}
                            subindex={subindex}
                            data={data}
                            selected={subselected == subindex}
                            key={subindex}/>
                    })}
                </ScrollView>

                <FlatList style={styles.scroll} data={this.state.childResponse} renderItem={this.renderRecommendList.bind(this)}

                />




            </Animated.View>
        );
    }

    render() {
        let list = null;
        if (this.state.selectedIndex !== null) {
            list = this.props.config[this.state.selectedIndex].data;
        }
        console.log(list);
        return (
            <View style={{flex: 1}}>
                <View style={styles.topMenu}>
                    {this.state.top.map((t, index) => {
                        return <TopMenuItem
                            key={index}
                            index={index}
                            onSelect={this.onSelect}
                            label={t}
                            selected={this.state.selectedIndex === index}/>
                    })}
                </View>
               {/* {this.props.renderContent()}*/}
                <View style={styles.bgContainer} pointerEvents={this.state.selectedIndex !== null ? "auto" : "none"}>
                    <Animated.View style={[styles.bg, {opacity: this.state.fadeInOpacity}]}/>
                    {this.state.isShow?
                        this.props.config.map((d, index) => {
                            return this.renderList(d, index);
                        }):<View></View>}

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    scroll: { backgroundColor: '#fff',width:150,height:100},
    bgContainer: {position: 'absolute', top: 40, width: width, height: height},
    bg: {flex: 1, backgroundColor: 'rgba(50,50,50,0.2)' },
    content: {
        position: 'absolute',
        width: width,
        flexDirection: 'row'
    },

    highlight: {
        color: COLOR_HIGH
    },

    marginHigh: {marginLeft: 10},
    margin: {marginLeft: 28},

    titleItem: {
        width:200,
        height: 43,
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: LINE,
        borderBottomColor: '#eee',
        flexDirection: 'row',
    },

    tableItem: {
        height: 43,
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: LINE,
        borderBottomColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tableItemText: {fontWeight: '300', fontSize: 14},
    row: {
        flexDirection: 'row'
    },

    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuTextHigh: {
        marginRight: 3,
        fontSize: 13,
        color: COLOR_HIGH
    },
    menuText: {
        marginRight: 3,
        fontSize: 13,
        color: COLOR_NORMAL
    },
    topMenu: {
        flexDirection: 'row',
        height: 40,
        borderTopWidth: LINE,
        borderTopColor: '#bdbdbd',
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2'
    },

});
