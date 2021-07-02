import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export default function Favoritos() {
    return (
        <div style={{backgroundColor: "white", paddingTop: "2px", marginTop: "10px", borderRadius: "3px"}} >
            <h1 id="favoritos" >favoritos</h1>
            <hr />
            <div className="row">
                <div className="col-md-12">
                    <div className="favorito">
                        <img src=""/>
                        <p classname="favorito-titulo" >Rastros de Luz - Empório do Livro Editora<br/> e Livraria LTDA</p>
                        <p className="favorito-preco" >R$35,00</p>
                    </div>

                    <div className="favorito">
                        <img src=""/>
                        <p classname="favorito-titulo" >Rastros de Luz - Empório do Livro Editora<br/> e Livraria LTDA</p>
                        <p className="favorito-preco" >R$35,00</p>
                    </div>

                    <div className="favorito">
                        <img src=""/>
                        <p classname="favorito-titulo" >Rastros de Luz - Empório do Livro Editora<br/> e Livraria LTDA</p>
                        <p className="favorito-preco" >R$35,00</p>
                    </div>

                    <div className="favorito">
                        <img src=""/>
                        <p classname="favorito-titulo" >Rastros de Luz - Empório do Livro Editora<br/> e Livraria LTDA</p>
                        <p className="favorito-preco" >R$35,00</p>
                    </div>

                    <div className="favorito">
                        <img src=""/>
                        <p classname="favorito-titulo" >Rastros de Luz - Empório do Livro Editora<br/> e Livraria LTDA</p>
                        <p className="favorito-preco" >R$35,00</p>
                    </div>

                    <div className="favorito">
                        <img src=""/>
                        <p classname="favorito-titulo" >Rastros de Luz - Empório do Livro Editora<br/> e Livraria LTDA</p>
                        <p className="favorito-preco" >R$35,00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
