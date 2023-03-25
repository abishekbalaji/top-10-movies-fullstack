import { createSelector } from "reselect";

const userReducer = (state) => state.user;

export const selectCurrentUser = createSelector(
  [userReducer],
  (userSlice) => userSlice.currentUser
);

export const selectIsUserLoading = createSelector(
  [userReducer],
  (userSlice) => userSlice.isLoading
);
