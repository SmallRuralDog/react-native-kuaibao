import React, { PureComponent } from 'react';
import { View, Image, Text, ScrollView, StyleSheet, TouchableOpacity,TouchableHighlight  } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import { pxToDp } from '../../lib';
import { Layout } from '../../constants';


export default class ThreepictureItem extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (<TouchableHighlight
            underlayColor={"#dcdcdc"}
            style={{ backgroundColor: "#ffffff" }}
            onPress={() => {

            }}
        >
            <View style={{ paddingTop: 15, paddingBottom: 15, paddingLeft: 15, paddingRight: 15 }}>
                <Text style={{ fontSize: 16.5, lineHeight: 24, color: "#3b3b3b" }}>重大消息！普金罕见前往中国“借”航母，美国担心的事情发生了！</Text>
                <View style={{ flex: 1,height: imageW / 1.4, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Image style={styles.image} resizeMode={'cover'}
                           source={{ url: 'https://p3.pstatp.com/list/pgc-image/1525485596186fe4221ad1c' }} />
                    <Image style={styles.image} resizeMode={'cover'}
                           source={{ url: 'https://p3.pstatp.com/list/pgc-image/152548559685452a7b27d37' }} />
                    <Image style={styles.image} resizeMode={'cover'}
                           source={{ url: 'https://p3.pstatp.com/list/pgc-image/1525485597771d13b36d4e2' }} />
                </View>
                <View style={{ flexDirection: 'row',alignItems:'center',justifyContent: 'space-between', marginTop: 10 }}>
                    <View><Text style={{ fontSize: 11, color: "#a1a0a1" }}>每日新奇军事文化</Text></View>
                    <TouchableOpacity
                        style={{height:13,width:18,borderRadius:5,backgroundColor:'#f9f9f9',alignItems:'center',justifyContent:'center'}}
                        onPress={()=>{}}
                    >
                        <Ionicons name={'ios-close'} size={12} color={"#c8c8c8"}/>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableHighlight>)
    }

}

const imageW = (Layout.window.width - 32) / 3;

const styles = StyleSheet.create({
    image: {
        width: imageW,
        height: imageW / 1.4,
        borderRadius: 1
    }
});