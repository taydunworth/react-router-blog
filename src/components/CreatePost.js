import React, { Component } from 'react';

export default class CreatePost extends Component {
  render(){
    return (
      <div className="wrapper">
        <form>
          <label for="author">Author's Name</label>
          <input type="text" name="author"/>
          <label for="title">Blog Title</label>
          <input type="text" name="title"/>
          <label for="post">Blog Post</label>
          <textarea name="post"/>
        </form>
      </div>
    );
  }
}
