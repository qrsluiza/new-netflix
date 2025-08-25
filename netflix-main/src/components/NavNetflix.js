import './NavNetflix.css'
import { RiNetflixFill } from "react-icons/ri";

function NavNetflix(){
    return(
        <div className='Menu'>
            <RiNetflixFill className='Icone'/>
            <span className='texto'>S É R I E</span>
        </div>
    )
}

export default NavNetflix;
