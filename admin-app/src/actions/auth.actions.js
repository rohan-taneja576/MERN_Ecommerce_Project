import { userAuthConstants } from './constants';

export const login = user => {
  return async dispatch => {
    dispatch({
      type: userAuthConstants.LOGIN_REQUEST,
      payload: {
        ...user,
      },
    });
  };
};
