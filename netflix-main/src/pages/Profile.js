import './Profile.css'
import SelecaoPerfil from '../components/SelecaoPerfil';

import icon1 from '../img/icon1.png'
import icon2 from '../img/icon2.jpg'
import icon3 from '../img/icon3.jpg'
import icon4 from '../img/icon.jpg'

function Profile (){
const usuario1 = {nome: 'Luiza', foto:icon1}
const usuario2 = {nome: 'Carol', foto:icon2}
const usuario3 = {nome: 'Wal', foto:icon3}
const usuario4 = {nome: 'Matheus', foto:icon4}

const usuarios = [usuario1, usuario2, usuario3, usuario4];

    return(
    <SelecaoPerfil listaDeUsuarios={usuarios}/>
    );
}

export default Profile;

