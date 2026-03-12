import { createContext, useReducer } from 'react';
import { authReducer, INIT_STATE } from '../reducers/authReducer';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(authReducer, INIT_STATE);

  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
