const initialState = {
  userDetails: {},
  isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DETAILS":
      return {
        ...state,
        userDetails: action.payload,
      };
    case "SET_LOGIN_STATUS":
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case "EDIT_USER_DETAILS":
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
