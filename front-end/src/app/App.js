import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Signin from '../pages/Signin/Signin';
import Profile from '../pages/Profile/Profile';
import PageNotFound from '../pages/PageNotFound/PageNotFound';

function App() {
  return (
    <div className='body-container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App