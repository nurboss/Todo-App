import React from 'react';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import AuthPorver from './components/firebase/AuthProvider/AuthPorver';
import Header from './components/Header/Header';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRouter/PrivateRoute';


const App = () => {  
  return (
    <AuthPorver>
    <Router>
      <Switch>
        <PrivateRoute path="/">
        <Header></Header>
          <Home></Home>
        </PrivateRoute>
      </Switch>
    </Router>
    </AuthPorver>
  );
};

export default App;