import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PostList extends Component {
  constructor(props) {
  super(props)
  this.state = {
    postsList: []
  }
}

componentDidMount() {
  let url = "https://tiny-lasagna-server.herokuapp.com/collections/blogger/"
  fetch(url).then(results => results.json()).then(postsList => {
    this.setState({ postsList })
  })
}
render(){
  const postsList = this.state.postsList.map(postItem => {
    return (
      <div key={postItem._id}>
        <Link to={`/showpost/${postItem._id}`}>
          {postItem.blogTitle}
        </Link>
        <p>
          <strong>Author:</strong>{postItem.authorName}
        </p>
        <p>
          <strong>Post:</strong>{postItem.blogPost}
        </p>
      </div>
    )
  })
    return (
      <div className="wrapper">
        {postsList}
      </div>
    )
  }
}
