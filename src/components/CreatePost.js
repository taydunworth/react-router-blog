import React, { Component } from 'react';

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorName: '',
      blogTitle: '',
      blogPost: ''
    }
  }

  _change = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  _addPost = e => {
  e.preventDefault();
  let listItem = JSON.stringify(this.state);

  fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/", {
    method: "POST",
    body: listItem,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  ).then(response => {
    console.log(response, "hooray!");

  }).catch(err => {
    console.log(err, "uh oh!");
  });

  this.setState({authorName: '', blogTitle: '', blogPost: ''});
}

  render(){
    return (
      <div className="wrapper">
        <div className="home-container">
          <div className="side-jumbotron">
            <h1>Lorem Ipsum.</h1>
          </div>
          <form onSubmit={this._addPost}>
              <label htmlFor="authorName">Author Name</label>
              <input type="text" name="authorName" onChange={this._change} value={this.state.authorName} />
              <label htmlFor="blogTitle">Blog Title</label>
              <input type="text" name="blogTitle" onChange={this._change} value={this.state.blogTitle} />
              <label htmlFor="blogPost">Blog Post</label>
              <textarea name="blogPost" onChange={this._change} value={this.state.blogPost} />
              <button type="submit">Post Away!</button>
          </form>
        </div>
      </div>
    );
  }
}
