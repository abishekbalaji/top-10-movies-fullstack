import {
  createUserDocumentFromAuth,
  signInUserWithGooglePopup,
  signOutUser,
} from "../../utils/firebase/firebase";
import createAction from "../../utils/helpers/createAction";
import USER_ACTION_TYPES from "./userTypes";

export const fetchCurrentUserStart = () =>
  createAction(USER_ACTION_TYPES.FETCH_CURRENT_USER_START);

export const fetchCurrentUserSuccess = (user) =>
  createAction(USER_ACTION_TYPES.FETCH_CURRENT_USER_SUCCESS, user);

export const fetchCurrentUserFailed = (error) =>
  createAction(USER_ACTION_TYPES.FETCH_CURRENT_USER_FAILED, error);

export const signInWithGoogleAsync = () => async (dispatch) => {
  dispatch(fetchCurrentUserStart());
  try {
    const user = await signInUserWithGooglePopup();
    console.log(user.user);
    if (user) {
      await createUserDocumentFromAuth(user.user);
    }
    dispatch(fetchCurrentUserSuccess(user.user));
  } catch (error) {
    console.log(error);
    dispatch(fetchCurrentUserFailed(error));
  }
};

export const signOutUserAsync = () => async (dispatch) => {
  dispatch(fetchCurrentUserStart());
  try {
    await signOutUser();
    dispatch(fetchCurrentUserSuccess(null));
  } catch (error) {
    console.log(error);
    dispatch(fetchCurrentUserFailed(error));
  }
};
