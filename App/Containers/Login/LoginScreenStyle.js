/* eslint-disable react-native/no-color-literals */
import { StyleSheet, Platform } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  action: {
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 5,
  },
  actionError: {
    borderBottomColor: '#FF0000',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 5,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  error: {
    ...Fonts.normal,
    color: Colors.error,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  footer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 3,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  instructions: {
    ...Fonts.normal,
    fontStyle: 'italic',
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  logoContainer: {
    ...Helpers.fullWidth,
    height: 300,
    marginBottom: 25,
  },
  result: {
    ...Fonts.normal,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  signIn: {
    alignItems: 'center',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    ...Fonts.normal,
    color: Colors.white,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  textInput: {
    color: '#05375a',
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  text_header: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
})
