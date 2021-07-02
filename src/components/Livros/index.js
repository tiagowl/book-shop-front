import React from 'react'
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './style.css';

export default function Livros() {

    const [livros, setLivros] = React.useState([]);

    React.useEffect(()=>{
        async function fetch(){
        
            const response = await api.get('/books');
            setLivros(response.data);
         }

         fetch();
    }, []);

    return (
        <div>
            <div id="main-content">
                {livros.map((livro)=>(
                    <div className="livro" key={livro.id}>
                        <img className="livro-img" src={livro.imagem} />
                        <p className="livro-titulo"><Link to={`/livro/${livro.id}`} >{livro.nome}</Link></p>
                        <p className="livro-quantidade">1 oferta a partir de</p>
                        <p className="livro-preco">R$ {livro.preco}</p>
                        <p className="livro-parcelas">2x de R$ {livro.valorParcela} sem juros no cartão de <br /> crédito</p>
                    </div>
                ))}
            </div>
        </div>

    )
}
