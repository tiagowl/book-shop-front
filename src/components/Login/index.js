import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Cadastrar() {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label>e-mail</label><br />
                <input type="email"/><br />
                <label>senha</label><br />
                <input type="password"/><br />
                <button>continuar</button>
                <p id="cadastro-msg" >Não possui um cadastro ainda? <Link to="/cadastro" style={{ color:"red", textDecoration: "none" }} >Cadastrar-se</Link></p>
            </form>
        </div>
    )
}
