import { createAppContainer, createStackNavigator } from 'react-navigation'

import LoginScreen from 'App/Containers/Login/LoginScreen'
import LandingScreen from 'App/Containers/Landing/LandingScreen'
import HomeScreen from 'App/Containers/Home/HomeScreen'
import DeepLinkingScreen from 'App/Containers/DeepLinking/DeepLinkingScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    MainScreen: {
      screen: LandingScreen,
    },
    HomeScreen: {
      screen: HomeScreen,
    },
    DeepLinkingScreen: {
      screen: DeepLinkingScreen,
      path: 'deeplink',
    },
    LoginScreen: {
      screen: LoginScreen,
    },
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
