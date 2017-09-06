import React, { Component } from 'react';

export default class CreatePost extends Component {
  render(){
    return (
      <div className="wrapper">
        <div className="home-container">
          <div className="side-jumbotron">
            <h1>Lorem Ipsum.</h1>
          </div>
          <form>
              <label for="author">Author Name</label>
              <input type="text" name="author"/>
              <label for="title">Blog Title</label>
              <input type="text" name="title"/>
              <label for="post">Blog Post</label>
              <textarea name="post"/>
              <button type="submit" onClick="">Post Away!</button>
          </form>
        </div>
      </div>
    );
  }
}
