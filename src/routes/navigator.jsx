import { createBrowserRouter } from 'react-router-dom'
import {
	Books,
	MyBooks,
	BookDetail,
	ReadBook,
	Home,
	ProtectedRoute,
	Login,
	Layout,
	User,
} from '@/pages'

export const router = createBrowserRouter([
	{
		path: '/login',
		element: <Login />,
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
			{ path: 'my-books/:key', element: <ReadBook /> },
			{ path: 'user', element: <User /> },
		],
	},
])
