import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../Pages/Home';
import Login from '../../Pages/Login';
import Registration from '../../Pages/Registration';
import Users from '../../Pages/Users';
import About from '../../Pages/About';
import NotificationSystem from '../NotificationComponent';
import Navigation from '../Navigation';
import PrivateRoute from '../PrivateRoute';
import Posts from '../../Pages/Posts';

const App = ({ user, logout }) => {
   const temp404 = () => <h1>404: Page Not Found</h1>;

   return (
      <Fragment>
         <Router>
            <Navigation user={user} logout={logout} />
            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/register" component={Registration} />
               <Route path="/login" component={Login} />
               <Route path="/posts" component={Posts} />
               <Route path="/posts/:postId" component={temp404} />
               <Route path="/about/" component={About} />
               <PrivateRoute path="/users/self" component={Users} />
               <Route path="/users/" component={temp404} />
               <Route path="/" component={temp404} />
            </Switch>
         </Router>
         <NotificationSystem />
      </Fragment>
   );
};

export default App;