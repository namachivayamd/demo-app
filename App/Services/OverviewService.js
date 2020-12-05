import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'
import DeviceInfo from 'react-native-device-info'
import deviceStorage from './DeviceStorageService'

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)

async function getCounts() {
  const domain = await deviceStorage.loadDomain()
  const userToken = await deviceStorage.loadJWT()
  const requestOptions = {
    method: 'GET',
    headers: { 'x-access-token': userToken.slice(1, -1), referer: `https://${domain}.probyto.com` },
    deviceInfo: DeviceInfo.getUniqueId(),
  }
  console.log(requestOptions)
  return fetch(`${Config.BACKEND_API_URL}/fetchDetailsAiOverview?rows=3`, requestOptions).then(
    handleResponse
  )
}

async function getAIBenefitsChart() {
  const domain = await deviceStorage.loadDomain()
  const userToken = await deviceStorage.loadJWT()
  const requestOptions = {
    method: 'GET',
    headers: { 'x-access-token': userToken.slice(1, -1), referer: `https://${domain}.probyto.com` },
    deviceInfo: DeviceInfo.getUniqueId(),
  }
  console.log(requestOptions)
  return fetch(`${Config.BACKEND_API_URL}/fetchAiBenefitsCharts`, requestOptions).then(
    handleResponse
  )
}

async function getUsecaseSavings() {
  const domain = await deviceStorage.loadDomain()
  const userToken = await deviceStorage.loadJWT()
  const requestOptions = {
    method: 'GET',
    headers: { 'x-access-token': userToken.slice(1, -1), referer: `https://${domain}.probyto.com` },
    deviceInfo: DeviceInfo.getUniqueId(),
  }
  console.log(requestOptions)
  return fetch(`${Config.BACKEND_API_URL}/fetchUsecaseSavings`, requestOptions).then(handleResponse)
}

function handleResponse(response) {
  console.log(response)
  return response.text().then((text) => {
    const data = text && JSON.parse(text)
    console.log(data)

    if (in200s(response.status)) {
      return data
    }
    return null
  })
}

export const overviewService = {
  getCounts,
  getAIBenefitsChart,
  getUsecaseSavings,
}
