/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from "./InitialState";
import { createReducer } from "reduxsauce";
import { AuthenticationTypes } from "./Actions";

export const authUserLoading = (state) => ({
  ...state,
  userIsLoading: true,
  userErrorMessage: null,
});

export const authUserSuccess = (state, { user }) => ({
  ...state,
  user: user,
  userIsLoading: false,
  userErrorMessage: null,
});

export const authUserFailure = (state, { errorMessage }) => ({
  ...state,
  user: {},
  userIsLoading: false,
  userErrorMessage: errorMessage,
});

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [AuthenticationTypes.AUTH_USER_LOADING]: authUserLoading,
  [AuthenticationTypes.AUTH_USER_SUCCESS]: authUserSuccess,
  [AuthenticationTypes.AUTH_USER_FAILURE]: authUserFailure,
});
