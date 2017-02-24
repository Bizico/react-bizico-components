import React from 'react';
import {NavLink} from 'react-router-dom'

class NavBarLink extends React.Component {
  render() {
    const {children, ...props} = this.props;

    return (
      <li>
        <NavLink activeClassName={'active'} {...props}>{children}</NavLink>
      </li>
    );
  }
}

export {
  NavBarLink
}