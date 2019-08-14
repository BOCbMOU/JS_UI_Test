import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import NotificationSystem from './Components/NotificationComponent';
import Navigation from './Components/Navigation';

const App = () => {
   const f = () => void 0;

   return (
      <Fragment>
         <Router>
            <Navigation />
            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/register" component={Registration} />
               <Route path="/login" component={Login} />
               <Route path="/posts/:postId" component={f} />
               <Route path="/about/" component={f} />
               <Route path="/users/" component={f} />
               <Route path="/users/self" component={f} />
            </Switch>
         </Router>
         <NotificationSystem />
      </Fragment>
   );
};

export default App;