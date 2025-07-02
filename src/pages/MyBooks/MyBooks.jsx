import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '@/context/AuthProvider'
import axios from 'axios'
import ProgressBar from '@ramonak/react-progress-bar'
import './MyBooks.css'

export function MyBooks() {
	const { user } = useAuth()
	const [booksData, setBooksData] = useState([])
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		const fetchBooks = async () => {
			const fetchedBooks = await Promise.all(
				user.books.map(async key => {
					try {
						const response = await axios.get(
							`https://openlibrary.org/works/${key}.json`,
						)
						const covers = response.data.covers
						const imageUrl = covers?.[0]
							? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
							: '/default-cover.jpg'

						return {
							key,
							title: response.data.title,
							imageUrl,
						}
					} catch (error) {
						console.error(`Error al obtener el libro ${key}:`, error)
						return null
					}
				}),
			)
			setLoading(true)
			setBooksData(fetchedBooks.filter(Boolean))
		}

		if (user.books?.length > 0) {
			fetchBooks()
		}
	}, [user.books])

	return (
		<div className='myBooks'>
			<aside className='myBooks__aside'>
				{!loading ? (
					<img src='/loading.gif' />
				) : (
					booksData.map(book => (
						<Link to={`/my-books/${book.key}`} key={book.key}>
							<article className='myBooks__card'>
								<section
									className='myBooks__card--img'
									style={{ backgroundImage: `url(${book.imageUrl})` }}
								/>
								<section className='myBooks__card--info'>
									<h1>{book.title}</h1>
									<h1>
										ESTADO{' '}
										<span className='mybooks__card--estado'>Leyendo</span>
									</h1>
									<ProgressBar
										completed={Math.floor(Math.random() * 100)}
										labelColor='black'
										baseBgColor='transparent'
										bgColor='#ffffff'
									/>
									<h1>
										INICIO{' '}
										<span className='mybooks__card--estado'>12 de Junio</span>
									</h1>
									<h1>FIN ...</h1>
								</section>
							</article>
						</Link>
					))
				)}
			</aside>
			<section className='myBooks__main'></section>
		</div>
	)
}
