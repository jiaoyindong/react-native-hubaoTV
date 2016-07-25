/**
 * HubaoTV 首页_推荐页
 * */
import React,{Component} from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    ListView,
    ScrollView,
    TouchableOpacity,
    Navigator,
    Dimensions,
    Platform,
} from 'react-native';
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const ScreenRatio = Dimensions.get('window').width/375;

import NavigationBar from 'react-native-navigationbar';
import Swiper        from  'react-native-swiper';
import Items from './Items';
import Header from './Header';
import VideoPlayer from '../HengShuVideoFiles/VideoPlayer';

import Orientation from 'react-native-orientation';
export default  class Hot extends Component {
    componentWillUnmount() {
        Orientation.lockToPortrait();
    }
    constructor (props) {
        super(props)
        this.ImageItemClicked = this.ImageItemClicked.bind(this)
        this.state = {
            // 传递参数
            user:null,//为空,用来接收详情页的信息
        };
    }



    _rightButtonClicked () {
        alert('历史按钮被点击');
    }
    toMP4Page () {
        const self = this;
        // 这里传递了navigator作为props
        this.props.navigator.push({
            component:VideoPlayer,
            // 传递参数:通过push就可以了
            params:{
                // 从详情页获取user
                getUser: function (user) {
                    // 需要用self将this传进来,如果直接用this,那么this指的就是这个function方法了
                    self.setState({
                        user:user
                    })
                }
            }
        })

    }
    
    render() {

            var images = [
                require('../../Images/HotImages/hot_lunBo1.png'),
                require('../../Images/SRC1/src16.jpg'),
                require('../../Images/SRC1/src17.jpg'),
                require('../../Images/SRC1/src18.jpg'),
                require('../../Images/SRC1/src19.jpg'),
            ];
            return (
                <View style = {{flex:1}}>
                    <NavigationBar
                        backHidden={true}
                        barTintColor="white"
                        title=""/>
                    <View style={styles.leftButtonStyle} /* 导航左按钮 */>
                        <Image source={require('../../Images/HotImages/logo@2x.png')}/>
                    </View>
                    <TouchableOpacity onPress={this._rightButtonClicked.bind(this)}>
                        <View style={styles.rightButton} /* 导航右按钮 */>
                            <Image style={styles.imgStyle} source={require('../../Images/HotImages/headerImage@2x.png')}/>
                        </View>
                    </TouchableOpacity>


                    <ScrollView >
                        <Swiper height={140*ScreenRatio}//轮播图
                                onMomentumScrollEnd={function(e, state, context){console.log('index:', state.index)}}
                                dot={/* 指示点的颜色 */<View style={styles.dot} />}
                                activeDot={/* 指示点的颜色 */<View style={styles.activeDot} />}
                                paginationStyle={/* 指示点的位置 */{bottom: 10, left: null, right: 10, }}
                                loop={true}>
                            <TouchableOpacity onPress={this.toMP4Page.bind(this)}>
                                <View style={styles.slideViewStyle}>
                                    <Image style={styles.slideImageStyle} source={images[0]}/>
                                    <View style={styles.slideDescStyle}>
                                        <Text style={styles.slideDescTextStyle}>德州扑克,邀您来玩!</Text>
                                        <Text > 用户信息:{JSON.stringify(this.state.id)} </Text>
                                    </View>

                                </View>
                            </TouchableOpacity>

                            <View style={styles.slideViewStyle}>
                                <Image style={styles.slideImageStyle} source={images[1]}/>
                                <View style={styles.slideDescStyle}>
                                    <Text style={styles.slideDescTextStyle}>德州扑克,邀您共同来玩!</Text>
                                </View>
                            </View>
                            <View style={styles.slideViewStyle}>
                                <Image style={styles.slideImageStyle} source={images[2]}/>
                                <View style={styles.slideDescStyle}>
                                    <Text style={styles.slideDescTextStyle}>德州扑克,邀您共同来玩!</Text>
                                </View>
                            </View>
                        </Swiper>
                        <Header headerImage="../../Images/TabBars/tabBar_hot_normal@2x.png"
                                headerTitle="网络主播"
                                headerTitleColor="black"
                                headerClicked={this.toMP4Page.bind(this)}/>
                        <View style={styles.itemsViewStyle}>
                            <Items ImageItemClicked={this.ImageItemClicked}
                                   descText='nice to meet you'
                                   onlineNum='1231'
                                   tag='1'
                                   image={images[0]}
                            />
                            <Items ImageItemClicked={this.ImageItemClicked}
                                   descText='hello world'
                                   onlineNum='1235'
                                   tag='2'
                                   image={images[1]}
                            />
                            <Items ImageItemClicked={this.ImageItemClicked}
                                   descText='特步,非一般的感觉'
                                   onlineNum='1234'
                                   tag='3'
                                   image={images[2]}
                            />
                            <Items ImageItemClicked={this.ImageItemClicked}
                                   descText='特,非一般的感觉'
                                   onlineNum='234'
                                   tag='4'
                                   image={images[3]}
                            />
                            <Items ImageItemClicked={this.ImageItemClicked}
                                   descText='特步,非般的感觉'
                                   onlineNum='123'
                                   tag='5'
                                   image={images[4]}
                            />
                        </View>

                        <Header headerImage="../../Images/TabBars/tabBar_hot_normal@2x.png"
                                headerTitle="网络主播"
                                headerTitleColor="black"
                                headerClicked={this.toMP4Page.bind(this)}/>
                        <View style={styles.itemsViewStyle}>
                            <Items ImageItemClicked={this.ImageItemClicked}
                                   descText='nice to meet you'
                                   onlineNum='1231'
                                   tag='1'
                                   image={ require('../../Images/SRC1/src7.jpg')}
                            />
                            <Items ImageItemClicked={this.ImageItemClicked}
                                   descText='hello world'
                                   onlineNum='1235'
                                   tag='2'
                                   image={ require('../../Images/SRC1/src8.jpg')}
                            />
                            <Items ImageItemClicked={this.ImageItemClicked}
                                   descText='特步,非一般的感觉'
                                   onlineNum='1234'
                                   tag='3'
                                   image={ require('../../Images/SRC1/src11.jpg')}
                            />
                            <Items ImageItemClicked={this.ImageItemClicked}
                                   descText='特,非一般的感觉'
                                   onlineNum='234'
                                   tag='4'
                                   image={ require('../../Images/SRC1/src9.jpg')}
                            />
                            <Items ImageItemClicked={this.ImageItemClicked}
                                   descText='特步,非般的感觉'
                                   onlineNum='123'
                                   tag='5'
                                   image={ require('../../Images/SRC1/src10.jpg')}
                            />
                        </View>

                    </ScrollView>


                </View>

            );
        }
    

