import './FilmeDetalhes.css'
import Menusuperior from './Menusuperior';
import Menuinferior from './MenuInferior';
import Barra from './NavBar';

function FilmeDetalhes(){
    return (
        <div className='tela-detalhes'>

          <div className='barra'>
             <Barra  className="navbar"/> 
             </div>

         <div className='superior'>
                <Menusuperior />
          </div>
     
               <div className='inferior'>
                <Menuinferior />
              </div>

        </div>

    );
}

export default FilmeDetalhes;
