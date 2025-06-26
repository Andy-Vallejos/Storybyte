import { createBrowserRouter } from 'react-router-dom'
import Home from './Home/Home';
import MyBooks from './MyBooks/MyBooks';
import Layout from './Layout/Layout';
import User from "./User/User"
import Books from './Books/Books';
import BookDetail from './BookDetail/BookDetail';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import Login from './Login/Login';

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <Layout />
            </ProtectedRoute>
        ),
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
