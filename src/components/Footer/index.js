import React from 'react';
import './style.css';

export default function Footer() {
    return (
        <footer style={{marginTop: '20px'}} >
            <div className="mobile-direction f-one">
                <div className="logo">
                    <i className="fas fa-book-open" id="logo-footer" />
                    <p>Livraria</p>
                </div>

                <div className="social-network">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-youtube"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-twitter"></i>
                </div>
            </div>

            <div className="mobile-direction two">
                <p>B2W - Companhia Digital / CNPJ: 00.776.574/0006-60 / Inscrição Estadual: 492.513.778.117 / Endereço Rua Sacadura Cabral, 102 - Rio de Janeiro, RJ - 20081-902 / atendimento.sub@submarino.com.br
                </p>
            </div>

            <div className="mobile-direction three">
                <p>Powered with</p>
                <div className="languages">
                    <i class="fab fa-react"></i>
                    <i class="fab fa-node"></i>
                    <i class="fab fa-bootstrap"></i>
                </div>
            </div>
        </footer>
    )
}
