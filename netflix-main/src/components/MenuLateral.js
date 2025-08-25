import './MenuLateral.css'
import { MdHouse } from "react-icons/md";
import { MdCreditCard } from "react-icons/md";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { PiLegoSmiley } from "react-icons/pi";
import { FaArrowLeftLong } from "react-icons/fa6";

function MenuLateral(){

    return(
        <div className='menu-lateral'>
            
        <div className='menu'> 
        <FaArrowLeftLong className='icon'/>
        <span>Voltar á Netflix</span>
        </div>

        <div>

        <div className='menu'> 
        <MdHouse className='icon'/>
        <span className='negrito'>Visão geral</span>
        </div>
        
        <div className='menu'> 
        <MdCreditCard  className='icon'/>
        <span>Assinatura</span>
        </div>

        <div className='menu'> 
        <MdOutlineVerifiedUser className='icon'/>
        <span>Segurança</span>
        </div>

        <div className='menu'> 
        <FaComputer className='icon'/>
        <span>Aparelhos</span>
        </div>

        <div className='menu'> 
        <PiLegoSmiley className='icon'/>
        <span>Perfis</span>
        </div>

        </div>
        
        </div>

    );
}

export default MenuLateral;