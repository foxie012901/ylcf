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
        // backgroundColor: 'lightblue'

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
})
