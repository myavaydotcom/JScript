import React, { Component } from 'react';
import { View, Button } from 'react-native';

const App = (props) => {
    return (
        <View>
            <Button title="click here" onPress={() => null} />
            <Xyz name={"Anonymous"} />
        </View>
    )
}

class Xyz extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Button title={this.props.name} onPress={() => null} />
            </View>
        )
    }
}
export default App;