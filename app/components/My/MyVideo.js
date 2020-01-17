import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    Dimensions,
    Image,
    Touchable,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView,
    ActivityIndicator,
    RefreshControl,
    Animated,
} from 'react-native';
import Video from 'react-native-video';
import UtilsShare from "../../util/UtilsShare"
import Carousel from "react-native-looped-carousel";

import styles from './style'
export default class MyVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paused: true,
            repeat: false,
        };
    }

    render() {
        let {
            paused,
            repeat,
        } = this.state

        return (
            <View>


                <Text> MyVideo </Text>
                <Carousel
                    delay={2000}
                    style={{ width: '100%', height: 220 }}
                    autoplay={false}
                    // pageInfo
                    bullets={true}
                    onAnimateNextPage={(p) => console.log(p)}
                >
                    <View style={styles.viewBox}>
                        <Video
                            // source={require('http://mdglcs3.jlylcf.com/WXBusinessInfo/14/a498b73e-69d7-490f-bb4e-74a02f197ce7.mp4')} // 视频的URL地址，或者本地地址
                            //source={require('./music.mp3')} // 可以播放音频
                            source={{ uri: 'http://mdglcs3.jlylcf.com/WXBusinessInfo/14/a498b73e-69d7-490f-bb4e-74a02f197ce7.mp4' }}
                            ref='player'
                            // rate={this.state.isPlay ? 1 : 0}                   // 控制暂停/播放，0 代表暂停paused, 1代表播放normal.
                            volume={1.0}
                            // 声音的放声音的放大倍数大倍数，0 为静音  ，1 为正常音量 ，更大的数字表示放大的倍数
                            muted={true}                  // true代表静音，默认为false.

                            paused={paused}                // true代表暂停，默认为false
                            onEnd={() => { this._videoEnd() }}             // 当视频播放完毕后的回调函数
                            repeat={repeat}                 // 是否重复播放


                            resizeMode="contain"           // 视频的自适应伸缩铺放行为，contain、stretch、cover
                            playInBackground={false}       // 当app转到后台运行的时候，播放是否暂停
                            playWhenInactive={false}       // [iOS] Video continues to play when control or notification center are shown. 仅适用于IOS
                            onLoadStart={this.loadStart}   // 当视频开始加载时的回调函数
                            onLoad={this.setDuration}      // 当视频加载完毕时的回调函数
                            onProgress={this.setTime}      //  进度控制，每250ms调用一次，以获取视频播放的进度
                            onError={this.videoError}      // 当视频不能加载，或出错后的回调函数
                            style={styles.backgroundVideo}
                        />

                    </View>
                    <View style={styles.viewBox}>
                        <Image source={require('../../images/01.jpg')} style={styles.swiperImg} />
                    </View>
                    <View style={styles.viewBox}>
                        <Image source={require('../../images/02.jpg')} style={styles.swiperImg} />
                    </View>
                    <View style={styles.viewBox}>
                        <Image source={require('../../images/03.jpg')} style={styles.swiperImg} />
                    </View>
                </Carousel>



                <Button
                    title='PLAY'
                    onPress={() => {  }}
                />


                <View style={{ height: 30 }}></View>



            </View>
        );
    }
    _videoPlay = () => {
        console.warn('111')
        var that = this
        that.setState({
            paused: false,
            repeat: true,

        })
    }
    _videoEnd = () => {
        console.warn('end')
        var that = this
        that.setState({
            paused: true,
        })
    }
}




