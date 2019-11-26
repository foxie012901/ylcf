import { StyleSheet, Dimensions } from "react-native";
import { redBright } from "colorette";
const { height, width } = Dimensions.get('window');


export default StyleSheet.create({
    content: {
        flex: 1,
        width: "100%",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'lightblue',
        position: 'relative',

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewStyle: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'red',
        width: 100,
        height: 100,
        // borderWidth: 1
    },
    btnContainerStyle: {
        width: 100,
        height: 30,
        marginTop: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },



    oneLevelContent: {
        width: '100%',
        height: 33,
        justifyContent: 'center',
        backgroundColor: 'yellow'
    },
    oneLevelBtn: {
        width: 200,
        height: 30,
        backgroundColor: 'green'
    },
    oneLevelBox: {
        height: 200,
        backgroundColor: 'green',
        width: '100%',
        overflow: 'scroll',
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 999
    },
    oneLevelWall: {
        width: width,
        height: height,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    scrollViewBox: {
        width: '100%',
        zIndex: -2
    },
    scrollViewBoxContent: {
        width: '100%',
        backgroundColor: 'white'
    },
    scrollViewCONTENT: {
        width: '100%',
        backgroundColor: 'yellow'
    },
    oneLevelBoxContent: {
        width: '100%',
        position: 'absolute',
        top: 33,
        left: 0,
    },
    twolevelBoxContent: {
        width: width * .5,
        height: 200,
        backgroundColor: 'lightblue',
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 9999
    },
    oneBtnView: {
        height: 30,
        backgroundColor: 'white',
        marginTop: 1,
        marginBottom: 1,
    },
    twoBtnView: {
        height: 33,
        backgroundColor: 'white',
        marginTop: 1,
        marginBottom: 1
    },
    backgroundVideo:{
        backgroundColor:'red',
        width:width,
        height:216,
    },
    swiperImg:{
        width:'100%',
        height:216,
    },
    viewBox:{
        width:width,
        height:216,
        backgroundColor:'green'
    }
})
