import { Link, Outlet } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation-container">
        <Link id="nav-brand-link" className="nav-link" to="/">T10M</Link>
        <div className="nav-links_container">
          <Link to="/add" className="nav-link">
            Add Movie
          </Link>
          <Link to="/view" className="nav-link">
            View Movies
          </Link>
          <Link to="/auth" className="nav-link">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
