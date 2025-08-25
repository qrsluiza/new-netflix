import './BotaoAssistir.css'
import { FaPlay } from "react-icons/fa";

function BotaoAssistir(){
    return(
    <div className='Botao'>
        
        <span className='Botao-Assistir'>
    <FaPlay color ="000000" className='Icone'/>
       Assistir
       </span>
    </div>
    );
}
export default BotaoAssistir;
