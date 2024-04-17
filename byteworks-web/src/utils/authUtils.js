export const getAuthTokenFromStorage = () => {
    return localStorage.getItem('token');
};

export const removeAuthTokenFromStorage = () => {
    localStorage.removeItem('token');
};
