import { createBrowserRouter } from 'react-router-dom'
import Home from './Home/Home';
import MyBooks from './MyBooks/MyBooks';
import Layout from './Layout/Layout';
import User from "./User/User"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'my-books', element: <MyBooks /> },
            { path: 'user', element: <User /> }
        ]
    }
]);


export default router;
