import './BotaoInfo.css'
import { AiTwotoneInfoCircle } from "react-icons/ai";

function BotaoInfo(){
    return(
    <div className='Botao2'>
        
        <span className='Botao-Info'>
    <AiTwotoneInfoCircle color ="ffffff" className='Icone'/>
    Mais informações
    </span>
    </div>
    );
}
export default BotaoInfo;