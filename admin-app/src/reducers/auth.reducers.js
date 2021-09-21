import { userAuthConstants } from '../actions/constants';

const initialState = {
  name: 'Ronny',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case userAuthConstants.LOGIN_REQUEST:
      state = {
        ...state,
        ...action.payload,
      };
      break;
  }
  return state;
};
