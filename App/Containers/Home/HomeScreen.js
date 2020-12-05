/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";

import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
// import ChartsScreen from './../Charts/ChartsScreen'
import OverviewScreen from "./../Overview/OverviewScreen";

export default createBottomTabNavigator(
  {
    Overview: {
      screen: OverviewScreen,
      navigationOptions: {
        tabBarLabel: "OVERVIEW",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="analytics-outline" color={tintColor} size={24} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "grey",
      style: {
        backgroundColor: "white",
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        elevation: 5,
      },
    },
  }
);
