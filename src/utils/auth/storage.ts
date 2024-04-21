import { jwtDecode } from 'jwt-decode';

export const getUserFromToken = () => {
    const token = sessionStorage.getItem('auth-token');
    if (token?.length) {
        const user: any = jwtDecode(token);
        if (user) {
            return { userId: user.user_id, email: user.email };
        } else return null;
    } else return null;
};

const getToken = () => {
    return sessionStorage.getItem('auth-token');
};

export const setToken = (token: string) => {
    sessionStorage.setItem('auth-token', token);
};

export const removeToken = () => {
    sessionStorage.removeItem('auth-token');
};

export const isAuthenticated = () => {
    const token = getToken();
    console.log(token !== null);
    return token !== null;
};
