import { createBrowserRouter } from 'react-router-dom'
import { Home } from '@/pages/Home/Home';
import { MyBooks } from '@/pages/MyBooks/MyBooks';
import { Layout } from '@/pages/Layout/Layout';
import { User } from "@/pages/User/User"
import { Books } from '@/pages/Books/Books';
import { BookDetail } from '@/pages/BookDetail/BookDetail';
import { ProtectedRoute } from '@/pages/ProtectedRoute/ProtectedRoute';
import { Login } from '@/pages/Login/Login';

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
