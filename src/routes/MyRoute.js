import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Proptypes from 'prop-types';

export default function MyRoute({ component: Component, isClosed, ...rest }) {
  const isLoggedId = false;

  if (isClosed && !isLoggedId) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}
MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: Proptypes.oneOfType([Proptypes.element, Proptypes.func])
    .isRequired,
  isClosed: Proptypes.bool,
};
