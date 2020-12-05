import { put, call } from 'redux-saga/effects'
import AuthenticationActions from 'App/Stores/Authentication/Actions'
import { authenticationService } from 'App/Services/AuthenticationService'
import NavigationService from 'App/Services/NavigationService'
/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */

export function* authUser(domain, email, password) {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(AuthenticationActions.authUserLoading())

  // Fetch user informations from an API
  const user = yield call(authenticationService.authUser, domain, email, password)
  if (user) {
    yield put(AuthenticationActions.authUserSuccess(user))
    NavigationService.navigate('HomeScreen')
  } else {
    NavigationService.navigateandreset('LoginScreen')
    yield put(
      AuthenticationActions.authUserFailure('There was an error while authenticating user.')
    )
  }
}
