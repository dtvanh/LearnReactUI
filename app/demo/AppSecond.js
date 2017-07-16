import React, {
	Component,
} from 'react';

import {
  Text,
  StyleSheet,
  View,
  Button,
  Image
} from 'react-native';

class AppSecond extends Component {

  render() {

    const {container, yellow, red, aHalf, blue, stretch } = styles;

    return (
      <View style={[ container, yellow]}>

          <View>
            <Text>Fix broken park Bench</Text>
            <Text>Fix broken park Bench</Text>
            <Text>Fix broken park Bench</Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                style = {stretch}
                source={require('../../asset/images/phone.png')}
              />
              <Text>Due 5 pm today</Text>
              <Text>Icon</Text>
            </View>
          </View>

          <View style= {{ width: 30, height: 30, backgroundColor: 'gray'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stretch: {
      width: 20,
      height: 20
  },

  container: {
    flex: 1.0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  yellow: {
    backgroundColor: 'yellow'
  },

  red: {
    backgroundColor: 'red'
  },

  blue: {
    backgroundColor: 'blue'
  },

  aHalf:{
    flex: 0.5
  }
});

export default AppSecond;
