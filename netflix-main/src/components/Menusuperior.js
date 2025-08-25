import './Menusuperior.css'
import thumb from '../img/thumb2.webp'
import icone from '../img/perfil.png'
import mais from '../img/mais2.png'
import myname from '../img/myname.png'


function Menusuperior(){
    return (

        <div className='Menusuperior'>
    

            <div className='thumb-serie'>
                <img className='capa-principal' src={thumb} alt="thumb" />
               <div className='gradiente-overlay'></div>
            </div>

            <div className='thumb-info'>
                  <div className='thumb-titulo'>
                     <img src={myname} alt="myname" />
                </div>

                <div className='thumb-textos'>
                    <span className='star'>⭐⭐⭐⭐⭐</span>
                    <span>2021</span>
                    <span className='number-text'>16</span>
                    <span>1 temporada</span>
                </div>

              <div className='thumb-escrito1'>
                    <span>
                        Conta a história de Yoon Ji-woo, uma jovem que testemunha o assassinato de seu pai. Determinada a vingar sua morte, ela se infiltra em uma organização criminosa e, sob orientação do chefão, entra para a polícia como informante.
                    </span>
              </div>

              <div className='thumb-escrito2'>
                  <span> Estrelando: Han So-hee, Park Hee-soon, Kim Sang-ho, Lee Hak-joo.  </span>
                  <span> Gênero: Ação, Suspense, Drama </span>
                  <span> Cenas e Momentos: Emocionantes </span>
              </div>

             
                <div className='card-info'>
                  <img className='icone-ator' src={icone} alt="icone" />
                  <span> Han So-hee, Park Hee-soon, Ahn Bo-hyun, Kim Sang-ho, Lee Hak-joo, Chang Ryul, Yoon Kyung-ho, Baek Joo-hee, Moon Sang-min. </span>

               </div>

               <div className='card-lista'>
                 <img className='icone-mais' src={mais} alt="mais" />
                 <span>MINHA LISTA</span>
             
               </div>

               <div className='card-menu'>
    
                 <span className='cor-visao'>COMENTÁRIOS</span>
                 <span>TITULOS SEMELHANTES</span>
                 <span>DETALHES</span>
               </div>
            </div> 
          </div>

);
}

export default Menusuperior;
 