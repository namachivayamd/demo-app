/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

const { width } = Dimensions.get('window')

class AIBenefitsChart extends Component {
  render() {
    const chartData = this.props
    console.log(chartData.chartData.chart)
    const chartLabels = chartData.chartData.chart.map((item) => {
      return item.time_period
    })
    console.log(chartLabels)
    const chartInput = chartData.chartData.chart.map((item) => {
      return item.total_benefit
    })
    console.log(chartInput)
    return (
      <View style={styles.container}>
        <Text>{chartData.chartData.chart[0].use_case_name}</Text>
        <LineChart
          data={{
            labels: chartLabels,
            datasets: [
              {
                data: chartInput[0],
              },
            ],
          }}
          width={width - 50} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 20,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    )
  }
}
export default AIBenefitsChart

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})
