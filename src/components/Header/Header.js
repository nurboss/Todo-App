import React from 'react';
import UseAuth from '../firebase/AuthProvider/UseAuth';
const Header = () => {
    const { logOut, user } = UseAuth();
    return (
      <div className='container d-flex justify-content-end align-items-center header'>
        {user && (
          <div className='d-flex align-items-center'>
            <span  className='user-name'>{user.displayName}</span>
            <button

              onClick={logOut}
              className='logout-btn'
            >
              Logout
            </button>
          </div>
        )}
      </div>
    );
};

export default Header;