import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');


export default StyleSheet.create({
    content: {
        flex: 1,
        width: "100%",
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: "center",

    },
    conART: {
        // backgroundColor: 'yellow'
    },
    topBox: {
        position: 'relative',
        alignItems: 'center',
        zIndex:9999
    },
    titleTopMiddle: {
        position: 'absolute',
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
        height: 107,
        backgroundColor: '#fff',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: .1,
        shadowRadius: 3,

        position: 'absolute',
        top: 64,
        left: 16,

    },
    boxTopMiddleUp: {
        width: '100%',
        padding: 12,
        flexDirection: 'row'
    },
    boxTopMiddleUpLogo: {
        width: '15%',
    },
    boxTopMiddleUpTxt: {
        width: '60%',
        justifyContent: 'center',
        paddingLeft: 10
    },
    boxTopMiddleUpTxtText: {
        fontSize: 22,
        color: 'rgb(91,91,91)',
        fontWeight: '600'
    },
    boxTopMiddleUpBtn: {
        width: "25%",
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
        width: "100%",
        height: 22,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
        position: "absolute",
        bottom: 8,
        left: 0
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
        color: "rgb(74,74,74)"
    },
    znxxContent:{
        marginTop:71,
        height:17,
        width:'100%',
        flexDirection:'row',
        paddingLeft:19,
        alignItems:'center'
    },
    znxxText:{
        fontSize:12,
        color:'rgb(101,101,101)',
        marginLeft:5
    },
    HomeIconBtnContent:{
        width:'100%',
        height:190,
        // backgroundColor:'lightblue',
        marginTop:25,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        flexWrap:'wrap'

    },
    HomeIconBtnButton:{
        width:'25%',
        height:83,
        // backgroundColor:'blue',
        marginTop:11, 
        justifyContent:'center',
        alignItems:'center'
    },
    HomeIconBtnButtonContent:{
        width:50,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'yellow'
    },
    HomeIconBtnImg:{
        width:36,
        height:36
    },
    HomeIconBtnText:{
        fontSize:12,
        color:"rgb(74,74,74)",
        paddingTop:8
    },
    HomeBanner:{
       width:'100%',
       height:90,
       marginTop:23,
       paddingLeft:16,
       paddingRight:16
    },
    HomeBannerContent:{
        width:'100%',
        height:90,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8
    },
    HomeBannerBg:{
        width:'100%',
        height:90,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8
    }
})