import  './CDubladas.css' 
import myname from '../img/name.jpg'
import round6 from '../img/round.webp'
import twd from '../img/twd.webp'
import lacasadepapel from '../img/lacasadepapel.jpeg'
import suits from '../img/suits.avif'
import witcher from '../img/witcher.webp'
import you from '../img/you.webp'
import Detalhes from '../components/FilmeDetalhes'
import {Link} from 'react-router-dom'

function CDubladas(){
    return(
    <div className='container'>
        
        <span className='c-dubladas'>
            Séries estrangeiras dubladas em português
        </span>

        <div className='fotos'>
            <Link to={'/Detalhes'}>
            <img className='capas' src={myname}/>
            </Link>
            <img className='capas' src={round6}/>
            <img className='capas' src={suits}/>
            <img className='capas' src={twd}/>
            <img className='capas' src={lacasadepapel}/>
            <img className='capas' src={witcher}/>
            <img className='capas' src={you}/>
        </div>
    </div>
    );
}

export default CDubladas;