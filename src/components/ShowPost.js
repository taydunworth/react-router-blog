import React, { Component } from 'react';

export default class ShowPost extends Component {
  constructor(props) {
  super(props)
  this.state = {
    id: "",
    authorName: "",
    blogTitle: "",
    blogPost: ""
  }
}

componentDidMount() {
    let { id } = this.props.match.params
    let url = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`

    fetch(url).then(results => results.json()).then(res => {
      this.setState({
        id: res._id,
        authorName: res.authorName,
        blogTitle: res.blogTitle,
        blogPost: res.blogPost
      })
    })
  }

  render(){
    return (
      <div className="wrapper">
        {this.state.title}
        {this.state.blogPost}
        {this.state.author}
      </div>
    );
  }
}
