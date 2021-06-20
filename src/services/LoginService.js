import { API_URL } from "../constant";
import axios from "axios";

// login api
const login = function (logindata) {
  return axios({
    method: "post",
    url: `${API_URL}/login`,
    data: logindata,
  });
};

// forgot password api
const forgotUserPassword = function (userdata) {
  return axios({
    method: "post",
    url: `${API_URL}/forgot-password`,
    data: userdata,
  });
};

// reset user password api
const resetUserPassword = function (userdata) {
  return axios({
    method: "post",
    url: `${API_URL}/reset-password`,
    data: userdata,
  });
};

// verify token api
const verifyToken = function () {
  return axios({
    method: "post",
    url: `${API_URL}/verify-token`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}

// refresh token api
const refreshAccessToken = function(tokendata){
  return axios({
    method: "post",
    url: `${API_URL}/refresh-token`,
    data: tokendata
  });
}

// get user info api
const getUserInfo = function () {
  return axios({
    method: "post",
    url: `${API_URL}/user-info`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}

const LoginService = () => {
  return {
    login,
    forgotUserPassword,
    resetUserPassword,
    verifyToken,
    getUserInfo,
    refreshAccessToken
  };
}

export default LoginService;
