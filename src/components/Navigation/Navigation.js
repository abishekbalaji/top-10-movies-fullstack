import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { signOutUserAsync } from "../../store/user/userActions";
import {
  selectCurrentUser,
  selectIsUserLoading,
} from "../../store/user/userSelectors";
import Spinner from "../Spinner/Spinner";
import "./Navigation.scss";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isUserLoading = useSelector(selectIsUserLoading);

  const dispatch = useDispatch();

  const handleSignOut = () => dispatch(signOutUserAsync());

  return (
    <>
      <div className="navigation-container">
        <Link id="nav-brand-link" className="nav-link" to="/">
          T10M
        </Link>
        <div className="nav-links_container">
          <Link to="/add" className="nav-link">
            Add Movie
          </Link>
          <Link to="/view" className="nav-link">
            View Movies
          </Link>
          {isUserLoading ? (
            <Spinner />
          ) : (
            <>
              {currentUser ? (
                <span className="nav-sign-out-span" onClick={handleSignOut}>
                  Sign Out
                </span>
              ) : (
                <Link to="/auth" className="nav-link">
                  Sign In
                </Link>
              )}
            </>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
