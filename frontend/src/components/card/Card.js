import React from 'react'

export default function Card({id, img, category, title, location, description}) {
    return (
        <div>
            <div>
                <img src={img} alt="img"/>
            </div>
            <div>
                <h2>{category}</h2>
                <h3>{title}</h3>
                <p>{location}</p>
                <p>{description}</p>
                <button>Ver detalle</button>

            </div>


        </div>
    )
}
