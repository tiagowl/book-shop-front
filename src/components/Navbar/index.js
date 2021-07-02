import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default function Navbar() {

    const [cestas, setCestas] = React.useState([]);

    React.useEffect(()=>{
        async function fetch(){
            const cestasResult = await api.get("/cesta");
            setCestas(cestasResult.data);
        }

        fetch();
    }, []);

    return (
        <header>
            <div className="mobile-direction one">
                <i className="fas fa-book-open" />
                <Link to="/" id="brand-logo">Livraria</Link>
            </div>
            <div className="mobile-direction">
                <input type="text" placeholder="search..." id="search" />
            </div>
            <div className="mobile-direction">
                <i className="fas fa-user-circle" /><Link id="entry" to="/login">Entrar</Link>
                <i className="far fa-heart" />
                <Link to="/cesta"><i className="fas fa-cart-arrow-down" /></Link><span className="badge bg-danger">{cestas.length}</span>
            </div>
        </header>

    )
}

