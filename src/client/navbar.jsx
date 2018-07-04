import React from 'react';

export default class NavBarReact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light navbar-style">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="navbar-brand" href="#">How-to Guide</a>
                </li>
            </ul>
        </nav>
    );
  }
}