import './FilmeDetalhes.css'
import Menusuperior from './Menusuperior';
import Menuinferior from './MenuInferior';
import NavDetalhes from './NavDetalhes';

function FilmeDetalhes(){
    return (
        <div className='tela-detalhes'>
                <NavDetalhes/>

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
