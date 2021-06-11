const initialState = {
  userdata: null,
};

const updatedProfile = (state=initialState,action) =>{
    switch (action.type) {
      case 'PROFILE':
        return {
            ...state,
            userdata:action.userdata
        }

      default:
        return state;
    }
}

export default updatedProfile;