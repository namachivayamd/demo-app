/* eslint-disable no-useless-escape */
/* eslint-disable camelcase */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
  StatusBar,
} from "react-native";
import { connect } from "react-redux";
import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import AuthenticationActions from "App/Stores/Authentication/Actions";
import styles from "./LoginScreenStyle";
import { Colors } from "App/Theme";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      check_emailInputChange: false,
      secureTextEntry: true,
      isValidEmail: true,
      isValidPassword: true,
    };

    this.emailInputChange = this.emailInputChange.bind(this);
    this.handleValidEmail = this.handleValidEmail.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.updateSecureTextEntry = this.updateSecureTextEntry.bind(this);
  }

  emailInputChange(val) {
    if (val.trim().length >= 4) {
      this.setState({
        email: val,
        check_emailInputChange: true,
        isValidEmail: true,
      });
    } else {
      this.setState({
        email: val,
        check_emailInputChange: false,
        isValidEmail: false,
      });
    }
  }

  handlePasswordChange(val) {
    if (val.trim().length >= 6) {
      this.setState({
        password: val,
        isValidPassword: true,
      });
    } else {
      this.setState({
        password: val,
        isValidPassword: false,
      });
    }
  }

  updateSecureTextEntry() {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
    });
  }

  handleValidEmail(val) {
    const re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(val)) {
      this.setState({
        isValidEmail: true,
      });
    } else {
      this.setState({
        isValidEmail: false,
      });
    }
  }

  handleLogin() {
    const email = this.state.email;
    const password = this.state.password;
    if (email.length === 0 || password.length === 0) {
      Alert.alert("Wrong Input!", "Email, or password field cannot be empty.", [
        { text: "Okay" },
      ]);
      return;
    }
    console.log(email, password);
    this.props.authUser(email, password);
  }

  render() {
    const { userErrorMessage } = this.props;
    const {
      check_emailInputChange,
      isValidEmail,
      secureTextEntry,
      isValidPassword,
    } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.text_header}>Welcome to Demo Login!</Text>
        </View>
        {userErrorMessage ? (
          <View>
            <Text style={styles.error}>{userErrorMessage}</Text>
          </View>
        ) : null}
        <Animatable.View
          animation="fadeInUpBig"
          style={[
            styles.footer,
            {
              backgroundColor: Colors.white,
            },
          ]}
        >
          <Text
            style={[
              styles.text_footer,
              {
                color: Colors.black,
                marginTop: 20,
              },
            ]}
          >
            Email
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={Colors.grey} size={20} />
            <TextInput
              placeholder="Email"
              placeholderTextColor={Colors.grey}
              style={[
                styles.textInput,
                {
                  color: Colors.black,
                },
              ]}
              autoCapitalize="none"
              onChangeText={(val) => this.emailInputChange(val)}
              onEndEditing={(e) => this.handleValidEmail(e.nativeEvent.text)}
            />
            {check_emailInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {isValidEmail ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Please enter valid email.</Text>
            </Animatable.View>
          )}

          <Text
            style={[
              styles.text_footer,
              {
                color: Colors.black,
                marginTop: 20,
              },
            ]}
          >
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color={Colors.grey} size={20} />
            <TextInput
              placeholder="Your Password"
              placeholderTextColor={Colors.grey}
              secureTextEntry={secureTextEntry}
              style={[
                styles.textInput,
                {
                  color: Colors.black,
                },
              ]}
              autoCapitalize="none"
              onChangeText={(val) => this.handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={() => this.updateSecureTextEntry()}>
              {secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          {isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Please enter password here.</Text>
            </Animatable.View>
          )}
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => {
                this.handleLogin();
              }}
            >
              <LinearGradient
                colors={["#5F72BE", "#9921E8"]}
                style={styles.signIn}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#fff",
                    },
                  ]}
                >
                  Login
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
  }
}

function mapState(state) {
  const { userErrorMessage } = state;
  return { userErrorMessage };
}

const actionCreators = {
  authUser: AuthenticationActions.authUser,
};

export default connect(mapState, actionCreators)(LoginScreen);
