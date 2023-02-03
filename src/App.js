import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home'
import Users from './pages/Users/Users'
import Contact from './pages/Contact'
import About from './pages/About'
import UserName from './pages/UserName'
import Navbar from './component/Navbar'
import { GlobalProvider } from "./context/GlobalState";
import "./App.css"

const App = () => {
  return (
    <GlobalProvider>
    <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/user' element={<Users />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/user/:name' element={<UserName />} />
    </Routes>
    </BrowserRouter>
    </div>
    </GlobalProvider>
  )
}

export default App
