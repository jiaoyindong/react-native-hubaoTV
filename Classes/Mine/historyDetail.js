/**
 * Created by admin on 16/7/21.
 */
/**
 * Created by admin on 16/7/21.
 */
/**
 * 首页--我的   create by jiaoyindong
 * */

import React ,{Component}from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    Navigator,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import NavigationBar from 'react-native-navigationbar';
const ScreenRatio = Dimensions.get('window').width/375;
const ScreenWidth = Dimensions.get('window').width;

export default class HistoryDetail extends Component {
    render () {
        return (
            <View style = {{backgroundColor:'white',flex:1}}>
                <NavigationBar
                    backHidden={false}
                    barTintColor='white'
                    barStyle={styles.navbar}
                    title='历史脚印'
                    // actionName='About'
                    backFunc={() => {
                        this.props.navigator.pop()
                    }}/>
            </View>
        );
    }

}
const styles = StyleSheet.create({

});




