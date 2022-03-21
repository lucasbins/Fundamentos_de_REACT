import React from 'react';

export default function Aleatorio(props) {
    const { min, max } = props
    const numAleatorio = parseInt(Math.random() * (max - min)) + min;

    return (
        <>
            <h2>Numero aleatorio</h2>
            <p><strong>Numero Minimo: </strong>{min}</p>
            <p><strong>Numero Maximo: </strong>{max}</p>
            <p><strong>Numero Escolhido: </strong>{numAleatorio}</p>
        </>
    )

}