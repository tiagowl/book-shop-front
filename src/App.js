// import logo from './logo.svg';
// import './App.css';
import Main from './pages/Main';
import Navbar from './components/Navbar';
import LivroContent from './pages/Livro';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Favoritos from './pages/Favoritos';
import Footer from './components/Footer';
import Cesta from './pages/Cesta';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './global.css';

function App() {
  return (
    <div>
      
        <BrowserRouter>
          <Navbar/>
            <div className="container">
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/livro/:id" exact component={LivroContent} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/login" component={Login} />
            <Route path="/favoritos" component={Favoritos} />
            <Route path="/cesta" exact component={Cesta} />
          </Switch>
            </div>
          <Footer/>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
