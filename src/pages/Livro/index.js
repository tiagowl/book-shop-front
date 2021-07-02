import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Livro from '../../components/Livro';
import Pagamento from '../../components/Item-pagamento';
import api from '../../services/api';
import { useParams } from 'react-router-dom';
import './style.css';

export default function LivroContent() {

    const [livro, setLivro] = React.useState([]);
    const {id} = useParams();

    React.useEffect(()=>{
        async function fetch(){
        
            const response = await api.get(`/books/${id}`);
            setLivro(response.data);
         }

         fetch();
    }, []);

    return (
        <div>
            <div className="row">
                <div className="col-md-8">
                    <Livro nome={livro.nome} imagem={livro.imagem} />
                </div>
                <div className="col-md-4">
                    <Pagamento preco={livro.preco} nome={livro.nome} imagem={livro.imagem} />
                </div>
            </div>
            <h1>os destaques da categoria</h1>
            <div className="row">
                <div className="col-md-12">
                    <div className="destaque">
                        <img src="" />
                        <p className="destaque-titulo" >Rastros de Luz - Empório do Livro Editora <br /> e Livraria LTDA</p>
                        <p className="destaque-preco" >R$ 35,00</p>
                    </div>
                    <div className="destaque">
                        <img src="" />
                        <p className="destaque-titulo" >Rastros de Luz - Empório do Livro Editora <br /> e Livraria LTDA</p>
                        <p className="destaque-preco" >R$ 35,00</p>
                    </div>
                    <div className="destaque">
                        <img src="" />
                        <p className="destaque-titulo" >Rastros de Luz - Empório do Livro Editora <br /> e Livraria LTDA</p>
                        <p className="destaque-preco" >R$ 35,00</p>
                    </div>
                    <div className="destaque">
                        <img src="" />
                        <p className="destaque-titulo" >Rastros de Luz - Empório do Livro Editora <br /> e Livraria LTDA</p>
                        <p className="destaque-preco" >R$ 35,00</p>
                    </div>
                    <div className="destaque">
                        <img src="" />
                        <p className="destaque-titulo" >Rastros de Luz - Empório do Livro Editora <br /> e Livraria LTDA</p>
                        <p className="destaque-preco" >R$ 35,00</p>
                    </div>
                </div>
            </div>
            <h1>novidades para você</h1>
            <div className="row">
                <div className="col-md-12">
                    <div className="destaque">
                        <img src="" />
                        <p className="destaque-titulo" >Rastros de Luz - Empório do Livro Editora <br /> e Livraria LTDA</p>
                        <p className="destaque-preco" >R$ 35,00</p>
                    </div>
                    <div className="destaque">
                        <img src="" />
                        <p className="destaque-titulo" >Rastros de Luz - Empório do Livro Editora <br /> e Livraria LTDA</p>
                        <p className="destaque-preco" >R$ 35,00</p>
                    </div>
                    <div className="destaque">
                        <img src="" />
                        <p className="destaque-titulo" >Rastros de Luz - Empório do Livro Editora <br /> e Livraria LTDA</p>
                        <p className="destaque-preco" >R$ 35,00</p>
                    </div>
                    <div className="destaque">
                        <img src="" />
                        <p className="destaque-titulo" >Rastros de Luz - Empório do Livro Editora <br /> e Livraria LTDA</p>
                        <p className="destaque-preco" >R$ 35,00</p>
                    </div>
                    <div className="destaque">
                        <img src="" />
                        <p className="destaque-titulo" >Rastros de Luz - Empório do Livro Editora <br /> e Livraria LTDA</p>
                        <p className="destaque-preco" >R$ 35,00</p>
                    </div>
                </div>
            </div>
            <h1>sinopse</h1>
            <div className="row" style={{marginTop: "10px"}}>
                <div className="col-md-12 sinopse">
                    <p className="sinopse" >
                    ROMANCES DE HOJE é uma coleção de livros sobre mulheres atuais que lidam com problemas cotidianos e buscam conquistar seu espaço. As protagonistas são heroínas que tentam conciliar múltiplas responsabilidades - criar bem os filhos, manter um bom relacionamento com os maridos (ou encontrá-los!), dar atenção aos pais, manter contato com as amigas, cuidar da carreira e das contas a pagar, estar em forma, na moda e de bom humor, ter vida saudável, contribuir para um planeta melhor... e conseguir ser feliz no meio disso tudo. São histórias inspiradoras, muitas vezes de superação e empoderamento, mas sempre com leveza e muito humor. As autoras dos RdH são best-sellers internacionais que já conquistaram milhões de leitores no mundo todo, e agora chegam ao Brasil, pela Arqueiro, para ajudar a mulher brasileira e refletir sobre sua vida ao mesmo tempo em que se diverte.
                    </p>
                </div>
            </div>
            <h1>ficha técnica</h1>
            <div className="row">
                <div className="col-md-12" style={{backgroundColor: "white", paddingTop: "10px", borderRadius: "3px"}}>
                    <ul classname="list-group" style={{width: "100%"}} >
                        <li className="list-group-item list-group-item-dark"><p>Editora</p><p>{livro.editora}</p></li>
                        <li className="list-group-item"><p>Ano</p><p>{livro.ano}</p></li>
                        <li className="list-group-item list-group-item-dark"><p>Número de Páginas</p><p>{livro.paginas}</p></li>
                        <li className="list-group-item"><p>Autor</p><p>{livro.autor}</p></li>
                    </ul>
                </div>
            </div>
            <h1>avaliações</h1>
            <div className="row">
                <div className="col-md-12 avaliacao-item" style={{backgroundColor: "white"}}>
                    <p id="avaliacao" >Seja o primeiro a avaliar</p>
                    <button id="avaliar" >avaliar produto</button>
                </div>
            </div>
        </div>
    )
}
