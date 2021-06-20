import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Leftside from './Leftside';
import { connect } from "react-redux";
import { Redirect, Switch, withRouter } from "react-router-dom";
import { userProfile } from "../actions";
import { toast } from 'react-toastify';
import LoginService from "../services/LoginService";
const { getUserInfo, verifyToken, refreshAccessToken } = LoginService();

class Layout extends Component {
  state = {
    isExpired: false
  }
  async componentDidMount() {
    if (localStorage.hasOwnProperty("token") && localStorage.getItem('token')) {
      this.checkTokenExpiry();
      this.getProfileData();
    }
  }

  getProfileData = async () => {
    getUserInfo().then(async (res) => {
      let response = await res;
      if (response.data.status === 200) {
        let userinfo = response.data.result;
        this.props.dispatch(userProfile(userinfo));
      } else {
        toast.error(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    });
  }

  checkTokenExpiry = () => {
    setInterval(() => {
      verifyToken().then(async (res) => {
        let response = await res;
        if (response.data.status === 400) {
          refreshAccessToken({ token: localStorage.getItem("refreshToken")}).then(async(res)=>{
            let resp = await res;
            if (resp.data.status === 200) {
              localStorage.setItem('token', resp.data.result);
            }else{
              this.setState({ isExpired: true });
              localStorage.removeItem("token");
            }
          });
        }
      });
    }, 5000);
  }

  render() {
    if (!localStorage.hasOwnProperty("token") || this.state.isExpired) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="container-scroller">
        <Header />
        <div className="container-fluid page-body-wrapper">
          <Leftside />
          <div className="main-panel">
            <Switch>
              <><div className="content-wrapper">{this.props.children}</div></>
            </Switch>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(withRouter(Layout));