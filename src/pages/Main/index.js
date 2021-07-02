import React from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export default function Main() {

    const [livros, setLivros] = React.useState([]);

    React.useEffect(()=>{
        async function fetch(){
        
            const response = await api.get('/books');
            setLivros(response.data);
         }

         fetch();
    }, []);

   function handleFilterCategoria(filtro){
        let livroFiltro = livros.filter((livro)=>{
            return livro.categoriaId = filtro;
        });
        setLivros(livroFiltro);
   }

   function handleFilterPreco(filtro){
        let livroFiltro = livros.filter((livro)=>{
            return livro.preco <= filtro;
        });
        setLivros(livroFiltro);
   }

    function handleFilterAutor(filtro){
        let livroFiltro = livros.filter((livro)=>{
            return livro.autor = filtro;
        });
        setLivros(livroFiltro);
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <div id="sidebar">
                        <ul className="lista-categoria" style={{marginTop: 20}}>
                            <li className="titulo-lista">Categorias</li>
                            <li><a style={{color: "black", cursor:"pointer"}} onClick={()=>handleFilterCategoria(1)} >Romance</a></li>
                            <li><a style={{color: "black", cursor:"pointer"}} onClick={()=>handleFilterCategoria(2)} >Ficção</a></li>
                            <li><a style={{color: "black", cursor:"pointer"}} onClick={()=>handleFilterCategoria(5)} >Motivacional</a></li>
                            <li><a style={{color: "black", cursor:"pointer"}} onClick={()=>handleFilterCategoria(6)} >Autoajuda</a></li>
                        </ul>
                        <ul className="lista-categoria">
                            <li className="titulo-lista">Preço</li>
                            <li><a style={{color: "black", cursor:"pointer"}} onClick={()=>handleFilterPreco(20)} >Até R$20</a></li>
                            <li><a style={{color: "black", cursor:"pointer"}} onClick={()=>handleFilterPreco(40)} >Até R$40</a></li>
                            <li><a style={{color: "black", cursor:"pointer"}} onClick={()=>handleFilterPreco(60)} >Até R$60</a></li>
                            <li><a style={{color: "black", cursor:"pointer"}} onClick={()=>handleFilterPreco(80)} >Até R$80</a></li>
                            <li><a style={{color: "black", cursor:"pointer"}} onClick={()=>handleFilterPreco(100)} >Até R$100</a></li>
                        </ul>
                        <ul className="lista-categoria">
                            <li className="titulo-lista">Novidades</li>
                            <li>Pré-venda</li>
                            <li>Últimos 30 dias</li>
                            <li>Ultimos 90 dias</li>
                        </ul>
                        <ul className="lista-categoria">
                            <li className="titulo-lista">Idioma</li>
                            <li><input type="checkbox" id />Portugues</li>
                            <li><input type="checkbox" id />Ingles</li>
                            <li><input type="checkbox" id />Espanhol</li>
                        </ul>
                        <ul className="lista-categoria">
                            <li className="titulo-lista">Autor</li>
                            <li><a style={{color: "black", cursor:"pointer"}} onClick={()=>handleFilterAutor("Augusto Cury")} >Augusto Cury</a></li>
                            <li><a style={{color: "black", cursor:"pointer"}} onClick={()=>handleFilterAutor("James Dashner")} >James Dashner</a></li>
                            <li><a style={{color: "black", cursor:"pointer"}} onClick={()=>handleFilterAutor("Mark Owen")} >Mark Owen</a></li>
                            <li><a style={{color: "black", cursor:"pointer"}} onClick={()=>handleFilterAutor("Matthew J. Kirby")} >Matthew J. Kirby</a></li>
                        </ul>
                        <ul className="lista-categoria">
                            <li className="titulo-lista">Condição</li>
                            <li>Novo</li>
                            <li>Usado</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-9">
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
                </div>
            </div>
        </div>
    )
}
