import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from "./style.js";

export default class ActiveStyle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgList: [
                '../../images/01.jpg',
                // '../../images/01.jpg',
            ],
        };
    }
    componentDidMount() {
        // console.log('活动版块:',styleType)
        // console.log('活动版块:',activityStyleOneV180Response)
        // console.log('活动版块:',activityStyleTwoV180Response)
    }

    render() {

        let {
            styleType,
            activityStyleOneV180Response,
            activityStyleTwoV180Response
        } = this.props

        activityStyleTwoV180Response === null ? null :
            console.log(activityStyleTwoV180Response[0].pic)

        let B1 = (
            activityStyleOneV180Response === null ? null :
                <View style={styles.ActiveStyleContent}>
                    <View style={styles.ActiveStyleContentTop}>
                        <Text style={styles.ActiveStyleContentTopText}>
                            {activityStyleOneV180Response.title}
                        </Text>
                    </View>
                    <View style={styles.ActiveStyleContentMiddle}>

                        <View style={styles.ActiveStyleB1}>
                            <Image
                                style={styles.ActiveStyleB1Img}
                                source={{ uri: activityStyleOneV180Response.pic }}
                            />
                        </View>

                    </View>
                    <View style={styles.ActiveStyleContentBottom}>
                        <Text style={styles.ActiveStyleContentBottomText}>
                            {activityStyleOneV180Response.picDetail}
                        </Text>
                    </View>
                </View>
        )

        let B4 = (
            activityStyleTwoV180Response === null ? null :
                <View style={styles.ActiveStyleContent}>
                    <View style={styles.ActiveStyleContentBottom}>

                        <View style={styles.ActiveStyleB4}>
                            <View style={styles.ActiveStyleB4ImgConLeft}>
                                <Image
                                    style={styles.ActiveStyleB4LeftImg}
                                    source={{ uri: activityStyleTwoV180Response[0].pic }}
                                />
                            </View>
                            <View style={styles.ActiveStyleB4ImgConRight}>
                                <View style={styles.ActiveStyleB4ImgConRightTop}>
                                    <Image
                                        style={styles.ActiveStyleB4RightImg}
                                        source={{ uri: activityStyleTwoV180Response[1].pic }}
                                    />
                                </View>
                                <View style={styles.ActiveStyleB4ImgConRightBottom}>
                                    <View style={styles.ActiveStyleB4ImgConRightBottomLeft}>
                                        <Image
                                            style={styles.ActiveStyleB4RightImg}
                                            source={{ uri: activityStyleTwoV180Response[2].pic }}
                                        />
                                    </View>
                                    <View style={styles.ActiveStyleB4ImgConRightBottomRight}>
                                        <Image
                                            style={styles.ActiveStyleB4RightImg}
                                            source={{ uri: activityStyleTwoV180Response[3].pic }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>

                    </View>
                </View>
        )






        return (


            <View style={styles.ActiveStyleContainer}>
                {
                    styleType == 1 ? B1 : null
                }
                {
                    styleType == 2 ? B4 : null
                }
            </View>
        );
    }
}


// let B2 = (
//     <View style={styles.ActiveStyleB2}>
//         <View style={styles.ActiveStyleB2ImgConLeft}>
//             <Image
//                 style={styles.ActiveStyleB2Img}
//                 source={require('../../images/01.jpg')}
//             />
//         </View>
//         <View style={styles.ActiveStyleB2ImgConRight}>
//             <Image
//                 style={styles.ActiveStyleB2Img}
//                 source={require('../../images/03.jpg')}
//             />
//         </View>
//     </View>
// )
// let B3 = (
//     <View style={styles.ActiveStyleB3}>
//         <View style={styles.ActiveStyleB3ImgConLeft}>
//             <Image
//                 style={styles.ActiveStyleB3LeftImg}
//                 source={require('../../images/01.jpg')}
//             />
//         </View>
//         <View style={styles.ActiveStyleB3ImgConRight}>
//             <View style={styles.ActiveStyleB3ImgConRightTop}>
//                 <Image
//                     style={styles.ActiveStyleB3RightImg}
//                     source={require('../../images/02.jpg')}
//                 />
//             </View>
//             <View style={styles.ActiveStyleB3ImgConRightBottom}>
//                 <Image
//                     style={styles.ActiveStyleB3RightImg}
//                     source={require('../../images/03.jpg')}
//                 />
//             </View>
//         </View>
//     </View>
// )


// let B4 = (
    // <View style={styles.ActiveStyleB4}>
    //     <View style={styles.ActiveStyleB3ImgConLeft}>
    //         <Image
    //             style={styles.ActiveStyleB4LeftImg}
    //             source={require('../../images/01.jpg')}
    //         />
    //     </View>
    //     <View style={styles.ActiveStyleB4ImgConRight}>
    //         <View style={styles.ActiveStyleB3ImgConRightTop}>
    //             <Image
    //                 style={styles.ActiveStyleB4RightImg}
    //                 source={require('../../images/02.jpg')}
    //             />
    //         </View>
    //         <View style={styles.ActiveStyleB4ImgConRightBottom}>
    //             <View style={styles.ActiveStyleB4ImgConRightBottomLeft}>
    //                 <Image
    //                     style={styles.ActiveStyleB4RightImg}
    //                     source={require('../../images/03.jpg')}
    //                 />
    //             </View>
    //             <View style={styles.ActiveStyleB4ImgConRightBottomRight}>
    //                 <Image
    //                     style={styles.ActiveStyleB4RightImg}
    //                     source={require('../../images/01.jpg')}
    //                 />
    //             </View>
    //         </View>
    //     </View>
    // </View>
// )