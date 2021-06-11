const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const PROFILE = 'PROFILE';
let isLogin = false;
export const loginUser = (token=null) => {
    return {
      type: LOGIN,
      isLogin: !isLogin,
      token
    };
}

export const logoutUser = (isLogin=true) => {
    return {
        type:LOGOUT,
        isLogin:!isLogin,
        token:null,
    };
}

export const userProfile = (userdata=null) => {
    return {
      type: PROFILE,
      userdata,
    };
}