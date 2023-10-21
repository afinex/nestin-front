import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const TopNav = () => {
  const history = useHistory();
  const { auth } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const logout = () =>{
    dispatch({
      type : "LOGGED_OUT_USER",
      payload : null,
    });
    window.localStorage.removeItem("auth");
    history.push("/login");
  }

  return (
    <div>
      <header class="p-3 mb-3 border-bottom">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link to="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
              <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
            </Link>

            { auth === null && (<ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><Link to="/" class="nav-link px-2 link-secondary">Home</Link></li>
              <li><Link to="/login" class="nav-link px-2 link-dark">Login</Link></li>
              <li><Link to="/register" class="nav-link px-2 link-dark">Register</Link></li>
            </ul>)}

            
            { auth && (<div class="dropdown text-end">
              <Link to="/profile" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"/>
              </Link>
              <ul class="dropdown-menu text-small">
                <li><Link to="/settings" class="dropdown-item">Settings</Link></li>
                <li><Link to="/profile" class="dropdown-item">Profile</Link></li>
                <li><a onClick={logout} class="dropdown-item">Sign out</a></li>
              </ul>
            </div>)}
          </div>
        </div>
      </header>
    </div>
  );
};

export default TopNav;
