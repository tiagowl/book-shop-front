import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cadastrar from '../../components/Cadastrar';
import './style.css';

export default function Cadastro() {
    return (
        <div>
            <div className="row">
                <div className="col-md-6 flex-column">
                    <Cadastrar/>
                </div>
            </div>
        </div>
    )
}