    ImageItemClicked (tag) {
        const self = this;
        // 这里传递了navigator作为props
        this.props.navigator.push({
            component:VideoPlayer,
            // 传递参数:通过push就可以了
            params:{
                // 从详情页获取user
                getUser: function (user) {
                    // 需要用self将this传进来,如果直接用this,那么this指的就是这个function方法了
                    self.setState({
                        user:user
                    })
                }
            }
        })
    }
}



const styles = StyleSheet.create({

    slideViewStyle: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    slideImageStyle: {
        width:ScreenWidth,
        height:140*ScreenRatio,
        resizeMode:Image.resizeMode.stretch
    },
    slideDescStyle: {
        height:30,
        bottom:30,
        width:ScreenWidth,
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:'center',

    },
    slideDescTextStyle: {
        left:20,
        color:'white',
        fontSize:16,
    },
    header: {
        height:30,
        backgroundColor:'gray',
        flexDirection:'row',
        alignItems:'center',
    },
    headerImage: {
        marginLeft:20,
        width:20,
        height:20,
    },
    itemImage: {
        width:(ScreenWidth-30)/2,
        marginLeft:10,
        height:100*ScreenRatio,
        marginTop:5,
    },
    leftButtonStyle: {
        position: 'absolute',
        top:20,
        // left:20,默认为0
        padding:10,//扩充内边距
        // backgroundColor:'red'
    },
    rightButton: {
        position: 'absolute',// 绝对位置
        top:-40,//加了Touchable之后,top出问题了
        padding:10,//扩充内边距
        right:10,
        // backgroundColor:'red',
    },
    imgStyle: {
        height:20,
        width:20,
    },
    dot: {
        backgroundColor:'white',
        width: 5,
        height: 5,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    },
    actionDot : {
        backgroundColor: 'yellow',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    },
    list_item:{
        paddingTop:20,
        height:50,
        marginLeft:10,// 左边距
        marginRight:10,// 右边距
        fontSize:20,
        borderBottomWidth:1,
        borderBottomColor :'#ddd',
        justifyContent:'center',
    },
    itemsViewStyle: {
        backgroundColor:'white',
        flexDirection:'row',
        // justifyContent:'flex-start',
        alignItems:'center',
        flexWrap:'wrap'
    }
});

