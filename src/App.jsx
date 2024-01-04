import { BrowserRouter,Routes,Route } from 'react-router-dom';
import FetchData from './DataFetch/FetchData'
import Home from './Home';


function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/api' element={<FetchData/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
