import './NavConfig.css'
import logo from '../img/netflix-logo-transparente.png'
import icone from '../img/icon1.png'
import { IoIosArrowDown } from "react-icons/io";

function NavConfig(){
    return(
        <div className='Nav-Config'>

            <div className='netflix-logo'>
            <img src={logo} className='logotipo'/>
            </div>

            <div className='nav-config2'>
            <img className='icone-conta' src={icone}/>
            <IoIosArrowDown className='seta-icone'/>
            </div>
            
        </div>
    )
}


export default NavConfig;