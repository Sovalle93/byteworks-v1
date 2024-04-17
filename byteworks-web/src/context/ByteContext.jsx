import { createContext, useContext, useState } from 'react';
import { validateLoginData } from '../services/LoginService';

const UserContext = createContext(null);

const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const login = async () => {
    try {
      const redirectPath = await validateLoginData(formData);
      if (redirectPath) {
        setUser(formData);
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const navbar = async () => {
    try {
      const userData = await validateLoginData(formData);
      if (userData) {
        setUser(userData);
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, login, logout, navbar,  formData, setFormData }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider, useUserContext };

