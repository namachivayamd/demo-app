import { Config } from "App/Config";
import { is, curryN, gte } from "ramda";
import DeviceInfo from "react-native-device-info";
import deviceStorage from "./DeviceStorageService";

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number);
  return (
    isNumber(min) &&
    isNumber(max) &&
    isNumber(value) &&
    gte(value, min) &&
    gte(max, value)
  );
});
const in200s = isWithin(200, 299);

function authUser(user) {
  const email = user.email;
  const password = user.password;
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: email, password: password }),
    deviceInfo: DeviceInfo.getUniqueId(),
    // referrer: Config.REFERRER,
  };
  console.log(requestOptions);
  return fetch(
    "https://user-managem-master-010fjfm6kl.herokuapp.com/users/authenticate",
    requestOptions
  )
    .then(handleResponse)
    .then((user) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      // deviceStorage.saveItem("userToken", JSON.stringify(user.token));

      console.log(user)
      return user;
    });
}

function handleResponse(response) {
  // console.log(response)
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    // console.log(data)

    if (in200s(response.status)) {
      return data;
    }
    return null;
  });
}

export const authenticationService = {
  authUser,
};
