import './Cnovidades.css'
import kitty from '../img/kitty.jpg'
import chicobento from '../img/chicobento.jpg'
import dark from '../img/dark.jpg'
import corre from '../img/corre.jpeg'
import outb from '../img/outb.jpeg'
import hill from '../img/hill1.jpg'
import sweet from '../img/sweet.webp'

function Cnovidades(){
    return(
    <div className='container2'>
        
        <span className='c-novidades'>
            Novidades na Netflix
        </span>

        <div className='fotos2'>
            <img className='capas2' src={sweet}/>
            <img className='capas2' src={hill}/>
            <img className='capas2' src={kitty}/>
            <img className='capas2' src={dark}/>
            <img className='capas2' src={corre}/>
            <img className='capas2' src={outb}/>
            <img className='capas2' src={chicobento}/>

        </div>
    </div>
    );
}

export default Cnovidades;