import { put, call } from 'redux-saga/effects'
import OverviewActions from 'App/Stores/Overview/Actions'
import { overviewService } from 'App/Services/OverviewService'
// import NavigationService from 'App/Services/NavigationService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */

export function* getCounts() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(OverviewActions.getCountsLoading())

  // Fetch user informations from an API
  const counts = yield call(overviewService.getCounts)
  if (counts) {
    yield put(OverviewActions.getCountsSuccess(counts))
  } else {
    yield put(OverviewActions.getCountsFailure('There was an error fetching counts.'))
  }
}

export function* getAIBenefitsChart() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(OverviewActions.getAIBenefitsChartLoading())

  // Fetch user informations from an API
  const chart = yield call(overviewService.getAIBenefitsChart)
  if (chart) {
    yield put(OverviewActions.getAIBenefitsChartSuccess(chart))
  } else {
    yield put(OverviewActions.getAIBenefitsChartFailure('There was an error fetching counts.'))
  }
}

export function* getUsecaseSavings() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(OverviewActions.getUsecaseSavingsLoading())

  // Fetch user informations from an API
  const savings = yield call(overviewService.getUsecaseSavings)
  if (savings) {
    yield put(OverviewActions.getUsecaseSavingsSuccess(savings))
  } else {
    yield put(OverviewActions.getUsecaseSavingsFailure('There was an error fetching counts.'))
  }
}
