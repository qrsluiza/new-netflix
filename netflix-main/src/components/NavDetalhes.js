import './NavDetalhes.css'
import logo from '../img/netflix-logo-transparente.png'
import seta from '../img/seta-netflix2.png'
import sino from '../img/sino-netflix.svg'
import icone from '../img/icon1.png'
import { IoIosArrowDown } from "react-icons/io";

function NavDetalhes(){

    return (
        <div className='Nav-Config2'>

            <div className='netflix-logo'>
            <img src={logo} className='logotipo2'/>
            </div>

            <div className='nav-config3'>
            <img className='icone-conta2' src={icone}/>
            <IoIosArrowDown className='seta-icone2'/>
            </div>
            </div>
    );
}

export default NavDetalhes;