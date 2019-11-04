import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');


export default StyleSheet.create({
    content: {
        flex: 1,
        width: "100%",
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: 'rgb(246,246,246)'

    },
    formBox: {
        width: '100%',
        // backgroundColor:'lightblue',
        paddingTop: 10
    },
    textInputBox: {
        width: '100%',
        height: 44,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10,
        position: 'relative'
    },
    inputText: {
        width: "100%",
        height: 44,
        backgroundColor: "#fff",
        fontSize: 15,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: 'rgb(229,229,229)',
        paddingLeft: 15,
        paddingRight: 15,
    },
    textForgetSN: {
        height: 44,
        width: 70,
        position: 'absolute',
        zIndex: 99,
        top: 0,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textForgetSNText: {
        color: 'rgb(67,165,255)',
        fontSize: 15,
    },
    btnDetermineBox: {
        width: '100%',
        height: 44,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 40
    },
    btnDetermine: {
        width: '100%',
        height: 44,
        backgroundColor: 'rgb(67,165,255)',
        justifyContent: "center",
        alignItems: 'center'
    },
    btnDetermineText: {
        fontSize: 16,
        color: '#fff'
    },
    otherBtnBox: {
        width: '100%',
        height: 20,
        marginTop: 15,
        paddingLeft: 10,
        paddingRight: 10,
        // backgroundColor: 'green',
        position: 'relative'
    },
    otherBtnLeft: {
        width: 80,
        height: 20,
        position: "absolute",
        left: 15
    },
    otherBtnLeftText: {
        fontSize: 13,
        color: "rgb(6,123,237)"
    },
    otherBtnRight: {
        width: 60,
        height: 20,
        position: 'absolute',
        right: 15
    },
    otherBtnRightText: {
        fontSize: 13,
        color: "rgb(50,50,50)"
    }
})