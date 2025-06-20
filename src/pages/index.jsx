import { createBrowserRouter } from 'react-router-dom'
import Home from './Home';
import MyBooks from './MyBooks';
import Layout from './Layout/Layout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'my-books', element: <MyBooks /> }
        ]
    }
]);


export default router;
