import { useState } from 'react';
import './ReadBook.css';

export const ReadBook = () => {
    const pages = [
        "Capítulo 1: En un lugar de la Mancha...",
        "Capítulo 2: El caballero continuó su camino...",
        "Capítulo 3: Se encontró con un molino de viento...",
        "Capítulo 4: El escudero tenía hambre...",
        "Capítulo 5: Fin del libro. ¡Gracias por leer!",
    ];

    const [pageIndex, setPageIndex] = useState(0);

    const nextPage = () => {
        if (pageIndex < pages.length - 1) setPageIndex(pageIndex + 1);
    };

    const prevPage = () => {
        if (pageIndex > 0) setPageIndex(pageIndex - 1);
    };

    return (
        <div className="readBook">
            <div className="readBook__page">
                <h2>{pageIndex + 1}</h2>

            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ratione assumenda consequatur? Fugiat voluptates id maxime officiis, nostrum consequuntur saepe omnis maiores neque eveniet ad soluta, natus expedita voluptas ea?
                Ut ipsa necessitatibus eaque deleniti ducimus adipisci consectetur eveniet repudiandae! Cum eveniet soluta, repellendus quidem ducimus exercitationem quam adipisci quod eius ipsum. Nobis natus iusto ut modi alias quo aliquid?
                Est aspernatur ad sunt cupiditate beatae. Ipsa itaque esse corrupti incidunt provident consequuntur, minima doloremque est dicta veritatis quo optio quisquam vitae aspernatur similique reiciendis ipsam maiores accusamus saepe? Voluptate.
                Aliquid, laboriosam reiciendis delectus sequi dolorem expedita amet! Quibusdam inventore atque excepturi quisquam ex. Ipsum nihil consequuntur reprehenderit ratione. Beatae nisi autem ratione praesentium quaerat ut laudantium nam animi cum.</p>
            <div className="readBook__buttons">
                <button onClick={prevPage} disabled={pageIndex === 0}>Anterior</button>
                <button onClick={nextPage} disabled={pageIndex === pages.length - 1}>Siguiente</button>
            </div>
            <br /><br /><br />
        </div>
    );
};
