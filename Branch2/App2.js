import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native';

export default class App2 extends React.Component{
    render(){
        return (
            <View>
                <TouchableOpacity onPress={() => null}>
                    <Text>click me</Text>
                </TouchableOpacity>
            </View>
        )
    }
}