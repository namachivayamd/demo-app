import { combineReducers } from "redux";
import configureStore from "./CreateStore";
import rootSaga from "App/Sagas";
import { reducer as AuthenticationReducer } from "./Authentication/Reducers";
import { reducer as OverviewReducer } from "./Overview/Reducers";

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    authentication: AuthenticationReducer,
    overview: OverviewReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
