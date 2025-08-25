import './Ctop10.css'
import emilly from '../img/emilly.jpg'
import dead from '../img/all-dead.jpg'
import prision from '../img/prison-break.jpg'
import dexter from '../img/dexter.jpg'
import crow from '../img/thecrow.jpg'
import rainha from '../img/rainha.webp'
import brid from '../img/brid.jpg'
import anne from '../img/anne.webp'
import the100 from '../img/100.jpg'
import cobra from '../img/cobra.jpg'

function Ctop10(){
    return(
        <div className='container4'>
        
        <span className='c-top10-'>
            Brasil: top 10 em séries hoje
        </span>

        <div className='Carrossel-Numerado'>
            
            <div className='cards4'>
            <span className='numero'>1</span>
            <img className='capas4' src={emilly}/>
        </div>

        <div className='cards4'>
            <span className='numero'>2</span>
            <img className='capas4' src={dead}/>
        </div>

        <div className='cards4'>
            <span className='numero'>3</span>
            <img className='capas4' src={prision}/>
        </div>

        <div className='cards4'>
            <span className='numero'>4</span>
            <img className='capas4' src={dexter}/>
        </div>

        <div className='cards4'>
            <span className='numero'>5</span>
            <img className='capas4' src={crow}/>
        </div>

        <div className='cards4'>
            <span className='numero'>6</span>
            <img className='capas4' src={rainha}/>
        </div>

        <div className='cards4'>
            <span className='numero'>7</span>
            <img className='capas4' src={brid}/>
        </div>

        <div className='cards4'>
            <span className='numero'>8</span>
            <img className='capas4' src={anne}/>
        </div>

        <div className='cards4'>
            <span className='numero'>9</span>
            <img className='capas4' src={the100}/>
        </div>

        <div className='cards4'>
            <span className='numero'>10</span>
            <img className='capas4' src={cobra}/>
        </div>
        </div>

    </div>

    )
}

export default Ctop10;