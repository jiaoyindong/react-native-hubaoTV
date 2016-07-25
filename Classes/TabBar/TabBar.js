/**
 * 2016/7/3 tabBar---控制四个子控制器
 * */

import React , {Component,PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform,// 用来判断系统(ios or android)

    Navigator,
} from 'react-native';

import Hot from '../HotFiles/Hot';
import Live from '../LivesFiles/Live';
import Anchor from '../AnchorsFiles/Anchor';
import Mine from '../Mine/Mine'
import TabNavigator from 'react-native-tab-navigator';


const HOT_NORMAL = require('../../Images/TabBars/tabBar_hot_normal@2x.png');
const HOT_SELECTED = require('../../Images/TabBars/tabBar_hot_selected@2x.png');
const LIVE_NORMAL = require('../../Images/TabBars/tabBar_live_normal@2x.png');
const LIVE_SELECTED = require('../../Images/TabBars/tabBar_live_selected@2x.png');
const ANCHOR_NORMAL = require('../../Images/TabBars/tabBar_anchor_normal@2x.png');
const ANCHOR_SELECTED = require('../../Images/TabBars/tabBar_anchor_selected@2x.png');
const MINE_NORMAL = require('../../Images/TabBars/tabBar_mine_normal@2x.png');
const MINE_SELECTED = require('../../Images/TabBars/tabBar_mine_selected@2x.png');

export default class TabBar extends Component {
    // 构造函数,----只初始化一次
    constructor (props) {
        super(props)
        global.showTab = this.showTab;
        global.hideTab = this.hideTab;
        this.state = {
            selectedTab : Hot, // 默认选中的item
            title:'推荐', // 标示文字
            show:true,
            tabBarH : 50
        }
    }
    static propTypes = {
        showTabBar:PropTypes.func,
        hideTabBar:PropTypes.func,
    }

    showTab = () => {
        this.setState({
            show:true,
            tabBarH : 50
        })
    }
    hideTab = () => {
        this.setState ({
            show:false,
            tabBarH : 0
        })
    }


    _renderTabItem(img, selectedImg,text ,tag) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === tag}
                renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
                renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
                title = {text}
                selectedTitleStyle = {{color:'orange'}}
                onPress={() => this.setState({ selectedTab: tag })}>
                <Navigator
                    initialRoute = {{component:tag}}
                    renderScene = {
                            (route,navigator)=>{
                                let Component = route.component;
                                return <Component {...route.params} navigator={navigator} />
                            }
                        }
                />
            </TabNavigator.Item>
        );
    }
    render () {
        return (
            <TabNavigator tabBarStyle={{ height: this.state.tabBarH, overflow: 'hidden' }}
                          sceneStyle={{ paddingBottom: this.state.tabBarH }}
                          // tintColor = 'orange'
            >
                {this._renderTabItem(HOT_NORMAL,HOT_SELECTED,"推荐",Hot)}
                {this._renderTabItem(LIVE_NORMAL,LIVE_SELECTED,"视频",Live)}
                {this._renderTabItem(ANCHOR_NORMAL,ANCHOR_SELECTED,"主播",Anchor)}
                {this._renderTabItem(MINE_NORMAL,MINE_SELECTED,"我",Mine)}


                {/*
                 <TabNavigator.Item
                 selected={this.state.selectedTab === Mine}
                 renderIcon={() => <Image style={styles.tabIcon} source={MINE_NORMAL}/>}
                 renderSelectedIcon={() => <Image style={styles.tabIcon} source={MINE_SELECTED}/>}
                 title = {"我"}
                 selectedTitleStyle = {{color:'orange'}}
                 onPress={() => this.setState({ selectedTab: Mine })}>

                 <Navigator
                 initialRoute = {{component:Mine}}
                 renderScene = {
                 (route,navigator)=>{
                 let Component = route.component;
                 return <Component {...route.params} navigator={navigator} />
                 }
                 }
                 />
                 </TabNavigator.Item>
                */}

            </TabNavigator>
        )
    }

}

const styles = StyleSheet.create({
    tabIcon: {
        width:Platform.OS === 'ios' ? 20 : 18,
        height:Platform.OS === 'ios' ? 20 : 18,
    }
});







