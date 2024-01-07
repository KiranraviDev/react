import { BrowserRouter,Routes,Route } from 'react-router-dom';
import FetchData from './DataFetch/FetchData'
import Home from './Home';
import Javascript from './components/Javascript';
import Products from './components/Products';


function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/api' element={<FetchData/>}/>
    <Route path='/js' element={<Javascript/>}/>    
    <Route path='/product' element={<Products/>}/>


    </Routes>
    </BrowserRouter>
  )
}

export default App;
