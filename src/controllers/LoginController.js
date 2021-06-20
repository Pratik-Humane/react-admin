import LoginService from "../services/LoginService";
import { toast } from "react-toastify";
import { loginUser, userProfile } from "../actions";
import { useHistory, useParams } from "react-router-dom";

const { login, forgotUserPassword, resetUserPassword, getUserInfo } =
  LoginService();

let action = {};
let history = {};
let ver_code = String;

// login functionality
const loginHandler = (logindata,e) => {
  e.preventDefault();
  login(logindata).then(async (res) => {
    let response = await res;
    if (response.data.status === 200) {
      localStorage.setItem("token", response.data.result);
      localStorage.setItem("refreshToken", response.data.refresh);
      action.dispatch(loginUser(response.data.result));
      toast.success(response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      history.push("/dashboard");
    } else {
      toast.error(response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  });
};

// Forgot Password Action
const forgotPassword = (userdata,e) =>{
    e.preventDefault();
    forgotUserPassword(userdata).then(async (res) => {
      let response = await res;
      if (response.data.status === 200) {
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        document.getElementById("femail").value = "";
      } else {
        toast.error(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    });
}

// Reset Password 
const resetPassword = (userdata, e) => {
  e.preventDefault();
  userdata.verification_code = ver_code;
  resetUserPassword(userdata).then(async (res) => {
    let response = await res;
    if (response.data.status === 200) {
      toast.success(response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      history.push("/login");
    } else {
      toast.error(response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  });
};

const getUserProfileData = async () => {
  getUserInfo().then(async (res) => {
    let response = await res;
    if (response.data.status === 200) {
      let userinfo = response.data.result;
      action.dispatch(userProfile(userinfo));
    } 
  });
};


// implementing framework logic
const LoginController = (props) => {
    action = props;
    history = useHistory();
    let { verification_code } = useParams();
    ver_code = verification_code;

    return {
      loginHandler,
      forgotPassword,
      resetPassword,
      getUserProfileData,
    };
}

export default LoginController;


