/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { logoutUser } from "../actions";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function Header (props) {
  let history = useHistory();
  const userdata = useSelector((state) => state.updateProfile.userdata);

  // Logout User
  const logoutHandler = () =>{
    localStorage.removeItem('token');
    props.dispatch(logoutUser());
    toast.success("Logout Successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
    history.push('/login');
  }
  
    return (
      <>
        {/* partial:partials/_navbar.html */}
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
          <div className="navbar-brand-wrapper d-flex justify-content-center">
            <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
              <a className="navbar-brand brand-logo" href="index.html">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/logo.svg"}
                  alt="logo"
                />
              </a>
              <a className="navbar-brand brand-logo-mini" href="index.html">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/logo-mini.svg"}
                  alt="logo"
                />
              </a>
              <button
                className="navbar-toggler navbar-toggler align-self-center"
                type="button"
                data-toggle="minimize"
              >
                <span className="mdi mdi-sort-variant" />
              </button>
            </div>
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
            <ul className="navbar-nav mr-lg-4 w-100">
              <li className="nav-item nav-search d-none d-lg-block w-100">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="search">
                      <i className="mdi mdi-magnify" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search now"
                    aria-label="search"
                    aria-describedby="search"
                  />
                </div>
              </li>
            </ul>
            <ul className="navbar-nav navbar-nav-right">
              <li className="nav-item dropdown mr-1">
                <a
                  className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
                  id="messageDropdown"
                  href="#"
                  data-toggle="dropdown"
                >
                  <i className="mdi mdi-message-text mx-0" />
                  <span className="count" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown"
                  aria-labelledby="messageDropdown"
                >
                  <p className="mb-0 font-weight-normal float-left dropdown-header">
                    Messages
                  </p>
                  <a className="dropdown-item">
                    <div className="item-thumbnail">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/faces/face4.jpg"
                        }
                        alt="image"
                        className="profile-pic"
                      />
                    </div>
                    <div className="item-content flex-grow">
                      <h6 className="ellipsis font-weight-normal">
                        David Grey
                      </h6>
                      <p className="font-weight-light small-text text-muted mb-0">
                        The meeting is cancelled
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item">
                    <div className="item-thumbnail">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/faces/face2.jpg"
                        }
                        alt="image"
                        className="profile-pic"
                      />
                    </div>
                    <div className="item-content flex-grow">
                      <h6 className="ellipsis font-weight-normal">Tim Cook</h6>
                      <p className="font-weight-light small-text text-muted mb-0">
                        New product launch
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item">
                    <div className="item-thumbnail">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/faces/face3.jpg"
                        }
                        alt="image"
                        className="profile-pic"
                      />
                    </div>
                    <div className="item-content flex-grow">
                      <h6 className="ellipsis font-weight-normal"> Johnson</h6>
                      <p className="font-weight-light small-text text-muted mb-0">
                        Upcoming board meeting
                      </p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown mr-4">
                <a
                  className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center notification-dropdown"
                  id="notificationDropdown"
                  href="#"
                  data-toggle="dropdown"
                >
                  <i className="mdi mdi-bell mx-0" />
                  <span className="count" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown"
                  aria-labelledby="notificationDropdown"
                >
                  <p className="mb-0 font-weight-normal float-left dropdown-header">
                    Notifications
                  </p>
                  <a className="dropdown-item">
                    <div className="item-thumbnail">
                      <div className="item-icon bg-success">
                        <i className="mdi mdi-information mx-0" />
                      </div>
                    </div>
                    <div className="item-content">
                      <h6 className="font-weight-normal">Application Error</h6>
                      <p className="font-weight-light small-text mb-0 text-muted">
                        Just now
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item">
                    <div className="item-thumbnail">
                      <div className="item-icon bg-warning">
                        <i className="mdi mdi-settings mx-0" />
                      </div>
                    </div>
                    <div className="item-content">
                      <h6 className="font-weight-normal">Settings</h6>
                      <p className="font-weight-light small-text mb-0 text-muted">
                        Private message
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item">
                    <div className="item-thumbnail">
                      <div className="item-icon bg-info">
                        <i className="mdi mdi-account-box mx-0" />
                      </div>
                    </div>
                    <div className="item-content">
                      <h6 className="font-weight-normal">
                        New user registration
                      </h6>
                      <p className="font-weight-light small-text mb-0 text-muted">
                        2 days ago
                      </p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="nav-item nav-profile dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  id="profileDropdown"
                >
                  <img
                    src={
                      userdata &&
                      (userdata.image
                        ? userdata.image
                        : process.env.PUBLIC_URL +
                          "/assets/images/faces/face5.jpg")
                    }
                    alt="profile"
                  />
                  <span className="nav-profile-name">
                    {userdata && userdata.name}
                  </span>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown"
                  aria-labelledby="profileDropdown"
                >
                  <Link to="/profile" className="dropdown-item">
                    <i className="mdi mdi-settings text-primary" />
                    Profile
                  </Link>
                  <a className="dropdown-item" onClick={logoutHandler}>
                    <i className="mdi mdi-logout text-primary" />
                    Logout
                  </a>
                </div>
              </li>
            </ul>
            <button
              className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
              type="button"
              data-toggle="offcanvas"
            >
              <span className="mdi mdi-menu" />
            </button>
          </div>
        </nav>
        {/* partial */}
      </>
    );
  }

export default connect() (withRouter(Header));
