import React from 'react';
import bookShelf from "../images/todo.png";
import { FcGoogle } from "react-icons/fc";
import UseAuth from '../components/firebase/AuthProvider/UseAuth';

const Login = () => {
    const { signInUsingGoogle } = UseAuth();
    return (
      <>
      <div className='d-flex flex-column align-items-center justify-content-center' style={{ height: "100vh" }}>
      
      <h5 className='mb-4'>
      Todo<strong className='login-title'> App</strong> Using React-Redux
      </h5>
      
      <img className='img-fluid todo-img' src={bookShelf} alt='' />
      

      <button onClick={signInUsingGoogle} className='btn btn-light border'>
        <FcGoogle className='me-3' /> Sign in with Google
      </button>
    </div>
      </>
    );
};

export default Login;