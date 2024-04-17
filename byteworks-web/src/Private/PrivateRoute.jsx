import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../context/ByteContext';
import { getAuthTokenFromStorage, removeAuthTokenFromStorage } from '../utils/authUtils';
import { validateLoginData } from '../services/LoginService';

const PrivateRoute = ({ Component }) => {
    const { formData } = useUserContext();
    const [redirectPath, setRedirectPath] = useState();

    useEffect(() => {
        const validateToken = async () => {
            try {
                const token = await getAuthTokenFromStorage();
                if (token) {
                    const { email, password } = formData;
                    try {
                        const redirectPath = await validateLoginData({ email, password });
                        console.log('Redirect Path:', redirectPath);
                        if (redirectPath) {
                            console.log('Login successful!');
                        } else {
                            console.error('Login failed');
                            removeAuthTokenFromStorage();
                            setRedirectPath('/login');
                        }
                    } catch (error) {
                        console.error('Error during token validation:', error);
                        removeAuthTokenFromStorage();
                        setRedirectPath('/login');
                    }
                } else {
                    setRedirectPath('/login');
                }
            } catch (error) {
                console.error('Error fetching token:', error);
                setRedirectPath('/login');
            }
        };

        validateToken();
        return () => {
        };
    }, [formData]);

    return redirectPath ? <Navigate to={redirectPath} /> : <Component />;
};

export default PrivateRoute;


