import React, { Component } from 'react';

class Registration extends Component {
   state = {
      username: "",
      email: "",
      rehashedPassword: ""
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

      this.props.registerUser(this.state);
   };

   render() {
      return (
         <form onSubmit={this.onSubmit}>
            <div className="form-group">
               <label htmlFor="username">Username</label>
               <input
                  name="username"
                  type="text"
                  className="form-control"
                  onChange={this.onChange}
               />
            </div>
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
               <label htmlFor="rehashedPassword">Password</label>
               <input
                  name="rehashedPassword"
                  type="password"
                  className="form-control"
                  onChange={this.onChange}
               />
            </div>
            <button type="submit" className="btn btn-success btn-lg">
               Register
            </button>
         </form>
      );
   }
}

export default Registration;