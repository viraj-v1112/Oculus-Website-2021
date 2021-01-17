import React, { useEffect, useState } from 'react';
import { auth } from '../../config';
import AuthContext from './AuthContext';

const AuthState = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // console.log(user);
        const { displayName, email, uid } = user;
        setUser({
          displayName,
          email,
          uid,
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthState;
