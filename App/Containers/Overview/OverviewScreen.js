/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-deprecated */
import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  RefreshControl,
} from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import OverviewActions from "App/Stores/Overview/Actions";

import Style from "./OverviewScreenStyle";
import { Helpers, Colors } from "App/Theme";

class OverviewScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };

    this.handleRefersh = this.handleRefersh.bind(this);
  }

  handleRefersh() {
    this.setState({
      refreshing: false,
    });
  }

  componentDidMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS === "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }

  render() {
    const { overview } = this.props;
    console.log(overview);
    return (
      <SafeAreaView style={Helpers.fill}>
        <View style={Helpers.fill}>
          <View
            style={{
              height: this.startHeaderHeight,
              backgroundColor: Colors.white,
              borderBottomWidth: 1,
              borderBottomColor: Colors.grey,
            }}
          >
            <View style={Style.searchBar}>
              <Icon
                name="ios-search"
                size={20}
                style={{ marginRight: 10, marginTop: 15 }}
              />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Search..."
                placeholderTextColor="grey"
                style={Style.textInput}
              />
            </View>
          </View>
          <ScrollView
            scrollEventThrottle={16}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefersh}
              />
            }
          >
            <View style={Style.overviewCards}>
              <Text style={Style.overviewCardHeader}>Overview</Text>

              <View style={Style.overviewChart}>
                <Text style={Style.overviewChartHeader}>Overall Benifits</Text>
                <Text style={Style.overviewChartSubHeader}>Benifits</Text>
              </View>
              <View style={Style.overviewChart}>
                <Text style={Style.overviewChartHeader}>Recent Updates</Text>
                <Text style={Style.overviewChartSubHeader}>
                  Latest Notifications
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

function mapState(state) {
  const { overview } = state;
  return { overview };
}

const actionCreators = {
  getCounts: OverviewActions.getCounts,
  getAIBenefitsChart: OverviewActions.getAIBenefitsChart,
  getUsecaseSavings: OverviewActions.getUsecaseSavings,
};

export default connect(mapState, actionCreators)(OverviewScreen);
