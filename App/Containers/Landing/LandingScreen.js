/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Platform, Text, View, TouchableOpacity, Image } from "react-native";
import NavigationService from "App/Services/NavigationService";
import Style from "./LandingScreenStyle";
import { ApplicationStyles, Helpers, Images, Metrics } from "App/Theme";

const introduction = Platform.select({
  ios: "This a Demo App to display user mangement actions login",
  android: "This a Demo App to display user mangement actions login",
});

class LandingScreen extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    NavigationService.navigate("LoginScreen");
  }

  render() {
    return (
      <View
        style={[
          Helpers.fillCenter,
          Helpers.rowMain,
          Metrics.mediumHorizontalMargin,
          Metrics.mediumVerticalMargin,
        ]}
      >
        <View>
          <View style={Style.logoContainer}>
            <Image
              style={Helpers.fullSize}
              source={Images.logo}
              resizeMode={"contain"}
            />
          </View>
          <Text style={Style.instructions}>{introduction}</Text>
          <TouchableOpacity
            style={ApplicationStyles.button}
            onPress={() => this.handleClick()}
          >
            <Text style={Style.text}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LandingScreen;
