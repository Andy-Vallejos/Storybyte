import './NavComponent.css'
import { ButtonComponent } from '@/components'
import { useAuth } from '@/context/AuthProvider'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function NavComponent() {
	const { user } = useAuth()
	const location = useLocation()
	const stateTitle = location.state?.title
	const routes = {
		'/': 'Storybyte',
		'/my-books': 'Mis libros',
		'/user': 'Perfil',
		'/books': 'Biblioteca',
	}
	const [isFixed, setIsFixed] = useState(false)

	function getTitle(pathname, fallbackTitle) {
		return routes[pathname] || fallbackTitle || 'Storytime'
	}

	useEffect(() => {
		const handleScroll = () => {
			const offset = 1
			setIsFixed(window.scrollY > offset)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const hideNav = /^\/my-books\/[^/]+$/.test(location.pathname)

	if (hideNav) return null

	return (
		<div className={`nav  ${isFixed ? 'fixed' : ''}`}>
			<div className='nav__title'>
				<h1>{getTitle(location.pathname, stateTitle)}</h1>
			</div>
			<ul className='nav__options'>
				<li>
					<ButtonComponent
						name='Storybyte'
						color='#9C27B0'
						img='/home.png'
						url='/'
					/>
				</li>
				<li>
					<ButtonComponent
						name='Mis libros'
						color='#0D47A1'
						img='/reading.png'
						url='/my-books'
					/>
				</li>
				<li>
					<ButtonComponent
						name='Biblioteca'
						color='#C43342'
						img='/books-stack-of-three.png'
						url='/books'
					/>
				</li>
			</ul>

			<div className='nav__user'>
				<div
					style={{ display: location.pathname === '/user' ? 'none' : 'flex' }}>
					<ButtonComponent
						img={user.photo || '/default-avatar.png'}
						url='/user'
						name='user'
					/>
				</div>
			</div>
		</div>
	)
}
