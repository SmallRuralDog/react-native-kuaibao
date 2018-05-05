import React, { PureComponent } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ThreepictureItem from './item/ThreepictureItem';
export default class HomeList extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<ScrollView style={{ flex: 1,backgroundColor:"#f7f7f7" }}>
            <ThreepictureItem/>
        </ScrollView>)
    }

}

const styles = StyleSheet.create({});