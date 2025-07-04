import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './BookDetail.css'

export function BookDetail() {
	const { key } = useParams()
	const [book, setBook] = useState(null)
	const [author, setAuthor] = useState(null)
	const [imageUrl, setImageUrl] = useState('')
	const [subjects, setSubjects] = useState([])
	const [edition, setEdition] = useState(null)
	const [loaded, setLoaded] = useState(false)

	const getBook = async () => {
		try {
			const responseBook = await axios.get(
				`https://openlibrary.org/works/${key}.json`,
			)
			const bookData = responseBook.data
			setBook(bookData)

			const authorKey = bookData.authors?.[0]?.author?.key
			if (authorKey) {
				const responseAuthor = await axios.get(
					`https://openlibrary.org${authorKey}.json`,
				)
				setAuthor(responseAuthor.data)
			}
			const covers = bookData.covers
			if (covers?.length > 0) {
				setImageUrl(`https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`)
			}
			if (bookData.subjects) {
				setSubjects(bookData.subjects.slice(0, 6))
			}

			const editionsRes = await axios.get(
				`https://openlibrary.org/works/${key}/editions.json?limit=1`,
			)
			const firstEdition = editionsRes.data.entries?.[0]
			if (firstEdition) {
				setEdition(firstEdition)
			}
		} catch (error) {
			console.error('Error al obtener los datos del libro:', error)
		}
	}

	useEffect(() => {
		getBook()
	}, [key])

	const formatLanguage = langKey => {
		if (langKey?.includes('eng')) return 'Inglés'
		if (langKey?.includes('spa')) return 'Español'
		if (langKey?.includes('fre')) return 'Francés'
		return 'Desconocido'
	}

	return (
		<div className='bookDetail'>
			<section className='bookDetail__data'>
				{imageUrl && (
					<img
						src={loaded ? imageUrl : '/loading.gif'}
						alt='Portada del libro'
						onLoad={() =>
							setTimeout(() => {
								setLoaded(true)
							}, 100)
						}
					/>
				)}
				<section className='bookDetail__data--inf'>
					<p>
						<span className='title'>Autor:</span>{' '}
						{author?.personal_name || 'Autor desconocido'}
					</p>

					{book?.created?.value && (
						<p>
							<span className='title'>Publicado:</span>{' '}
							{new Date(book.created.value).getFullYear()}
						</p>
					)}

					{edition?.publish_date && (
						<p>
							<span className='title'>Primera edición:</span>{' '}
							{edition.publish_date}
						</p>
					)}
					{edition?.languages?.[0]?.key && (
						<p>
							<span className='title'>Idioma:</span>{' '}
							{formatLanguage(edition.languages[0].key)}
						</p>
					)}
					{edition?.number_of_pages && (
						<p>
							<span className='title'>Páginas:</span> {edition.number_of_pages}
						</p>
					)}
					<button className='bookDetail__data--btn'>Empezar a leer</button>
				</section>
			</section>

			<section className='bookDetail__info'>
				<p>
					<span className='bookDetail__info--title'>{book?.title}</span>
					<br />
					<br />
					{typeof book?.description === 'string'
						? book.description
						: book?.description?.value || 'Sin descripción'}
				</p>

				{subjects.length > 0 && (
					<div className='bookDetail__subjects'>
						<span className='title'>Temas:</span>
						<ul className='lista'>
							{subjects.map((s, i) => (
								<li key={i}>
									<p> - {s}</p>
								</li>
							))}
						</ul>
					</div>
				)}
			</section>
		</div>
	)
}
