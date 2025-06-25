import { createBrowserRouter } from 'react-router-dom'
import Home from './Home/Home';
import MyBooks from './MyBooks/MyBooks';
import Layout from './Layout/Layout';
import User from "./User/User"
import Books from './Books/Books';
import BookDetail from './BookDetail/BookDetail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'books', element: <Books /> },
            { path: 'books/:key', element: <BookDetail /> },
            { path: 'my-books', element: <MyBooks /> },
            { path: 'user', element: <User /> },

        ]
    }
]);


export default router;
