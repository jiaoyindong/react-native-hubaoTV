/**
 * 首页--直播   create by jiaoyindong
 * */

import React ,{Component}from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    Navigator,
    ScrollView,
    Dimensions,
    ListView,
    TouchableOpacity
} from 'react-native';
const ScreenFrame = Dimensions.get('window');
// import NavigationBar from 'react-native-navigationbar';
import Swiper        from  'react-native-swiper';
import Items from '../HotFiles/Items';

import VideoPlayer from '../HengShuVideoFiles/VideoPlayer';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

export default class Live extends Component {
    componentWillUnmount() {
        Orientation.lockToPortrait();
    }
    constructor (props) {
        super(props)
        this.ImageItemClicked = this.ImageItemClicked.bind(this)
    }
    ImageItemClicked (tag) {
        this.props.navigator.push ({
            component:VideoPlayer,
        })
    }
    render() {
        return <ScrollableTabView
            style={{marginTop: 20,height:64 }}
            tabBarUnderlineColor = 'red'
            tabBarActiveTextColor = 'orange'
            tabBarInactiveTextColor = 'gray'
            tabBarTextStyle = {{fontSize:16}}
            // onChangeTab = {()=>{
            // }
            renderTabBar={() => <DefaultTabBar 
                                underlineHeight={1}/>}
        >
            <ScrollView tabLabel='电脑竞技' style = {{height:ScreenFrame.height-120}}>
                <Swiper height={140}
                        onMomentumScrollEnd={function(e, state, context){console.log('index:', state.index)}}
                        dot={/* 指示点的颜色 */<View style={{backgroundColor:'white', width: 5, height: 5,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                        activeDot={/* 指示点的颜色 */<View style={{backgroundColor: 'yellow', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                        paginationStyle={/* 指示点的位置 */{bottom: 10, left: null, right: 10, }}
                        loop={true}>
                    <View style={styles.slide} >
                        <Image style={[styles.image ,styles.mode]} source={require('../../Images/HotImages/hot_lunBo1.png')} />
                        <View style = {[{height:30},{width:ScreenFrame.width},{backgroundColor:'rgba(0,0,0,0.5)'},{justifyContent:'center'},{bottom:30}]}>
                            <Text style = {[{left:20},{color:'white',fontSize:16}]}>德州扑克,邀您来玩!</Text>
                        </View>
                    </View>
                    <View style={styles.slide} >
                        <Image style={[styles.image ,styles.mode]} source={require('../../Images/HotImages/hot_lunBo2.png')} />
                        <View style = {[{height:30},{width:ScreenFrame.width},{backgroundColor:'rgba(0,0,0,0.5)'},{justifyContent:'center'},{bottom:30}]}>
                            <Text style = {[{left:20},{color:'white',fontSize:16}]}>德州扑克,邀您共同来玩!</Text>
                        </View>
                    </View>
                    <View style={styles.slide} >
                        <Image style={[styles.image ,styles.mode]} source={require('../../Images/HotImages/hot_lunBo3.png')} />
                        <View style = {[{height:30},{width:ScreenFrame.width},{backgroundColor:'rgba(0,0,0,0.5)'},{justifyContent:'center'},{bottom:30}]}>
                            <Text style = {[{left:20},{color:'white',fontSize:16}]}>德州扑克,邀您共同来玩!</Text>
                        </View>
                    </View>
                </Swiper>
                <View style = {styles.itemsViewStyle}>
                    <Items ImageItemClicked = {this.ImageItemClicked}
                           descText = '性感美眉,邀你来袭'
                           onlineNum = '12345'
                           tag = '1'
                           image = {require('../../Images/SRC1/src1.jpg')}
                    />
                    <Items ImageItemClicked = {this.ImageItemClicked}
                           descText = '不服来战啊,单挑王'
                           onlineNum = '12334'
                           tag = '2'
                           image = {require('../../Images/SRC1/src2.jpg')}
                    />
                    <Items ImageItemClicked = {this.ImageItemClicked}
                           descText = '无篮球,无兄弟'
                           onlineNum = '12'
                           tag = '3'
                           image = {require('../../Images/SRC1/src3.jpg')}
                    />
                </View>

            </ScrollView>
            <ScrollView tabLabel='棋牌竞技' style = {{height:ScreenFrame.height-120}}>
                <Swiper height={140}
                        onMomentumScrollEnd={function(e, state, context){console.log('index:', state.index)}}
                        dot={/* 指示点的颜色 */<View style={{backgroundColor:'white', width: 5, height: 5,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                        activeDot={/* 指示点的颜色 */<View style={{backgroundColor: 'yellow', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                        paginationStyle={/* 指示点的位置 */{bottom: 10, left: null, right: 10, }}
                        loop={true}>
                    <View style={styles.slide} >
                        <Image style={[styles.image ,styles.mode]} source={require('../../Images/HotImages/hot_lunBo1.png')} />
                        <View style = {[{height:30},{width:ScreenFrame.width},{backgroundColor:'rgba(0,0,0,0.5)'},{justifyContent:'center'},{bottom:30}]}>
                            <Text style = {[{left:20},{color:'white',fontSize:16}]}>德州扑克,邀您来玩!</Text>
                        </View>

                    </View>
                    <View style={styles.slide} >
                        <Image style={[styles.image ,styles.mode]} source={require('../../Images/HotImages/hot_lunBo2.png')} />
                        <View style = {[{height:30},{width:ScreenFrame.width},{backgroundColor:'rgba(0,0,0,0.5)'},{justifyContent:'center'},{bottom:30}]}>
                            <Text style = {[{left:20},{color:'white',fontSize:16}]}>德州扑克,邀您共同来玩!</Text>
                        </View>
                    </View>
                    <View style={styles.slide} >
                        <Image style={[styles.image ,styles.mode]} source={require('../../Images/HotImages/hot_lunBo3.png')} />
                        <View style = {[{height:30},{width:ScreenFrame.width},{backgroundColor:'rgba(0,0,0,0.5)'},{justifyContent:'center'},{bottom:30}]}>
                            <Text style = {[{left:20},{color:'white',fontSize:16}]}>德州扑克,邀您共同来玩!</Text>
                        </View>
                    </View>
                </Swiper>
                <View style = {styles.itemsViewStyle}>
                    <Items ImageItemClicked = {this.ImageItemClicked}
                             descText = 'nice to meet you'
                             onlineNum = '1231'
                             tag = '1'
                             image = {require('../../Images/SRC1/src6.jpg')}
                    />
                    <Items ImageItemClicked = {this.ImageItemClicked}
                           descText = 'hello world'
                           onlineNum = '1235'
                           tag = '1'
                           image = {require('../../Images/SRC1/src7.jpg')}
                    />
                    <Items ImageItemClicked = {this.ImageItemClicked}
                           descText = '特步,非一般的感觉'
                           onlineNum = '1234'
                           tag = '1'
                           image = {require('../../Images/SRC1/src8.jpg')}
                    />

                </View>


            </ScrollView>
            <ScrollView tabLabel='桌游竞技' style = {{height:ScreenFrame.height-120}}>
                <Swiper height={140}
                        onMomentumScrollEnd={function(e, state, context){console.log('index:', state.index)}}
                        dot={/* 指示点的颜色 */<View style={{backgroundColor:'white', width: 5, height: 5,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                        activeDot={/* 指示点的颜色 */<View style={{backgroundColor: 'yellow', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                        paginationStyle={/* 指示点的位置 */{bottom: 10, left: null, right: 10, }}
                        loop={true}>
                    <View style={styles.slide} >
                        <Image style={[styles.image ,styles.mode]} source={require('../../Images/HotImages/hot_lunBo1.png')} />
                        <View style = {[{height:30},{width:ScreenFrame.width},{backgroundColor:'rgba(0,0,0,0.5)'},{justifyContent:'center'},{bottom:30}]}>
                            <Text style = {[{left:20},{color:'white',fontSize:16}]}>德州扑克,邀您来玩!</Text>
                        </View>

                    </View>
                    <View style={styles.slide} >
                        <Image style={[styles.image ,styles.mode]} source={require('../../Images/HotImages/hot_lunBo2.png')} />
                        <View style = {[{height:30},{width:ScreenFrame.width},{backgroundColor:'rgba(0,0,0,0.5)'},{justifyContent:'center'},{bottom:30}]}>
                            <Text style = {[{left:20},{color:'white',fontSize:16}]}>德州扑克,邀您共同来玩!</Text>
                        </View>
                    </View>
                    <View style={styles.slide} >
                        <Image style={[styles.image ,styles.mode]} source={require('../../Images/HotImages/hot_lunBo3.png')} />
                        <View style = {[{height:30},{width:ScreenFrame.width},{backgroundColor:'rgba(0,0,0,0.5)'},{justifyContent:'center'},{bottom:30}]}>
                            <Text style = {[{left:20},{color:'white',fontSize:16}]}>德州扑克,邀您共同来玩!</Text>
                        </View>
                    </View>
                </Swiper>
                <View style = {styles.itemsViewStyle}>
                    <Items ImageItemClicked = {this.ImageItemClicked}
                           descText = '性感美眉,邀你来袭'
                           onlineNum = '12345'
                           tag = '1'
                           image = {require('../../Images/SRC1/src9.jpg')}
                    />
                    <Items ImageItemClicked = {this.ImageItemClicked}
                           descText = '不服来战啊,单挑王'
                           onlineNum = '12334'
                           tag = '2'
                           image = {require('../../Images/SRC1/src10.jpg')}
                    />
                    <Items ImageItemClicked = {this.ImageItemClicked}
                           descText = '无篮球,无兄弟'
                           onlineNum = '12'
                           tag = '3'
                           image = {require('../../Images/SRC1/src11.jpg')}
                    />
                    <Items ImageItemClicked = {this.ImageItemClicked}
                           descText = '性感美眉,邀你来袭'
                           onlineNum = '12345'
                           tag = '1'
                           image = {require('../../Images/SRC1/src12.jpg')}
                    />
                    <Items ImageItemClicked = {this.ImageItemClicked}
                           descText = '不服来战啊,单挑王'
                           onlineNum = '12334'
                           tag = '2'
                           image = {require('../../Images/SRC1/src13.jpg')}
                    />
                    <Items ImageItemClicked = {this.ImageItemClicked}
                           descText = '无篮球,无兄弟'
                           onlineNum = '12'
                           tag = '3'
                           image = {require('../../Images/SRC1/src14.jpg')}
                    />
                </View>


            </ScrollView>
        </ScrollableTabView>
    }

}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        height:140,
        width:ScreenFrame.width,
    },
    mode:{
        resizeMode: Image.resizeMode.stretch,
    },
    slide: {
        flex: 1,
        // justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    itemsViewStyle: {
        backgroundColor:'white',
        flexDirection:'row',
        // justifyContent:'flex-start',
        alignItems:'center',
        flexWrap:'wrap'
    }

});




