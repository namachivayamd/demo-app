/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import {
  View,
  FlatList,
  RefreshControl,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";
// import NotificationsActions from "App/Stores/Notifications/Actions";

class NotificationsListView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
    };

    this.arrayholder = [];
    this.handleRefersh = this.handleRefersh.bind(this);
  }

  handleRefersh() {
    this.setState({
      refreshing: false,
    });
    this.props.getNotificationsList();
    this.makeRemoteRequest();
  }

  // eslint-disable-next-line camelcase
  componentDidMount() {
    this.props.getNotificationsList();
    this.makeRemoteRequest();
  }

  makeRemoteRequest() {
    const notificationsList = this.props.notifications.notificationsList;
    console.log(notificationsList);
    this.setState({ loading: true });

    if (notificationsList) {
      this.setState({
        data: notificationsList,
        // error: res.error || null,
        loading: false,
      });
      this.arrayholder = notificationsList;
    }
  }

  renderSeparator() {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%",
        }}
      />
    );
  }

  renderItem({ item }) {
    return (
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{item.notificationText}</ListItem.Title>
          <ListItem.Subtitle>{item.createdBy}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  }

  keyExtractor(item, index) {
    index.toString();
  }

  render() {
    const { notifications } = this.props;
    console.log(notifications.notificationsList);
    return (
      <ScrollView
        scrollEventThrottle={16}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefersh}
          />
        }
      >
        <View style={{ flex: 1 }}>
          {notifications.notificationsListIsLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <FlatList
              data={this.state.data}
              renderItem={this.renderItem.bind(this)}
              keyExtractor={this.keyExtractor.bind(this)}
              ItemSeparatorComponent={this.renderSeparator.bind(this)}
            />
          )}
        </View>
      </ScrollView>
    );
  }
}

function mapState(state) {
  // const { notifications } = state;
  // return { notifications };
}

const actionCreators = {
  // getNotificationsList: NotificationsActions.getNotificationsList,
};

export default connect(mapState, actionCreators)(NotificationsListView);
