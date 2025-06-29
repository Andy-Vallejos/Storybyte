import React, { useState } from 'react';
import { useAuth } from '@/context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

export function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = login(email, password);
        if (!success) {
            setError("Email o contraseña incorrectos");
        } else {
            setError(null);
            navigate('/');
        }
    };

    return (
        <div className='login'>

            <form onSubmit={handleSubmit} className='login__form'>
                <img src="/public/logo_storybyte.png" alt="" />
                <input
                    className='login__form--input'
                    type="email"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    required
                />
                <input
                    className='login__form--input'
                    type="password"
                    placeholder="Contraseña"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    required
                />
                <button type="submit" className='login__form--btn'>Iniciar Sesión</button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
        </div>
    );
}
