// import { createContext, useState } from 'react';
//
// const AuthContext = createContext({});
//
// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [Auth, setAuth] = useState({});
//
//   return (
//     <AuthContext.Provider value={{ Auth, setAuth }}>{children}</AuthContext.Provider>
//   );
// };
//
// export default AuthContext;

import { createContext, useState } from 'react';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;

interface AuthContextType {
  auth: any; // You can replace 'any' with a more specific type if you know the shape of your 'auth' object
  setAuth: React.Dispatch<React.SetStateAction<any>>; // Adjust 'any' to the type of your auth state
}
