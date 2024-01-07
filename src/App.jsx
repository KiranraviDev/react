import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import FetchData from './DataFetch/FetchData'
import Home from './Home';
import Javascript from './components/Javascript';
import ProductsComponent from './components/Products';


function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/api' element={<FetchData/>}/>
    <Route path='/js' element={<Javascript/>}/>    
    <Route path='/product' element={<ProductsComponent/>}/>


    </Routes>
    </BrowserRouter>
  )
}

export default App;
