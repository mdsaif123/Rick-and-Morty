import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Episode from "./Components/Pages/Episode"
import CardDetail from './Components/Cards/CardDetail'

const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<CardDetail/>}/>

        <Route path="/episode" element={<Episode/>}/>
        <Route path="/:id" element={<CardDetail/>}/>
        

      </Routes>
    </Router>
      
    </div>
  )
}

export default App
