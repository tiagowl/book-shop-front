import React from 'react';
import './style.css';

export default function Sidebar() {
    return (
        <div id="sidebar">
            <ul className="lista-categoria" style={{marginTop: 20}}>
                <li className="titulo-lista">Categorias</li>
                <li>Romance</li>
                <li>Ficção</li>
                <li>Motivacional</li>
                <li>Autoajuda</li>
            </ul>
            <ul className="lista-categoria">
                <li className="titulo-lista">Preço</li>
                <li>Até R$20</li>
                <li>R$20 a R$40</li>
                <li>R$40 a R$60</li>
                <li>R$60 a R$80</li>
                <li>R$80 a R$100</li>
            </ul>
            <ul className="lista-categoria">
                <li className="titulo-lista">Novidades</li>
                <li>Pré-venda</li>
                <li>Últimos 30 dias</li>
                <li>Ultimos 90 dias</li>
            </ul>
            <ul className="lista-categoria">
                <li className="titulo-lista">Idioma</li>
                <li><input type="checkbox" id />Portugues</li>
                <li><input type="checkbox" id />Ingles</li>
                <li><input type="checkbox" id />Espanhol</li>
            </ul>
            <ul className="lista-categoria">
                <li className="titulo-lista">Autor</li>
                <li>Annie Darling</li>
                <li>Susan Wiggs</li>
                <li>Jenny Colgan</li>
                <li>Hal Elrod</li>
                <li>Rodolfo Langhi</li>
                <li>Jacques Lacan</li>
            </ul>
            <ul className="lista-categoria">
                <li className="titulo-lista">Condição</li>
                <li>Novo</li>
                <li>Usado</li>
            </ul>
        </div>

    )
}
