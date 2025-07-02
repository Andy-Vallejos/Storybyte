import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ButtonComponent.css'

export function ButtonComponent({ name, color, img, url }) {
	const [imgLoaded, setImgLoaded] = useState(false)

	return (
		<Link to={url}>
			<div className='mobile__btn' style={{ '--btn-backgound': color }}>
				{imgLoaded && img ? (
					<img
						className='mobile__btn--img'
						src={img}
						alt={`Icono de ${name}`}
						style={{
							width: name === 'user' ? '50px' : '20px',
							height: name === 'user' ? '50px' : '20px',
							borderRadius: name === 'user' ? '50%' : '0',
						}}
					/>
				) : (
					<img
						src='/loading.gif'
						alt='cargando'
						style={{ width: '50px', height: '50px', borderRadius: '50%' }}
					/>
				)}
				<img
					className='mobile__btn--img'
					style={{ display: 'none' }}
					src={img}
					onLoad={() => setImgLoaded(true)}
					alt={`Icono de ${name}`}
				/>
				<h2
					className='mobile__btn--text'
					style={{ display: name && name !== 'user' ? 'display' : 'none' }}>
					{name}
				</h2>
			</div>
		</Link>
	)
}
