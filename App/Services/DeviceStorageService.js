import AsyncStorage from '@react-native-community/async-storage'

const deviceStorage = {
  // our AsyncStorage functions will go here :)
  async saveItem(key, value) {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message)
    }
  },
  async loadJWT() {
    try {
      const value = await AsyncStorage.getItem('userToken')
      console.log(value)
      if (value !== null) {
        return value
      } else {
        return null
      }
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message)
    }
  },
  async deleteJWT() {
    try {
      await AsyncStorage.removeItem('userToken').then(() => {
        console.log('Removed UserToken!')
      })
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message)
    }
  },
  async loadDomain() {
    try {
      const value = await AsyncStorage.getItem('domainName')
      console.log(value)
      if (value !== null) {
        return value
      } else {
        return null
      }
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message)
    }
  },
}

export default deviceStorage
