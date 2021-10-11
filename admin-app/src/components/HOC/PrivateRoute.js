import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * @author
 * @function PrivateRoute
 **/

const PrivateRoute = ({ component: Component, ...rest }) => {
  //  console.log({ Component });
  return (
    <Route
      {...rest}
      component={props => {
        // console.log(props);
        const token = window.localStorage.getItem('token');
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to={`/signin`} />;
        }
      }}
    />
  );
};
export default PrivateRoute;
