import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Login from "./Pages/Login.jsx"
import Home from "./Pages/Home.jsx"
import Register from "./Pages/Register.jsx"
import Addjobs from './Pages/Addjobs.jsx';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path= '/login' element={<Login/>} />
      <Route path= '/register' element={<Register/>} />
      <Route path='/addjobs' element={<Addjobs/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App
