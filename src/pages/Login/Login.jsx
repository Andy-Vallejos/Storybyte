import React, { useState, useEffect } from 'react'
import { useAuth } from '@/context/AuthProvider'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export function Login() {
	const { login, user } = useAuth()
	const navigate = useNavigate()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(null)

	useEffect(() => {
		if (user) {
			navigate('/')
		}
	}, [user])

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			await login(email, password)
			setError(null)
		} catch (err) {
			setError('Email o contraseña incorrectos')
			console.error(err)
		}
	}

	return (
		<div className='login'>
			<form onSubmit={handleSubmit} className='login__form'>
				<img src='/logo_storybyte.png' alt='' />
				<input
					className='login__form--input'
					type='email'
					placeholder='Email'
					onChange={e => setEmail(e.target.value)}
					value={email}
					required
				/>
				<input
					className='login__form--input'
					type='password'
					placeholder='Contraseña'
					onChange={e => setPassword(e.target.value)}
					value={password}
					required
				/>
				<button type='submit' className='login__form--btn'>
					Iniciar Sesión
				</button>
				{error && <p style={{ color: 'red' }}>{error}</p>}
			</form>
		</div>
	)
}
