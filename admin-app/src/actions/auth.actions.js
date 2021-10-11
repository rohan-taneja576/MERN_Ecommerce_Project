import { userAuthConstants } from './constants';
import axios from '../helpers/index';

export const login = user => {
  console.log(user);
  return async dispatch => {
    dispatch({ type: userAuthConstants.LOGIN_REQUEST });
    const res = await axios.post(`/admin/signin`, {
      ...user,
    });
    console.log('res', res);
    if (res.status === 200) {
      const { token, user } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({
        type: userAuthConstants.LOGIN_SUCCESS,
        payload: {
          user,
          token,
        },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: userAuthConstants.LOGIN_FAILURE,
          payload: {
            error: res.data.error,
          },
        });
      }
    }
  };
};

export const isUserLoggedIn = () => {
  return async dispatch => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = JSON.parse(localStorage.getItem('user'));
      dispatch({
        type: userAuthConstants.LOGIN_SUCCESS,
        payload: {
          user,
          token,
        },
      });
    } else {
      dispatch({
        type: userAuthConstants.LOGIN_FAILURE,
        payload: {
          error: 'User need to be LOGIN',
        },
      });
    }
  };
};
