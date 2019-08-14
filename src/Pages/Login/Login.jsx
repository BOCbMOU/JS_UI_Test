import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// qwe@qwe.com

class Login extends Component {
   state = {
      email: "",
      hashedPassword: ""
   };

   onChange = event => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
   };

   onSubmit = event => {
      event.preventDefault();

      for (const key in this.state) {
         if (this.state[key].length < 1) {
            console.log("All fields required");
            return false;
         }
      }

      this.props.loginUser(this.state);
   };

   render() {
      const { user } = this.props;

      if (user.token) {
         return <Redirect to="/" />;
      }

      return (
         <form className="col-6 ml-auto mr-auto" onSubmit={this.onSubmit}>
            <div className="form-group">
               <label htmlFor="email">Email</label>
               <input
                  name="email"
                  type="email"
                  className="form-control"
                  onChange={this.onChange}
               />
            </div>
            <div className="form-group">
               <label htmlFor="hashedPassword">Password</label>
               <input
                  name="hashedPassword"
                  type="password"
                  className="form-control"
                  onChange={this.onChange}
               />
            </div>
            <button type="submit" className="btn btn-success float-right">
               Login
            </button>
         </form>
      );
   }
}

export default Login;