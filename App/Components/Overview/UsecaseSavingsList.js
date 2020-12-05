/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'

class UsecaseSavingsList extends Component {
  constructor(props) {
    super(props)
    this.keyExtractor = this.keyExtractor.bind(this)
    this.renderItem = this.renderItem.bind(this)
  }

  keyExtractor(item, index) {
    index.toString()
  }

  renderItem({ item }) {
    return (
      <ListItem bottomDivider>
        {/* <Avatar source={{ uri: item.avatar_url }} /> */}
        <ListItem.Content>
          <ListItem.Title>{item.usecaseDetail.usecaseName}</ListItem.Title>
          <ListItem.Subtitle>Data Processed : {item.DataProcessCount}</ListItem.Subtitle>
          <ListItem.Subtitle>Total Savings in $: {item.total_ai_savings}</ListItem.Subtitle>
        </ListItem.Content>
        {/* <ListItem.Chevron /> */}
      </ListItem>
    )
  }

  render() {
    const savings = this.props.savings
    console.log(savings)
    return <FlatList keyExtractor={this.keyExtractor} data={savings} renderItem={this.renderItem} />
  }
}
export default UsecaseSavingsList
