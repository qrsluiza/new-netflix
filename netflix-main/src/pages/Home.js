import './Home.css'
import NavBar from '../components/NavBar'
import NavNetflix from '../components/NavNetflix'
import NavTitulo from '../components/NavTitulo'
import BotaoAssistir from '../components/BotaoAssistir';
import BotaoInfo from '../components/BotaoInfo';
import NavIdade from '../components/NavIdade';
import NavVol from '../components/NavVol';
import CDubladas from '../components/CDubladas';
import Cnovidades from '../components/Cnovidades';
import Cnovahistoria from '../components/Cnovahistoria';
import Ctop10 from '../components/Ctop10';


function Home(){
    return(
        <div className='tela'>
            <NavBar/>

        <div className='geral'>

            <div className='titulo'>
            <NavNetflix/>
            <NavTitulo/>
            </div>
        

            <div className='Botoes'>
            <BotaoAssistir/>
            <BotaoInfo/>
            </div>

        </div>

            <div className='Lateral'>
            <NavVol/>
            <span className='separador'>|</span>
            <NavIdade/>
            </div>

            <div className='Carrossel'>
            <CDubladas/>
            <Cnovidades/>
            <Cnovahistoria/>
            <Ctop10/>
            </div>

        </div>
    );
}

export default Home;