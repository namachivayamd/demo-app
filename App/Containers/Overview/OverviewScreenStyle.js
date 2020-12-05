/* eslint-disable react-native/no-color-literals */
import { Dimensions, Platform, StyleSheet } from 'react-native'
import { Metrics, Fonts, Colors } from 'App/Theme'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    borderColor: Colors.grey,
    borderRadius: 5,
    borderWidth: 1,
    flex: 1,
    height: null,
    resizeMode: 'cover',
    width: null,
  },
  imageView: { height: 250, marginTop: 20, width: width - 40 },
  overviewCardHeader: { fontSize: 24, fontWeight: '700', paddingHorizontal: 20 },
  overviewCards: { backgroundColor: 'white', flex: 1, paddingTop: 20 },
  overviewCardsView: { height: 130, marginTop: 20 },
  overviewChart: { marginTop: 40, paddingHorizontal: 20 },
  overviewChartHeader: { fontSize: 24, fontWeight: '700' },
  overviewChartSubHeader: { fontWeight: '100', marginTop: 10 },
  searchBar: {
    backgroundColor: Colors.white,
    elevation: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: Platform.OS === 'android' ? 30 : null,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
  },
  text: {
    ...Fonts.normal,
    color: Colors.white,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  textInput: { backgroundColor: Colors.white, flex: 1, fontWeight: '700' },
})
