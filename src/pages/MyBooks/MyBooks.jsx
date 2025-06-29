import React from 'react';
import './MyBooks.css';

export function MyBooks() {
    return (
        <div className="myBooks">
            <article className="myBooks__card">
                <section className="myBooks__card--img" style={{ backgroundImage: `url("https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg?ts=1637015198")` }}>
                </section>
                <section className='myBooks__card--info'>
                    <h1>TITULO</h1>
                    <h1>ESTADO <span>Leyendo</span></h1>
                    <h1><span style={{ color: 'green' }}>100/200</span></h1>
                    <h1>INICIO <span>12 de Junio</span></h1>
                    <h1>FIN ...</h1>
                </section>
            </article>
            <article className="myBooks__card">
                <section className="myBooks__card--img" style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfxrcUtlaLqSTTpA7N9cWKIopvRNtXngM2A&s")` }}>
                </section>
                <section className='myBooks__card--info'>
                    <h1>TITULO</h1>
                    <h1>ESTADO <span>Termin...</span></h1>
                    <h1><span style={{ color: 'green' }}>200/200</span></h1>
                    <h1>INICIO <span>12 de Junio</span></h1>
                    <h1>FIN <span>30 de agosto</span></h1>
                </section>
            </article>
            <article className="myBooks__card">
                <section className="myBooks__card--img" style={{ backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/5fc7868e04dc9f2855c99940/d13d2ad3-bca7-4544-b7bf-71bf7af7b283/laura-barrett-illustration-moon-stars-book-cover-design.jpg")` }}>
                </section>
                <section className='myBooks__card--info'>
                    <h1>TITULO</h1>
                    <h1>ESTADO <span>Leyendo</span></h1>
                    <h1><span style={{ color: 'green' }}>100/200</span></h1>
                    <h1>INICIO <span>12 de Junio</span></h1>
                    <h1>FIN ...</h1>
                </section>
            </article>
        </div>
    );
}
