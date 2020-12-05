import { createActions } from 'reduxsauce'
const { Types, Creators } = createActions({
  getCounts: null,
  getCountsLoading: null,
  getCountsSuccess: ['counts'],
  getCountsFailure: ['errorMessage'],

  getAIBenefitsChart: null,
  getAIBenefitsChartLoading: null,
  getAIBenefitsChartSuccess: ['chart'],
  getAIBenefitsChartFailure: ['errorMessage'],

  getUsecaseSavings: null,
  getUsecaseSavingsLoading: null,
  getUsecaseSavingsSuccess: ['savings'],
  getUsecaseSavingsFailure: ['errorMessage'],
})

export const OverviewTypes = Types
export default Creators
