import React, {Component} from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#1976d2" />
        <View
          style={{
            backgroundColor: '#2196f3',
            flexDirection: 'row',
            paddingVertical: 15,
          }}>
          <TouchableOpacity>
            <Icon
              name="bars"
              size={30}
              color="#fafafa"
              style={{marginLeft: 20}}
            />
          </TouchableOpacity>
          <View style={{justifyContent: 'center', marginLeft: 10}}>
            <Text style={{color: '#fafafa', fontSize: 18}}>Home</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default App;
