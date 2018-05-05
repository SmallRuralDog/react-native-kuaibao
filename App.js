import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (<Navigator />);
  }
}

import HomeScene from './scene/HomeScene'
import VideoScene from './scene/VideoScene'
import SmallVideoScene from './scene/SmallVideoScene'
import ReadScene from './scene/ReadScene'
import MineScene from './scene/MineScene'

const Tab = createBottomTabNavigator({
  Home: {
    screen: createStackNavigator({ HomeScene }),
    navigationOptions: ({ navigation }) => ({
      title: "快报",
      tabBarLabel: "快报",
      tabBarIcon: ({ focused, tintColor }) => (<Image
        resizeMode={'center'}
        source={focused
          ? require("./assets/images/tabbar_icon_refresh_selected.png")
          : require("./assets/images/tabbar_icon_kuaibao_nor.png")}
        style={styles.tabBarIcon} />)
    })
  },
  Video: {
    screen: createStackNavigator({ VideoScene }),
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "视频",
      tabBarIcon: ({ focused, tintColor }) => (<Image
        resizeMode={'center'}
        source={focused
          ? require("./assets/images/tabbar_icon_video_selected.png")
          : require("./assets/images/tabbar_icon_video_nor.png")}
        style={styles.tabBarIcon} />)
    })
  },
  SmallVideo: {
    screen: createStackNavigator({ SmallVideoScene }),
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "小视频",
      tabBarIcon: ({ focused, tintColor }) => (<Image
        resizeMode={'center'}
        source={focused
          ? require("./assets/images/tab_icon_xiaoshipin_selected.png")
          : require("./assets/images/tab_icon_xiaoshipin_nor.png")}
        style={styles.tabBarIcon} />)
    })
  },
  Read: {
    screen: createStackNavigator({ ReadScene }),
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "悦读",
      tabBarIcon: ({ focused, tintColor }) => (<Image
        resizeMode={'center'}
        source={focused
          ? require("./assets/images/tab_icon_book_selected.png")
          : require("./assets/images/tab_icon_book_nor.png")}
        style={styles.tabBarIcon} />)
    })
  },
  Mine: {
    screen: createStackNavigator({ MineScene }),
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "我的",
      tabBarIcon: ({ focused, tintColor }) => (<Image
        resizeMode={'center'}
        source={focused
          ? require("./assets/images/tabbar_icon_mine_selected.png")
          : require("./assets/images/tabbar_icon_mine_nor.png")}
        style={styles.tabBarIcon} />)
    })
  }
}, {
    backBehavior: false,
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: '#ec5b40',
      inactiveBackgroundColor: "#ffffff",
      activeBackgroundColor: "#ffffff",
      style: {
        borderTopColor: "#e5e6e7"
      }
    }
  })

const Navigator = createStackNavigator({
  Index: {
    screen: Tab,
    navigationOptions: {
      header: null
    }
  }
}, {})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabBarIcon: {
    width: 28,
    height: 28,
    marginBottom: -3
  }
});
