import { StyleSheet, Dimensions } from "react-native";
import { redBright } from "colorette";
const { height, width } = Dimensions.get('window');


export default StyleSheet.create({
    content: {
        flex: 1,
        width: "100%",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        // backgroundColor: 'lightblue'

    },
    znxxText: {
        fontSize: 12,
        color: 'rgb(101,101,101)',
        marginLeft: 5
    },

})

// // 活动3个样式
// ActiveStyleB3: {
//     height: 180,
//     width: '100%',
//     flexDirection: 'row'
// },
// ActiveStyleB3LeftImg: {
//     width: '100%',
//     height: 180
// },
// ActiveStyleB3RightImg: {
//     width: '100%',
//     height: 90
// },
// ActiveStyleB3ImgConLeft: {
//     flex: 5,
//     height: 180,

//     borderRightWidth: 1,
//     borderRightColor: '#fff'
// },
// ActiveStyleB3ImgConRight: {
//     flex: 5,
//     height: 180,
// },
// ActiveStyleB3ImgConRightTop: {
//     flex: 5,
//     height: 90,
//     borderBottomWidth: 1,
//     borderBottomColor: '#fff'
// },
// ActiveStyleB3ImgConRightBottom: {
//     flex: 5,
//     height: 90
// },
// // 活动4个样式
// ActiveStyleB4: {
//     height: 180,
//     width: '100%',
//     flexDirection: 'row'
// },
// ActiveStyleB4LeftImg: {
//     width: '100%',
//     height: 180
// },
// ActiveStyleB4RightImg: {
//     width: '100%',
//     height: 90
// },
// ActiveStyleB4ImgConLeft: {
//     flex: 5,
//     height: 180,

//     borderRightWidth: 1,
//     borderRightColor: '#fff'
// },
// ActiveStyleB4ImgConRight: {
//     flex: 5,
//     height: 180,
// },
// ActiveStyleB4ImgConRightTop: {
//     flex: 5,
//     height: 90,
//     borderBottomWidth: 1,
//     borderBottomColor: '#fff'
// },
// ActiveStyleB4ImgConRightBottom: {
//     flex: 5,
//     height: 90,
//     flexDirection:'row'
// },
// ActiveStyleB4ImgConRightBottomLeft: {
//     flex:5,
//     height:90,
//     borderRightWidth:1,
//     borderRightColor:'#fff'
// },
// ActiveStyleB4ImgConRightBottomRight: {
//     flex:5,
//     height:90
// }