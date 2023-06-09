import * as userActions from "./user/user.actions";
import * as favoriteActions from "./favorite/favorite.actions";
import * as authActions from "./auth/auth.actions";
import * as usersActions from "./users/users.actions";

export const allActions = {
  ...authActions,
  ...userActions,
  ...usersActions,
  ...favoriteActions,
};
