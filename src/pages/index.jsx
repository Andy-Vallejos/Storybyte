import { createBrowserRouter } from 'react-router-dom'
import Home from '/src/pages/Home/Home';
import MyBooks from '/src/pages/MyBooks/MyBooks';
import Layout from '/src/pages/Layout/Layout';
import User from "/src/pages/User/User"
import Books from '/src/pages/Books/Books';
import BookDetail from '/src/pages/BookDetail/BookDetail';
import ProtectedRoute from '/src/pages/ProtectedRoute/ProtectedRoute';
import Login from '/src/pages/Login/Login';

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
