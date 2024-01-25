import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Signin from '../pages/Signin';

function App() {
  return (
    <div className='body-container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
  
export default App