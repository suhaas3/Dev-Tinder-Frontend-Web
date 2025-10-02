import './style.css';
import './index.css';
import Body from './Components/Body';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Feed from './Components/Feed';
import Connections from './Components/Connections';


function App() {

  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Body/>}>
          <Route path='/' element={<Feed/>} />
          <Route path="/login" element={<Login/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/connections' element={<Connections/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
