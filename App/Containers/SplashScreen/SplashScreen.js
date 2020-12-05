import React from 'react'
import { Image, View } from 'react-native'
import styles from './SplashScreenStyle'
import { Helpers, Images } from 'App/Theme'

const SplashScreen = () => (
  <View style={[Helpers.fillRowCenter, styles.container]}>
    <View style={[Helpers.center, styles.logo]}>
      {/* You will probably want to insert your logo here */}
      <Image style={Helpers.mediumSize} source={Images.logo} resizeMode={'contain'} />
    </View>
  </View>
)

export default SplashScreen
