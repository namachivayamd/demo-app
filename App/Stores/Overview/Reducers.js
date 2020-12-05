/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { OverviewTypes } from './Actions'

export const getCountsLoading = (state) => ({
  ...state,
  countsAreLoading: true,
  countsErrorMessage: null,
})

export const getCountsSuccess = (state, { counts }) => ({
  ...state,
  counts: counts,
  countsAreLoading: false,
  userErrorMessage: null,
})

export const getCountsFailure = (state, { errorMessage }) => ({
  ...state,
  counts: {},
  countsAreLoading: false,
  countsErrorMessage: errorMessage,
})

export const getAIBenefitsChartLoading = (state) => ({
  ...state,
  chartIsLoading: true,
  chartErrorMessage: null,
})

export const getAIBenefitsChartSuccess = (state, { chart }) => ({
  ...state,
  chart: chart,
  chartIsLoading: false,
  chartErrorMessage: null,
})

export const getAIBenefitsChartFailure = (state, { errorMessage }) => ({
  ...state,
  chart: null,
  chartIsLoading: false,
  chartErrorMessage: errorMessage,
})

export const getUsecaseSavingsLoading = (state) => ({
  ...state,
  savingsIsLoading: true,
  savingsErrorMessage: null,
})

export const getUsecaseSavingsSuccess = (state, { savings }) => ({
  ...state,
  savings: savings,
  savingsIsLoading: false,
  savingsErrorMessage: null,
})

export const getUsecaseSavingsFailure = (state, { errorMessage }) => ({
  ...state,
  savings: null,
  savingsIsLoading: false,
  savingsErrorMessage: errorMessage,
})
/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [OverviewTypes.GET_COUNTS_LOADING]: getCountsLoading,
  [OverviewTypes.GET_COUNTS_SUCCESS]: getCountsSuccess,
  [OverviewTypes.GET_COUNTS_FAILURE]: getCountsFailure,

  [OverviewTypes.GET_AI_BENEFITS_CHART_LOADING]: getAIBenefitsChartLoading,
  [OverviewTypes.GET_AI_BENEFITS_CHART_SUCCESS]: getAIBenefitsChartSuccess,
  [OverviewTypes.GET_AI_BENEFITS_CHART_FAILURE]: getAIBenefitsChartFailure,

  [OverviewTypes.GET_USECASE_SAVINGS_LOADING]: getUsecaseSavingsLoading,
  [OverviewTypes.GET_USECASE_SAVINGS_SUCCESS]: getUsecaseSavingsSuccess,
  [OverviewTypes.GET_USECASE_SAVINGS_FAILURE]: getUsecaseSavingsFailure,
})
