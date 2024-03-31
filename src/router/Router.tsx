import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../components/global/Layout/Layout";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Browse from "../pages/Browse/Browse";
import Login from "../pages/Login/Login";


const appRoutes = createBrowserRouter([
    {
        element: <Layout/>,
        errorElement: <PageNotFound/>,
        children: [
            {
                path: '/',
                element: <Navigate replace to="/browse"/>
            },
            {
                path: '/browse',
                element: <Browse/>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    }
]);

const AppRouter = () => {
    return (
        <RouterProvider router={appRoutes}/>
    )
}

export default AppRouter;