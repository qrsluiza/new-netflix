import {Routes, Route} from 'react-router-dom'
import Profiles from './pages/Profile'
import Home from './pages/Home'
import Account from './pages/Account'
import Detalhes from './components/FilmeDetalhes'

function MainRoutes(){
    return(
        <Routes>
    
            <Route path='/' element={<Profiles/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/account' element={<Account/>} />
            <Route path='/Detalhes' element={<Detalhes/>} />
        </Routes>
    );
}

export default MainRoutes;