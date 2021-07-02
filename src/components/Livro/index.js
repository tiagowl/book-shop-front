import React from 'react';
import './style.css';

export default function Livro({nome, imagem}) {
    return (
        <div>
            <div className="livro-item">
                <img className="livro-item-img" src={imagem} alt />
                <div className="livro-item-informacoes">
                    <h1>{nome}</h1>
                </div>
            </div>
        </div>

    )
}
