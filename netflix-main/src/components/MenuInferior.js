import './MenuInferior.css'
import estrela from '../img/estrela.png'
import comentario from '../img/chat.png'
import coracao from '../img/coracao.png'
import mariana from '../img/Mariana.jpg'
import wal from '../img/wal.jpg'
import luiza from '../img/lu.jpg'
import carol from '../img/carol.jpg'

function MenuInferior(){
    return (

<div className='Menu-inferior'>

      <div className='card-comentario'>
        <img  src={mariana} className='icone-coment' alt="mariana" />

        <div className='textos-comentarios'>
        <span className='coment-text1'>_marianavanessa</span>
      <div className='card-avaliacao'>

          <div className='card-star'>
        <img  src={estrela} className='icone-star'/>
        <img  src={estrela} className='icone-star'/>
        <img  src={estrela} className='icone-star' />
        <img  src={estrela} className='icone-star' />
        </div>

        <img  src={comentario} className='icone-tag' />
      
      </div>
       <span className='coment-text'>A série é bem envolvente e cheia de reviravoltas. Gostei muito das cenas de luta, que são bem coreografadas e realistas, além da trilha sonora que combina com o clima tenso. A protagonista é forte e carismática, mas às vezes achei que algumas situações foram previsíveis. No geral, foi uma boa experiência, principalmente para quem gosta de drama policial com bastante ação.</span>
        
      <div className='card-interacao'>

        <img  src={coracao} className='icone-like'/>
        <span className='interacao-text'>Likes do Review</span>
        <span >5 likes</span>
        </div>

        <div className='card-interacao2'>
        <span className='interacao-text' >Data de Postagem:</span>
        <span>21/08/2025</span>

      </div>
      </div>
     </div>

     <div className='card-comentario'>
        <img  src={wal} className='icone-coment' alt="wal" />

        <div className='textos-comentarios'>
        <span className='coment-text1'>walggz</span>
      <div className='card-avaliacao'>

          <div className='card-star'>
        <img  src={estrela} className='icone-star'/>
        <img  src={estrela} className='icone-star'/>
        </div>

        <img  src={comentario} className='icone-tag' />
      
      </div>
       <span className='coment-text'>Assisti My Name por indicação, mas confesso que não é muito o tipo de série que me prende. A trama tem um ritmo acelerado e entrega bastante ação, o que pode agradar a muita gente, mas pra mim acabou ficando um pouco pesado e repetitivo. As lutas são bem feitas, intensas e realistas, só que depois de algumas cenas comecei a sentir que estava vendo mais do mesmo.</span>
        
      <div className='card-interacao'>

        <img  src={coracao} className='icone-like'/>
        <span className='interacao-text'>Likes do Review</span>
        <span >27 likes</span>
        </div>
        <div className='card-interacao2'>
        <span className='interacao-text' >Data de Postagem:</span>
        <span>21/08/2025</span>
      </div>
      </div>
     </div>


     <div className='card-comentario'>
        <img  src={luiza} className='icone-coment' alt="luiza" />

        <div className='textos-comentarios'>
        <span className='coment-text1'>lulizita</span>
      <div className='card-avaliacao'>

          <div className='card-star'>
        <img  src={estrela} className='icone-star'/>
        <img  src={estrela} className='icone-star'/>
        <img  src={estrela} className='icone-star' />
        <img  src={estrela} className='icone-star' />
        </div>

        <img  src={comentario} className='icone-tag' />
      
      </div>
       <span className='coment-text'>Gostei bastante de My Name. Achei a protagonista intensa e muito convincente, principalmente nas cenas de luta, que são bem realistas e cheias de energia. A série é curta, direta e não fica enrolando, o que me prendeu do início ao fim. Para quem curte ação misturada com drama, vale muito a pena.</span>
        
      <div className='card-interacao'>

        <img  src={coracao} className='icone-like'/>
        <span className='interacao-text'>Likes do Review</span>
        <span >19 likes</span>
        </div>
        <div className='card-interacao2'>
        <span className='interacao-text' >Data de Postagem:</span>
        <span>21/08/2025</span>
      </div>
      </div>
     </div>


     <div className='card-comentario'>
        <img  src={carol} className='icone-coment' alt="carol" />

        <div className='textos-comentarios'>
        <span className='coment-text1'>annecarolinefbg</span>
      <div className='card-avaliacao'>

          <div className='card-star'>
        <img  src={estrela} className='icone-star'/>
        <img  src={estrela} className='icone-star'/>
        <img  src={estrela} className='icone-star' />
        <img  src={estrela} className='icone-star' />
        <img  src={estrela} className='icone-star' />
        </div>

        <img  src={comentario} className='icone-tag' />
      
      </div>
       <span className='coment-text'>As cenas de ação são o ponto alto: nada coreografado de forma “bonitinha”, mas sim lutas cruas, rápidas e dolorosas, que passam uma sensação de realismo difícil de encontrar em outras produções. Outro detalhe que gostei muito foi a fotografia escura e pesada, que cria a atmosfera perfeita para a trama. Achei também que a duração da série é ideal, porque não enrola e mantém a tensão até o fim.</span>
        
      <div className='card-interacao'>

        <img  src={coracao} className='icone-like'/>
        <span className='interacao-text'>Likes do Review</span>
        <span >1K likes</span>
        </div>

      <div className='card-interacao2'>
        <span className='interacao-text' >Data de Postagem:</span>
        <span>21/08/2025</span>
      </div>

      </div>
     </div>
      </div>

);
}

export default MenuInferior;
 