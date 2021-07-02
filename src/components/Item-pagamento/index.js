import React from 'react';
import './style.css';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

export default function Pagamento({preco, nome, imagem}) {

    const history = useHistory();

    async function handleClick(){
        await api.post("/cesta", {
            nome: nome,
            imagem: imagem,
            preco: preco,
            usuarioId: 1
        });

        history.push("/cesta");
    }

    return (
        <div>
            <div className="livro-item-pagamento">
                <p className="livro-item-pagamento-preco">R$ {preco}</p>
                <p className="livro-item-pagamento-parcelas">em até 2x sem juros no cartão de crédito</p>
                <button onClick={handleClick} className="livro-item-pagamento-comprar">Comprar</button>
            </div>
        </div>

    )
}
