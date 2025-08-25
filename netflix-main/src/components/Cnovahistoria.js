import './Cnovahistoria.css'
import nine from '../img/nine.jpg'
import laranja from '../img/laranja.jpg'
import lobo from '../img/lobo.jpeg'
import ahs from '../img/ahs.jpg'
import vamp from '../img/vamp.jpg'
import darko from '../img/darko.jpeg'

function Cnovahistoria(){
    return(
    <div className='container3'>
        
        <span className='c-novidades'>
            Descubra novas histórias
        </span>

        <div className='fotos3'>
            <img className='capas3' src={nine}/>
            <img className='capas3' src={laranja}/>
            <img className='capas3' src={lobo}/>
            <img className='capas3' src={ahs}/>
            <img className='capas3' src={vamp}/>
            <img className='capas3' src={darko}/>


        </div>
    </div>
    );
}

export default Cnovahistoria;