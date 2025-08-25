import './CardPlano.css'
import cartao from '../img/cartao.png'
import assinatura from '../img/assinatura.png'
import { TbDevicesStar } from "react-icons/tb";
import { IoCardOutline } from "react-icons/io5";
import { SiTinyletter } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";
import { GiPadlock } from "react-icons/gi";
import { BiHomeSmile } from "react-icons/bi";
import { PiWarningDiamondLight } from "react-icons/pi";
import { LuSettings } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import card1 from '../img/icon1.png'
import card2 from '../img/icon2.jpg'
import card3 from '../img/icon3.jpg'
import card4 from '../img/icon.jpg'

function CardPlano(){
    return(
        
        <div className='card-conta'>
        <span className='texto-negrito'>Conta</span>
        <span className='texto-normal'>Detalhes da assinatura</span>
        

            <div className='Card-1'>

            <img className='assinatura' src={assinatura}/>
            <span className='negrito-plano'>Plano Padrão</span>
            <span className='texto-plano'>Próximo pagamento: 31 de janeiro de 2025</span>
            
            <div>
            <img className='cartao' src={cartao}/>
            <span className='num-cartao'>**** **** **** 2777</span>
            </div>

            
            <div className='card-one'>
                <span className='negrito-ass'>Gerenciar assinatura </span>
            </div>

            </div>

            <div className='Card-atalho'>
                <span className='texto-atalho'>Atalhos</span>
            </div>

            <div className='Card-2'>

            <div className='Q1'>
                <div className='inicio'>
                <TbDevicesStar className='icon-atalho'/>
                    <span>Alterar plano</span>
                </div>
                <IoIosArrowForward className='seta-atalho'/>
            </div>

            <div className='Q1'>
                <div className='inicio'>
                    <IoCardOutline className='icon-atalho'/>
                    <span>Gerenciar a forma de pagamento</span>
            </div>
            <IoIosArrowForward className='seta-atalho'/>
            </div>

            <div className='Q1'>
                <div className='inicio'>
                        <SiTinyletter className='icon-atalho'/>
                        <div className='extra'>  
                            <span>Comprar um acesso de assinante extra </span>
                            <span className='Q1-texto'>Compartilhe sua Netflix com alguém que não mora com você</span>
                        </div>
            </div>
                        <div className='infoN'>                            
                            <span className='texto-novo'>NOVO</span>
                            <IoIosArrowForward className='seta-atalho'/>
                        </div>
            </div>


            <div className='Q1'>
                <div className='inicio'>
                <FaComputer className='icon-atalho'/>
                    <span>Gerenciar acesso a aparelhos </span>
                </div>
                <IoIosArrowForward className='seta-atalho'/>
            </div>


            <div className='Q1'>
                <div className='inicio'>
                <GiPadlock className='icon-atalho'/>
                    <span>Atualizar senha </span>
                </div>
                <IoIosArrowForward className='seta-atalho'/>
            </div>


            <div className='Q1'>
                <div className='inicio'>
                <BiHomeSmile className='icon-atalho'/>
                    <span>Transferir perfil </span>
                </div>
                <IoIosArrowForward className='seta-atalho'/>
            </div>


            <div className='Q1'>
                <div className='inicio'>
                <PiWarningDiamondLight className='icon-atalho'/>
                    <span>Ajustar o controle parental</span>
                </div>
                <IoIosArrowForward className='seta-atalho'/>
            </div>

            <div className='Q1'>
                <div className='inicio'>
                        <LuSettings className='icon-atalho'/>
                            <div className='extra'>  
                                <span>Editar configurações</span>
                                <span className='Q1-texto'>Idiomas, legendas, reprodução automárica, notificações, privacidade e muito mais</span>
                            </div>
                </div>
                <IoIosArrowForward className='seta-atalho'/>
            </div>

            </div>

            <div className='Card-3'>
                <div className='inicio2'>
                    <span className='card3-texto1'>Gerenciar perfis</span>
                    <span className='card3-texto2'>4 perfis</span>
                </div>

                <div className='card3-fotos'>
                <img src={card1} className='icon-card3'/>
                <img src={card2} className='icon-card3'/>
                <img src={card3} className='icon-card3'/>
                <img src={card4} className='icon-card3'/>
                <IoIosArrowForward className='seta-atalho2'/>
                </div>
                
            </div>

            </div>

            
    )
}

export default CardPlano;