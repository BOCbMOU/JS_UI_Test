import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';

const App = () => {
   const f = () => void 0;

   return (
      <Router>
         <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts/" component={f} />
            <Route path="/posts/:postId" component={f} />
            <Route path="/about/" component={f} />
            <Route path="/users/" component={f} />
            <Route path="/users/self" component={f} />
         </Switch>
      </Router>
   );
};

export default App;