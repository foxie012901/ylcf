import { StyleSheet, Dimensions } from "react-native";
import { redBright } from "colorette";
const { height, width } = Dimensions.get('window');


export default StyleSheet.create({
    content: {
        flex: 1,
        width: "100%",
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: 'white'

    },
    conART: {
        // backgroundColor: 'yellow'
    },
    topBox: {
        position: 'relative',
        alignItems: 'center',
        zIndex: 9999
    },
    titleTopMiddle: {
        position: 'absolute',
        // backgroundColor:'lightblue',
        top: 31,
    },
    titleTopMiddleText: {
        fontSize: 16,
        color: '#fff',
    },
    titleTopRight: {
        position: 'absolute',
        top: 34,
        right: 17,
        height: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleTopRightText: {
        fontSize: 10,
        color: '#fff',
        marginLeft: 3
    },
    boxTopMiddle: {
        width: width - 32,
        // width: width - (width * 0.05),
        height: 107,
        backgroundColor: '#fff',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: .1,
        shadowRadius: 3,
        elevation: 5,

        position: 'absolute',
        top: 64,


    },
    boxTopMiddleUpNoLogin: {
        flex: 6,
        width: '100%',
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    boxTopMiddleUpNoLoginText: {
        fontSize: 22,
        fontWeight: '600',
        color: "rgb(74,74,74)",
        marginLeft: 7
    },
    boxTopMiddleUpNoLoginBox: {
        width: 20,
        height: 20,
        backgroundColor: 'rgb(204,204,204 )',
        borderRadius: 100
    },

    boxTopMiddleDownNoLogin: {
        flex: 5,
        // backgroundColor: 'blue',
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        left: 0
    },
    boxTopMiddleDownNoLoginADD: {
        flex: .5
    },
    boxTopMiddleDownNoLoginContent: {
        paddingLeft: 22,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxTopMiddleDownNoLoginContentLeft: {
        width: '100%',
        flex: 2.5,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: 'rgb(248,248,248)',
        paddingTop: 5,
    },
    boxTopMiddleDownNoLoginContentMiddle: {
        width: '100%',
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: 'rgb(248,248,248)',
        paddingTop: 5
    },
    boxTopMiddleDownNoLoginContentRight: {
        width: '100%',
        flex: 3.5,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: 'rgb(248,248,248)',
        paddingTop: 5,
    },
    boxTopMiddleDownNoLoginDian: {
        width: 4,
        height: 4,
        backgroundColor: 'rgb(216,216,216)',
        borderRadius: 100,
        marginRight: 4,
    },
    boxTopMiddleDownNoLoginText: {
        fontSize: 14,
        color: "rgb(204,204,204)"
    },






    boxTopMiddleUp: {
        flex: 5,
        width: '100%',
        // backgroundColor: 'yellow',
        padding: 12,
        flexDirection: 'row'
    },
    boxTopMiddleUpLogo: {
        flex: 2,
        // backgroundColor:'#f00'
    },
    boxTopMiddleUpTxt: {
        flex: 5,
        // backgroundColor:"#0f0",

        justifyContent: 'center',
        paddingLeft: 10
    },
    boxTopMiddleUpTxtText: {
        fontSize: 22,
        color: 'rgb(91,91,91)',
        fontWeight: '600'
    },
    boxTopMiddleUpBtn: {
        flex: 3,
        // backgroundColor:'#00f',

        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    boxTopMiddleUpBtnBotton: {
        width: 66,
        backgroundColor: 'rgb(227,241,255)',
        borderRadius: 80,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxTopMiddleUpBtnBottonText: {
        fontSize: 14,
        color: "rgb(6,123,237)"
    },
    boxLogo: {
        width: 46,
        height: 46,
    },
    boxTopMiddleDown: {
        flex: 5,
        // backgroundColor: 'blue',
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        left: 0
    },
    boxTopMiddleDownADD: {
        flex: .5
    },
    boxTopMiddleDownContent: {
        paddingLeft: 22,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxTopMiddleDownContentLeft: {
        width: '100%',
        flex: 2.5,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: 'rgb(248,248,248)',
        paddingTop: 5,
    },
    boxTopMiddleDownContentMiddle: {
        width: '100%',
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: 'rgb(248,248,248)',
        paddingTop: 5
    },
    boxTopMiddleDownContentRight: {
        width: '100%',
        flex: 3.5,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: 'rgb(248,248,248)',
        paddingTop: 5,
    },
    boxTopMiddleDownDian: {
        width: 4,
        height: 4,
        backgroundColor: 'rgb(216,216,216)',
        borderRadius: 100,
        marginRight: 4,
    },
    boxTopMiddleDownText: {
        fontSize: 14,
        color: "rgb(204,204,204)"
    },
    znxxContent: {
        // marginTop: 71,
        height: 17,
        width: '100%',
        flexDirection: 'row',
        paddingLeft: 19,
        alignItems: 'center'
    },
    znxxText: {
        fontSize: 12,
        color: 'rgb(101,101,101)',
        marginLeft: 5
    },
    HomeIconBtnContent: {
        width: '100%',
        height: 190,
        // backgroundColor:'lightblue',
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap'

    },
    HomeIconBtnButton: {
        width: '25%',
        height: 83,
        // backgroundColor:'blue',
        marginTop: 11,
        justifyContent: 'center',
        alignItems: 'center'
    },
    HomeIconBtnButtonContent: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'yellow'
    },
    HomeIconBtnImg: {
        width: 36,
        height: 36,
    },
    HomeIconBtnText: {
        fontSize: 12,
        color: "rgb(74,74,74)",
        paddingTop: 8
    },
    HomeBanner: {
        // overflow:'scroll',
        width: '100%',
        height: 90,
        marginTop: 23,
        paddingLeft: 16,
        paddingRight: 16,
    },
    HomeBannerContent: {
        width: '100%',
        height: 90,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },
    HomeBannerBg: {
        width: '100%',
        height: 90,
        // borderTopLeftRadius: 8,
        // borderTopRightRadius: 8,
        // borderBottomLeftRadius: 8,
        // borderBottomRightRadius: 8
    },
    HomeWZJF: {
        // backgroundColor: 'lightblue',
        height: 220,
        marginTop: 19,
        flex: 1,
        flexDirection: 'column',
    },
    HomeWZJFTitle: {
        width: '100%',
        flex: 2,
        // backgroundColor: 'red',
        flexDirection: 'row'
    },
    HomeWZJFTitleLeft: {
        flex: 0.5,
        // backgroundColor: 'red',
        alignItems: 'flex-end',
        justifyContent: 'center'

    },
    HomeWZJFTitleLeftGray: {
        width: 4,
        height: 18,
        backgroundColor: 'rgb(101,101,101)',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },
    HomeWZJFTitleMiddle: {
        flex: 6,
        // backgroundColor: 'yellow',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 8,
    },
    HomeWZJFTitleMiddleText: {
        fontSize: 15,
        color: 'rgb(154,154,154)',
        fontWeight: '500',
    },
    HomeWZJFTitleRight: {
        flex: 3.5,
        // backgroundColor: 'blue',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 16,
    },
    HomeWZJFTitleRightText: {
        fontSize: 12,
        color: 'rgb(0,96,190)',
        fontWeight: '500',
    },
    HomeWZJFBodyText: {
    },

    HomeWZJFBody: {
        flex: 8,
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    HomeWZJFIconBtn: {
        // flex:6,
        // backgroundColor:'red',
        alignItems: 'center',
        width: '33.33%',
        paddingTop: 13,
    },
    HomeWZJFIconBtnContent: {
        alignItems: 'center'
    },
    HomeWZJFIconBtnImg: {
        width: 69,
        height: 51,
    },
    HomeWZJFIconBtnText: {
        marginTop: 4,
        fontSize: 12,
        color: 'rgb(74,74,74)'

    },
    ActiveStyleContent: {
        width: '100%',
        backgroundColor: 'red',
        // height: 250,
        backgroundColor: 'white',
        marginBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ActiveStyleContentTop: {
        flex: 1.5,
        marginBottom: 6,
        marginTop: 6,
        paddingBottom: 3,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 3,
        borderBottomColor: '#cccccc'
    },
    ActiveStyleContentTopText: {
        fontSize: 15,
        fontWeight: '500',
        color: 'rgb(74,74,74)',
    },
    ActiveStyleContentMiddle: {
        flex: 7,
        width: '100%',
        // backgroundColor: 'yellow'
    },
    ActiveStyleContentBottom: {
        flex: 1.5,
        paddingBottom: 6,
        paddingTop: 6,
        // backgroundColor:'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ActiveStyleContentBottomText: {
        fontSize: 12,
        color: '#ccc',
    },
    ActiveStyleContainer: {
        backgroundColor: '#f1f1f1',
    },
    //活动1样式
    ActiveStyleB1: {
        width: '100%',
        height: 90
    },
    ActiveStyleB1Img: {
        width: '100%',
        height: 90,
    },
    //活动2样式
    ActiveStyleB2: {
        height: 90,
        width: '100%',
        flexDirection: 'row'
    },
    ActiveStyleB2Img: {
        width: '100%',
        height: 90
    },
    ActiveStyleB2ImgConLeft: {
        flex: 5,
        height: 90,

        borderRightWidth: 1,
        borderRightColor: '#fff'
    },
    ActiveStyleB2ImgConRight: {
        flex: 5,
        height: 90,
    },


    ActiveStyleB4: {
        height: 180,
        width: '100%',
        flexDirection: 'row'
    },
    ActiveStyleB4LeftImg: {
        width: '100%',
        height: 180
    },
    ActiveStyleB4RightImg: {
        width: '100%',
        height: 90
    },
    ActiveStyleB4ImgConLeft: {
        flex: 5,
        height: 180,

        borderRightWidth: 1,
        borderRightColor: '#fff'
    },
    ActiveStyleB4ImgConRight: {
        flex: 5,
        height: 180,
    },
    ActiveStyleB4ImgConRightTop: {
        flex: 5,
        height: 90,
        borderBottomWidth: 1,
        borderBottomColor: '#fff'
    },
    ActiveStyleB4ImgConRightBottom: {
        flex: 5,
        height: 90,
        flexDirection: 'row'
    },
    ActiveStyleB4ImgConRightBottomLeft: {
        flex: 5,
        height: 90,
        borderRightWidth: 1,
        borderRightColor: '#fff'
    },
    ActiveStyleB4ImgConRightBottomRight: {
        flex: 5,
        height: 90
    }

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