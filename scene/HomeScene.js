import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet, PixelRatio } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from "react-native-scrollable-tab-view"
import { pxToDp } from '../lib'
import HomeList from '../components/HomeList';

const logoH = 80;
export default class HomeScene extends PureComponent {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            headerTitle: () => (
                <View style={styles.header_title_view}>
                    <Image
                        source={require('../assets/images/logo.png')}
                        style={styles.logo}
                        resizeMode='center' />
                    <View style={styles.search_view}>
                        <Feather
                            style={{
                                margin: 0,
                                fontWeight: 'bold'
                            }}
                            name="search"
                            size={16}
                            color="#c0c4ca" />
                        <Text
                            style={{
                                fontSize: 12,
                                color: "#b0b1b9",
                                marginLeft: 8
                            }}>{params ? params.search_desc : '搜索你喜欢的内容'}</Text>
                    </View>
                </View>
            ),
            headerStyle: {
                borderBottomWidth: 0,
                backgroundColor: "#ffffff"
            }
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            label: ['推荐', '新品', '居家', '餐厨/家居', '配件', '服装', '电器', '洗护', '杂货', '饮食', '婴童', '志趣'],
        }
    }

    render() {
        return (
            <ScrollableTabView
                renderTabBar={() => <ScrollableTabBar
                    tabStyle={{
                        height: pxToDp(95),
                        paddingLeft: 10,
                        paddingRight: 10,
                    }}
                    style={{ height: pxToDp(95), borderWidth: 1 / PixelRatio.get(), borderColor: "#f0f0f0" }}
                />}
                tabBarBackgroundColor='#fff'
                tabBarActiveTextColor='#ea2d2b'
                tabBarInactiveTextColor='#888896'
                tabBarUnderlineStyle={styles.tabBarUnderline}
                tabBarTextStyle={styles.tabBarTextStyle}
            >
                {this.state.label.map((item, index) => {
                    return (<HomeList tabLabel={item} key={index} />)
                })}

            </ScrollableTabView>
        );
    }
}
const styles = StyleSheet.create({
    header_title_view: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15
    },
    logo: {
        width: pxToDp(logoH / (78 / 116)),
        height: pxToDp(logoH)
    },
    search_view: {
        backgroundColor: '#f3f4f7',
        height: pxToDp(logoH),
        marginLeft: 15,
        flex: 1,
        paddingLeft: 10,
        flexDirection: 'row',
        borderRadius: 4,
        alignItems: 'center'
    },
    tabBarUnderline: {
        height: 2.5,
        borderRadius: 5,
        backgroundColor: "#ea2d2b"
    },
    tabBarTextStyle: {
        fontSize: 14.5,

        height: 20
    }
})