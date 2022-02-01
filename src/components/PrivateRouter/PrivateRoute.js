import React from 'react';
import {  Route } from 'react-router';
import Login from "../../Login/Login";
import UseAuth from '../firebase/AuthProvider/UseAuth';
import Preloader from '../Preloader';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading} = UseAuth();
    if(isLoading){
      return <Preloader />
    }
    return (
    <Route
       {...rest}
       render={({ location }) => user?.email ? children : <Login />
      //  <Redirect
      //  to={{
      //   pathname: "/login",
      //   state: { from: location }
      // }}
      //  ></Redirect>
      }
    >

    </Route>
    );
};

export default PrivateRoute;