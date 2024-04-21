import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom';
import Layout from '../components/global/Layout/Layout';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Browse from '../pages/Browse/Browse';
import Login from '../pages/Login/Login';
import { Provider, useSelector } from 'react-redux';
import appStore, { RootState } from '../utils/store/app.store';
import ProtectedRoute from './protected-route';
import { isAuthenticated } from '../utils/auth/storage';

const appRoutes = createBrowserRouter([
    {
        element: (
            <Provider store={appStore}>
                <Layout />
            </Provider>
        ),
        errorElement: <PageNotFound />,
        children: [
            {
                path: '/login',
                element: <Login />,
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: '/',
                        element: <Navigate replace to="/browse" />,
                    },
                    {
                        path: '/browse',
                        element: <Browse />,
                    },
                ],
            },
        ],
    },
]);

const AppRouter = () => {
    return <RouterProvider router={appRoutes} />;
};

export default AppRouter;
