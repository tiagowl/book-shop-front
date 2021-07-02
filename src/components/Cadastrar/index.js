import React from 'react';
import './style.css';
import axios from 'axios';

export default function Cadastrar() {

    const [cep, setCep] = React.useState({});

    async function handleChange(valor){
            const response = await axios.get(`https://viacep.com.br/ws/${valor}/json/`);
            setCep(response.data);
    }

    return (
        <div>
            <h1>Cadastre-se</h1>
            <form>
                <label>e-mail</label><br />
                <input type="email"/><br />
                <label>nome de usuário</label><br />
                <input type="text"/><br />
                <label>CEP</label><br />
                <input onChange={(event) => handleChange(event.target.value) }  type="text"/><br />
                <label>Bairro</label><br />
                <input type="text" value={cep.bairro}/><br />
                <label>Logradouro</label><br />
                <input type="text" value={cep.logradouro} /><br />
                <label>Localidade</label><br />
                <input type="text" value={cep.localidade} /><br />  
                <label>senha</label><br />
                <input type="password"/><br />
                <button>criar seu cadastro</button>
            </form>
        </div>
    )
}
