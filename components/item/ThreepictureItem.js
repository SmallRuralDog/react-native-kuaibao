import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

import {Layout} from '../../constants';
import {Image} from "react-native-expo-image-cache";

export default class ThreepictureItem extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {item} = this.props;
        const preview = { uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAABXCAQAAACjUt0DAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAAEgAAABIAEbJaz4AAAAJdnBBZwAAABIAAABXAK421QoAAAFiSURBVEjH1ZbbtoMgDERnKP//yaYPVSAhF077dHQtamU7k0RKAxwcPCF4ItF+tWMNsVZS91uJhNlRX7FGPMgizOrEObJSiZUUAnRkR6q0qnErm7Lhc9UDBaXUt0kN0FOaOo4SQ5BRCahOA3HT5KwTE50GZhV37VazJKYljjE2SE+sPsittC1XW/FmgNVsZJcvuhvrAbLqffNadPXLYgaLzs8wWSo6rk9FYdeBUW/x1DRswfS6ysuNlcDZ7ssTSCpIfDsZn/J8b+Omh8pjR/X8DkuWndwnINpOlukFbtvzVslAEmF+TCMaCC4fkr8oKUgVzmQ4IBojHfqFqwd28O0S6AXA7ib2P+HOTlzLcXZ3+tFz6yRObiOmGY+3k6ev5XN97Uq7FoCXkl5HTrT6tQiw2u1aY/TrZF551jyMFPZiOqW1O5zXiJx1PV/2Tw52tD8ddYc/9Zlq7qhBrlrtuhX/98cbycGBFpNaiv0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTQtMDItMjdUMTc6NDQ6NDErMDg6MDDFbrv7AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE0LTAyLTI3VDE3OjQ0OjQxKzA4OjAwtDMDRwAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=" };
        return (<TouchableHighlight
            underlayColor={"#f3f3f3"}
            style={{backgroundColor: "#ffffff"}}
            onPress={() => {

            }}
        >
            <View style={{paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15}}>
                <Text numberOfLines={3} style={{fontSize: 16.5, lineHeight: 24, color: "#3b3b3b"}}>{item.title}</Text>
                <View style={{flex: 1, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Image style={styles.image} resizeMode={'cover'}
                           uri={item.thumbnails[0].url}  defaultSource={preview}/>
                    <Image style={styles.image} resizeMode={'cover'}
                           uri={item.thumbnails[1].url}  defaultSource={preview}/>
                    <Image style={styles.image} resizeMode={'cover'}
                           uri={item.thumbnails[2].url}  defaultSource={preview}/>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 10
                }}>
                    <View><Text style={{fontSize: 11, color: "#a1a0a1"}}>{item.source_name}</Text></View>
                    <TouchableOpacity
                        style={{
                            height: 13,
                            width: 18,
                            borderRadius: 5,
                            backgroundColor: '#f9f9f9',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => {
                        }}
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
        height: imageW / 1.35,
        borderRadius: 0,
        backgroundColor: "#f7f7f7",
    }
});