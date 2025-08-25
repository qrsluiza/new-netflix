import './Account.css'
import MenuLateral from '../components/MenuLateral';
import NavConfig from '../components/NavConfig';
import CardPlano from '../components/CardPlano';

function Account(){
    return(
        <div className='tela2'>
            <NavConfig/>

        <div className='telaaa'>
            <div className='Aba-Lateral'>
                < MenuLateral/>
            </div>

            <div className='centro'> 
                <div className='aba-central1'>
                    <CardPlano/>
                </div>

            </div>

            </div>

        </div>
    )
}

export default Account;