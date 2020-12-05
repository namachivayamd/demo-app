/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/prop-types */
import { Body, Card, CardItem } from 'native-base'
import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Category extends Component {
  render() {
    return (
      <View
        style={{
          height: 130,
          width: 130,
          marginLeft: 20,
          borderWidth: 0.5,
          borderColor: '#dddddd',
        }}
      >
        <View style={{ flex: 2 }}>
          <Card>
            <CardItem>
              <Body>
                <Text>{this.props.counts}</Text>
              </Body>
            </CardItem>
          </Card>
        </View>
        <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
          <Text>{this.props.name}</Text>
        </View>
      </View>
    )
  }
}
export default Category
