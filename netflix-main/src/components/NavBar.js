import './NavBar.css'
import logo from '../img/netflix-logo-transparente.png'
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

// As entradas de um componente devem estar entre chaves.
// Isso é uma exigência do React
function NavBar(){

    return (
        <div className='topo'>
        <div className='nav-bar'>
            <img src={logo} className='logotipo'/>
            <a className='link'> Início </a>
            <a className='link2'> Séries</a>
            <a className='link2'> Filmes</a>
            <a className='link2'> Bombando</a>
            <a className='link2'> Minha lista</a>
            <a className='link2'> Navegar por idiomas</a>

            <Link to={'/account'} className='nav-bar2'>
                <CgProfile color ="ffffff"/>
            <span className='link2'>Conta</span>
            </Link>

        </div>
        </div>

    );
}

export default NavBar;