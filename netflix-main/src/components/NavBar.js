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
            
            <div className='Topo1'>
                <img src={logo} className='logotipo'/>
                <a className='link'> Navegar </a>
            </div>

            <div className='Topo1'>
                <a className='link2'> Buscar</a>
            </div>

            <Link to={'/account'} className='nav-bar'>
                <CgProfile color ="ffffff"/>
            <span className='link2'>Conta</span>
            </Link>

        </div>
        </div>

    );
}

export default NavBar;