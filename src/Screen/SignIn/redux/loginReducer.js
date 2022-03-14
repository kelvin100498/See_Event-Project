const initialState = {
  isLogin: false,
  token: '',
};
const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
      };

    case 'loginSuccess':
      return {
        ...state,
        isLogin: true,
        token: action.payload,
      };

    case 'loginFailed':
      return {
        ...state,
        isLogin: false,
      };

    case 'LOGOUT':
      return {
        ...state,
        isLogin: false,
        token: '',
      };

    default:
      return state;
  }
};

export default LoginReducer;
