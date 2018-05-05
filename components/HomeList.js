import React, { PureComponent } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default class HomeList extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (<ScrollView style={{ flex: 1 }}>
            <Text>123</Text>
        </ScrollView>)
    }

}

const styles = StyleSheet.create({});