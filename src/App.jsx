import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Covering from './Pages/Covering'
import SpaceCraft from './Pages/SpaceCraft'
import History from './Pages/History'

function App() {


  return (
    <>
  
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/covering" element={<Covering />} />
        <Route path="/spacecraft" element={<SpaceCraft />} />


      </Routes>
    </>
  )
}

export default App
