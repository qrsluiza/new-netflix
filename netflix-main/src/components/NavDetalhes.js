import './NavDetalhes.css'
import logo from '../img/netflix-logo-transparente.png'
import seta from '../img/seta-netflix2.png'
import sino from '../img/sino-netflix.svg'

function NavDetalhes(){

    return (
        <div className='nav-all'>

        <div className='nav-detalhes'>
            <img src={logo} className='logo-netflix'/>
            <span className='link-detalhes'> Navegar </span>
            <img src={seta} className='seta-netflix'/>
        </div>

        <div className='nav-detalhes2'>
            <img src={sino} className='sino-netflix'/>
            <span className='link-detalhes'> Navegar </span>
          
        </div>
        </div>

    );
}

export default NavDetalhes;