import React, { Component } from 'react';

class Users extends Component {
    componentDidMount() {
        this.props.getSelf(this.props.user.token);
    }

    render() {
        const { info } = this.props.user;

        if (!info) {
            return (
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            );
        }

        const { id, email, username, createdAt } = info;

        return (
            <div>
                <h2>{username}</h2>
                <p>{id}</p>
                <p>{email}</p>
                <p>{createdAt}</p>
            </div>
        );
    }
}

export default Users;