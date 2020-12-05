import { takeLatest, all } from "redux-saga/effects";
import { AuthenticationTypes } from "App/Stores/Authentication/Actions";
import { OverviewTypes } from "App/Stores/Overview/Actions";
import { StartupTypes } from "App/Stores/Startup/Actions";
import { startup } from "./StartupSaga";
import { authUser } from "./AuthenticationSaga";
import {
  getCounts,
  getAIBenefitsChart,
  getUsecaseSavings,
} from "./OverviewSaga";

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(AuthenticationTypes.AUTH_USER, authUser),
    takeLatest(OverviewTypes.GET_COUNTS, getCounts),
    takeLatest(OverviewTypes.GET_AI_BENEFITS_CHART, getAIBenefitsChart),
    takeLatest(OverviewTypes.GET_USECASE_SAVINGS, getUsecaseSavings),
  ]);
}