{/* <Video
                    // source={require('http://mdglcs3.jlylcf.com/WXBusinessInfo/14/a498b73e-69d7-490f-bb4e-74a02f197ce7.mp4')} // 视频的URL地址，或者本地地址
                    //source={require('./music.mp3')} // 可以播放音频
                    source={{ uri: 'http://mdglcs3.jlylcf.com/WXBusinessInfo/14/a498b73e-69d7-490f-bb4e-74a02f197ce7.mp4' }}
                    ref='player'
                    // rate={this.state.isPlay ? 1 : 0}                   // 控制暂停/播放，0 代表暂停paused, 1代表播放normal.
                    volume={1.0}
                    // 声音的放声音的放大倍数大倍数，0 为静音  ，1 为正常音量 ，更大的数字表示放大的倍数
                    muted={true}                  // true代表静音，默认为false.

                    paused={paused}                // true代表暂停，默认为false
                    onEnd={() => { this._videoEnd() }}             // 当视频播放完毕后的回调函数
                    repeat={repeat}                 // 是否重复播放


                    resizeMode="contain"           // 视频的自适应伸缩铺放行为，contain、stretch、cover
                    playInBackground={false}       // 当app转到后台运行的时候，播放是否暂停
                    playWhenInactive={false}       // [iOS] Video continues to play when control or notification center are shown. 仅适用于IOS
                    onLoadStart={this.loadStart}   // 当视频开始加载时的回调函数
                    onLoad={this.setDuration}      // 当视频加载完毕时的回调函数
                    onProgress={this.setTime}      //  进度控制，每250ms调用一次，以获取视频播放的进度
                    onError={this.videoError}      // 当视频不能加载，或出错后的回调函数
                    style={styles.backgroundVideo}
                /> */}





{/* 
import Swiper from 'react-native-swiper'
                    
                    <View
                    style={{ height: 216, width: '100%', backgroundColor: 'yellow' }}
                >

                    <Swiper
                        showsButtons={false}
                        loop={true}
                        autoplay={false}
                        horizontal={true}
                        automaticallyAdjustContentInsets={true}
                        paginationStyle={{
                            bottom: 5
                        }}
                    >
                        <View style={styles.viewBox}>
                            <Video
                                // source={require('http://mdglcs3.jlylcf.com/WXBusinessInfo/14/a498b73e-69d7-490f-bb4e-74a02f197ce7.mp4')} // 视频的URL地址，或者本地地址
                                //source={require('./music.mp3')} // 可以播放音频
                                source={{ uri: 'http://mdglcs3.jlylcf.com/WXBusinessInfo/14/a498b73e-69d7-490f-bb4e-74a02f197ce7.mp4' }}
                                ref='player'
                                // rate={this.state.isPlay ? 1 : 0}                   // 控制暂停/播放，0 代表暂停paused, 1代表播放normal.
                                volume={1.0}
                                // 声音的放声音的放大倍数大倍数，0 为静音  ，1 为正常音量 ，更大的数字表示放大的倍数
                                muted={true}                  // true代表静音，默认为false.

                                paused={paused}                // true代表暂停，默认为false
                                onEnd={() => { this._videoEnd() }}             // 当视频播放完毕后的回调函数
                                repeat={repeat}                 // 是否重复播放


                                resizeMode="contain"           // 视频的自适应伸缩铺放行为，contain、stretch、cover
                                playInBackground={false}       // 当app转到后台运行的时候，播放是否暂停
                                playWhenInactive={false}       // [iOS] Video continues to play when control or notification center are shown. 仅适用于IOS
                                onLoadStart={this.loadStart}   // 当视频开始加载时的回调函数
                                onLoad={this.setDuration}      // 当视频加载完毕时的回调函数
                                onProgress={this.setTime}      //  进度控制，每250ms调用一次，以获取视频播放的进度
                                onError={this.videoError}      // 当视频不能加载，或出错后的回调函数
                                style={styles.backgroundVideo}
                            />
                        </View>
                        <View style={styles.viewBox}>
                            <Image source={require('../../images/01.jpg')} style={styles.swiperImg} />
                        </View>
                        <View style={styles.viewBox}>
                            <Image source={require('../../images/02.jpg')} style={styles.swiperImg} />
                        </View>
                        <View style={styles.viewBox}>
                            <Image source={require('../../images/03.jpg')} style={styles.swiperImg} />
                        </View>

                    </Swiper>


                </View> */}