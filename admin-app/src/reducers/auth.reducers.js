import { userAuthConstants } from '../actions/constants';

const initialState = {
  token: null,
  user: {
    firstName: '',
    lastName: '',
    email: '',
    picture: '',
  },
  authenticate: false,
  authenticating: false,
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case userAuthConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case userAuthConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      };
      break;
    case userAuthConstants.LOGIN_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        authenticating: false,
        authenticate: false,
      };
      break;

    default:
      return state;
  }
  return state;
};

export default reducer;
