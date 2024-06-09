import { Home } from './components/home/Home';
import { Header } from './components/header/Header';
import { Learn } from './components/learn/Learn';
import Pdf from './components/pdf';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "./index.css"
function App() {

  return (
  
      <div className="App">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/' element={<Home/>} />
            <Route path='/learn' element={<Learn/>}/>
            <Route path="/pdf" element={<Pdf />} />
            {/* <Route path='/menu' element={<Menu/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<Login/>}/> */}
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App