import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import api from '../../services/api';

export default function Cesta() {

    const [cestas, setCestas] = React.useState([]);

    React.useEffect(()=>{
        async function fetch(){
            const cestasResult = await api.get("/cesta");
            setCestas(cestasResult.data);
        }

        fetch();
    }, []);

    return (
        <div>
            <h1>minha cesta</h1>
            <div className="row">
                <div className="col-md-7" style={{backgroundColor: "white", marginRight: "20px"}}>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Produto</th>
                            <th scope="col">Quantidade</th>
                            <th scope="col">Preço</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cestas.map((cesta)=>(
                                <tr>
                                <td style={{display: "flex", alignItems: "center"}} ><img src={cesta.imagem}/><p>{cesta.nome}</p></td>
                                <td><input type="number" className="quantidade-produto"/></td>
                                <td className="preco-produto" >{cesta.preco}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-4 cesta" style={{backgroundColor: "white"}}>
                    <h2 id="titulo-resumo" >resumo do pedido</h2>
                    <div id="resumo-informacoes">
                        <p>3 produtos</p>
                        <p>R$ 75,49</p>
                    </div>
                    <hr />
                    <div id="resumo-total">
                        <p>total</p>
                        <p>R$ 75,49</p>
                    </div>
                    <hr />
                    <button style={{margin: "0 auto", width:"100%", height:"50px"}} >Continuar</button>
                </div>
            </div>
        </div>
    )
}
