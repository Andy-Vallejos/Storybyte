import { Outlet } from 'react-router-dom'
import { NavComponent, ButtonComponent } from '/src/components'
import './Layout.css'

export function Layout() {
	return (
		<div className='layout'>
			<NavComponent />
			<Outlet />
			<div className='layout__footer'>
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
			</div>
		</div>
	)
}
