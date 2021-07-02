import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from '../../components/Login';
import './style.css';

export default function Cadastro() {
    return (
        <div>
            <div className="row">
                <div className="col-md-6 flex-column">
                    <Login/>
                </div>
            </div>
        </div>
    )
}