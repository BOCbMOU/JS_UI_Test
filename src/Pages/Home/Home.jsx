import React, { Component } from "react";
import Posts from "../Posts";

class Home extends Component {
  render() {
    return <Posts type={'search'} />;
  }
}

export default Home;