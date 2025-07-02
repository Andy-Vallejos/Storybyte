import { useState } from 'react'
import './ReadBook.css'
import { Link } from 'react-router-dom'
import { ButtonComponent } from '@/components'

export const ReadBook = () => {
	const pages = [
		'Capítulo 1: En un lugar de la Mancha...',
		'Capítulo 2: El caballero continuó su camino...',
		'Capítulo 3: Se encontró con un molino de viento...',
		'Capítulo 4: El escudero tenía hambre...',
		'Capítulo 5: Fin del libro. ¡Gracias por leer!',
	]

	const [pageIndex, setPageIndex] = useState(0)

	const nextPage = () => {
		if (pageIndex < pages.length - 1) setPageIndex(pageIndex + 1)
	}

	const prevPage = () => {
		if (pageIndex > 0) setPageIndex(pageIndex - 1)
	}

	return (
		<div className='readBook'>
			<div className='readBook__page'>
				<ButtonComponent
					color='#0D47A1'
					img='/reading.png'
					url='/my-books'
					className='readBook__back'
				/>
				<div className='readBook__index'>{pageIndex + 1}</div>
			</div>
			<p>{pages[pageIndex]}</p>
			<div className='readBook__buttons'>
				<button onClick={prevPage} disabled={pageIndex === 0}>
					Anterior
				</button>
				<button onClick={nextPage} disabled={pageIndex === pages.length - 1}>
					Siguiente
				</button>
			</div>
		</div>
	)
}
