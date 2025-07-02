import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthProvider'
import './User.css'
import { useEffect } from 'react'

export function User() {
	const { logout, user } = useAuth()
	const navigate = useNavigate()

	const handleLogout = () => {
		logout()
		navigate('/login')
	}

	useEffect(() => {
		console.log(user)
	})

	return (
		<div className='user'>
			<div className='user__form'>
				<div
					className='img'
					style={{
						backgroundImage: `url(${user.photo})`,
					}}></div>
				<section className='user__info'>
					<h1>{user.name}</h1>
					<h1> {user.email}</h1>
				</section>

				<ul className='user__options'>
					<li className='user__edit'>
						<img src='/user-avatar.png' alt='' />
						<Link>
							<h1>Editar perfil</h1>
						</Link>
					</li>
					<li className='user__edit'>
						<img src='/key.png' alt='' />
						<Link>
							<h1>Cambiar contraseña</h1>
						</Link>
					</li>
					<li onClick={handleLogout} className='user__edit'>
						<img src='/logout.png' alt='' />
						<Link>
							<h1>Cerrar sesion</h1>
						</Link>
					</li>
				</ul>
			</div>
			<div className='user__main'>
				<h1>Informacion Personal</h1>
				<form action=''>
					<section className='user__main--gender'>
						<label htmlFor=''>
							<h1>Hombre</h1>
						</label>
						<input type='radio' name='gender' value='male' />

						<label htmlFor=''>
							<h1>Mujer</h1>
						</label>
						<input type='radio' name='gender' value='female' />
					</section>
					<section className='user__main--names'>
						<div>
							<label htmlFor=''>
								<h1>Nombre</h1>
							</label>
							<input type='text' name='name' placeholder='Ingresa tu nombre' />
						</div>
						<div>
							<label htmlFor=''>
								<h1>Apellido</h1>
							</label>
							<input
								type='text'
								name='lastName'
								placeholder='Ingresa tu apellido'
							/>
						</div>
					</section>
					<section className='user__main--email'>
						<label htmlFor=''>
							<h1>Email</h1>
						</label>
						<input type='email' placeholder='ejemplo@correo.com' />
					</section>
					<section className='user__main--names'>
						<div>
							<label htmlFor=''>
								<h1>Numero</h1>
							</label>
							<input type='number' name='phone' placeholder='+000 000 0000 0' />
						</div>
						<div>
							<label htmlFor=''>
								<h1>Fecha de nacimiento</h1>
							</label>
							<input type='date' name='date' />
						</div>
					</section>
					<section className='user__main--buttons'>
						<button>Descartar cambios</button>
						<button>Guardar cambios</button>
					</section>
				</form>
			</div>
		</div>
	)
}
