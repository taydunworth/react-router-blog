
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){
    return (
      <div className="wrapper">
        <header>
          <nav>
            <ul>
              <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
              <li><NavLink activeClassName="active" to="/createpost">Create Post</NavLink></li>
              <li><NavLink activeClassName="active" to="/showallposts">Show All Posts</NavLink></li>
            </ul>
          </nav>
        </header>
        <div>
          {this.props.children}
        </div>
        <footer>
        </footer>
      </div>
    );
  }
}
