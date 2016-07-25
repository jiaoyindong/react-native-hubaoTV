/**
 * 首页--主播   create by jiaoyindong
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
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const ScreenRatio = Dimensions.get('window').width/375;

import Items from '../HotFiles/Items';
import HengVideoPlayer from '../HengShuVideoFiles/HengVideoPlayer';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

export default class Anchor extends Component {
    componentWillUnmount() {
        Orientation.lockToPortrait();
    }
    constructor (props) {
        super(props)
        this._ImageItemClicked = this._ImageItemClicked.bind(this)
        this.ImageItemClicked = this.ImageItemClicked.bind(this)
    }
    ImageItemClicked (tag) {
        this.props.navigator.push ({
            component:HengVideoPlayer,
        })
    }
    _ImageItemClicked (i) {
        this.props.navigator.push ({
            component:HengVideoPlayer,
        })
    }
    render () {
        var images = [
            require('../../Images/LiveImages/live_top1.png'),
            require('../../Images/LiveImages/live_top2.png'),
        ];
        var IMAGEITEM = [];
        for (var i in images) {
            IMAGEITEM.push(
                <TouchableOpacity key = {i} onPress = {this._ImageItemClicked.bind(this,i)}>
                    <Image style = {styles.itemImageStyle} source = {images[i]} />
                </TouchableOpacity>
            );
        }
        var image = [require('../../Images/SRC/src1.jpg'),
                     require('../../Images/SRC/src2.jpg'),
                     require('../../Images/SRC/src3.jpg'),
                     require('../../Images/SRC/src4.jpg'),
                     require('../../Images/SRC/src5.jpg'),
                     require('../../Images/SRC/src6.jpg'),
                     require('../../Images/SRC/src7.jpg')];
        var descText = ['性感美眉,邀你来袭','不服来战啊,单挑王','无篮球,无兄弟','性感美眉,邀你来袭','不服来战啊,单挑王','无篮球,无兄弟','性感美眉,邀你来袭'];
        var onlineNum = ['1234','2345','12345','1234','2345','12345','1234'];
        var tag = ['1','2','13','1234','2345','12345','12'];
        var ITEMS = [];
        for (var i in image) {
            ITEMS.push(
                <Items ImageItemClicked = {this.ImageItemClicked}
                       descText = {descText[i]}
                       key = {i}
                       onlineNum = {onlineNum[i]}
                       tag = {tag[i]}
                       image = {image[i]}
                />
            );
        }

            return <ScrollableTabView
                style={{marginTop: 20, }}
                tabBarUnderlineColor = 'orange'
                tabBarActiveTextColor = 'orange'
                tabBarInactiveTextColor = 'gray'
                tabBarTextStyle = {{fontSize:16}}
                renderTabBar={() => <DefaultTabBar
                                underlineHeight={1}/>}
            >
                <ScrollView tabLabel = '娱乐主播' style = {{height:ScreenHeight-140}}>
                     {IMAGEITEM}
                    <View style = {styles.itemsViewStyle}>
                        {ITEMS}
                    </View>
                </ScrollView>

                <ScrollView tabLabel = '娱主播' style = {{height:ScreenHeight-120}}>
                    {IMAGEITEM}
                    <View style = {styles.itemsViewStyle}>
                        <Items ImageItemClicked = {this.ImageItemClicked}
                               descText = 'nice to meet you'
                               onlineNum = '1231'
                               tag = '1'
                               image = {require('../../Images/SRC/src8.jpg')}
                        />
                        <Items ImageItemClicked = {this.ImageItemClicked}
                               descText = 'hello world'
                               onlineNum = '1235'
                               tag = '1'
                               image = {require('../../Images/SRC/src9.jpg')}
                        />
                        <Items ImageItemClicked = {this.ImageItemClicked}
                               descText = '特步,非一般的感觉'
                               onlineNum = '1234'
                               tag = '1'
                               image = {require('../../Images/SRC/src10.jpg')}
                        />
                        <Items ImageItemClicked = {this.ImageItemClicked}
                               descText = '特步,非一般的感觉'
                               onlineNum = '1234'
                               tag = '1'
                               image = {require('../../Images/SRC/src11.jpg')}
                        />
                        <Items ImageItemClicked = {this.ImageItemClicked}
                               descText = '特步,非一般的感觉'
                               onlineNum = '1234'
                               tag = '1'
                               image = {require('../../Images/SRC/src12.jpg')}
                        />
                        <Items ImageItemClicked = {this.ImageItemClicked}
                               descText = '特步,非一般的感觉'
                               onlineNum = '1234'
                               tag = '1'
                               image = {require('../../Images/SRC/src13.jpg')}
                        />
                        <Items ImageItemClicked = {this.ImageItemClicked}
                               descText = '特步,非一般的感觉'
                               onlineNum = '1234'
                               tag = '1'
                               image = {require('../../Images/SRC/src14.jpg')}
                        />
                    </View>
                </ScrollView>

                <ScrollView tabLabel = '乐主播' style = {{height:ScreenHeight-120}}>
                    {IMAGEITEM}
                    <View style = {styles.itemsViewStyle}>
                        <Items ImageItemClicked = {this.ImageItemClicked}
                               descText = 'nice to meet you'
                               onlineNum = '1231'
                               tag = '1'
                               image = {require('../../Images/SRC/src15.jpg')}
                        />
                        <Items ImageItemClicked = {this.ImageItemClicked}
                               descText = 'hello world'
                               onlineNum = '1235'
                               tag = '1'
                               image = {require('../../Images/SRC/src16.jpg')}
                        />
                        <Items ImageItemClicked = {this.ImageItemClicked}
                               descText = '特步,非一般的感觉'
                               onlineNum = '1234'
                               tag = '1'
                               image = {require('../../Images/SRC/src17.jpg')}
                        />
                        <Items ImageItemClicked = {this.ImageItemClicked}
                               descText = '特步,非一般的感觉'
                               onlineNum = '1234'
                               tag = '1'
                               image = {require('../../Images/SRC/src18.jpg')}
                        />
                        <Items ImageItemClicked = {this.ImageItemClicked}
                               descText = '特步,非一般的感觉'
                               onlineNum = '1234'
                               tag = '1'
                               image = {require('../../Images/SRC/src19.jpg')}
                        />
                        <Items ImageItemClicked = {this.ImageItemClicked}
                               descText = '特步,非一般的感觉'
                               onlineNum = '1234'
                               tag = '1'
                               image = {require('../../Images/SRC/src20.jpg')}
                        />

                    </View>
                </ScrollView>

            </ScrollableTabView>
        }
}
const styles = StyleSheet.create({
    flex: {
        flex:1,
    },
    itemImageStyle: {
        flex:1,
        height:140*ScreenRatio,
        borderRadius:10,
        resizeMode:Image.resizeMode.stretch,
        width:ScreenWidth-10,
        margin:5,
        marginBottom:0,
    },
    itemsViewStyle: {
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    }

});




