const initialState = {
    isLogin:false,
    token:null
};

const authentication = (state=initialState,action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          token: action.token,
          isLogin:action.isLogin
        };  

      case "LOGOUT":
        return {
          ...state,
          token: action.token,
          isLogin: action.isLogin,
        }; 

      default:
        return state;
    }
}

export default authentication;