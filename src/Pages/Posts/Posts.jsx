import React, { Component, Fragment } from "react";

class Posts extends Component {
  componentDidMount() {
    this.props.getPostsList(this.props.user);
  }

  render() {
    const { posts } = this.props;
    return (
       <Fragment>
          {posts.map(item => <p>{item._id}</p>)}
       </Fragment>
    );
  }
}

export default Posts;