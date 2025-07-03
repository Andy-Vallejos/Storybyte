import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthProvider'
import './User.css'

export function User() {
	const { logout, user } = useAuth()
	const navigate = useNavigate()

	const handleLogout = () => {
		logout()
		navigate('/login')
	}
	return (
		<div className='user'>
			<section className='user__info'>
				<img src={user.photo} alt='' />
				<div className='user__info--data'>
					<h1>{user.name}</h1>
					<h1>{user.email}</h1>
					<button className='user__logout' onClick={handleLogout}>
						Cerrar sesión
					</button>
				</div>
			</section>
			<section className='user__section'>
				<h1>EDITAR PERFIL</h1>
				<form action='' className='user__form'>
					<section className='user__form--names'>
						<div>
							<h1>Nombre</h1>
							<input
								type='text'
								placeholder='Escriba algo...'
								className='user__form--input'
							/>
						</div>
						<div>
							<h1>Apellido</h1>
							<input
								type='text'
								placeholder='Escriba algo...'
								className='user__form--input'
							/>
						</div>
					</section>
					<h1>Email</h1>
					<input
						type='email'
						placeholder='example@domain.com'
						className='user__form--input'
					/>
					<section className='user__form--buttons'>
						<button type='submit' className='user__form--button  border__blue'>
							Cancelar
						</button>
						<button type='submit' className='user__form--button blue'>
							Guardar
						</button>
					</section>
				</form>
			</section>
			<section className='user__section'>
				<h1>CAMBIAR CONTRASEÑA</h1>
				<form action='' className='user__form'>
					<h1>Contraseña actual</h1>
					<input
						type='password'
						placeholder='Ingrese su contraseña actual'
						className='user__form--input'
					/>
					<h1>Nueva contraseña</h1>
					<input
						type='password'
						placeholder='Ingrese su nueva contraseña'
						className='user__form--input'
					/>
					<h1>Confirmar nueva contraseña</h1>
					<input
						type='password'
						placeholder='Confirme su nueva contraseña'
						className='user__form--input'
					/>
					<section className='user__form--buttons'>
						<button type='submit' className='user__form--button border__purple'>
							Cancelar
						</button>
						<button type='submit' className='user__form--button purple'>
							Guardar
						</button>
					</section>
				</form>
			</section>
		</div>
	)
}
