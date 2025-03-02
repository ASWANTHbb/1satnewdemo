import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Covering from './Pages/Covering'
import SpaceCraft from './Pages/SpaceCraft'
import History from './Pages/History'
import Cart from './Pages/Cart'
import Payment from './Pages/Payment'
import DebitCredit from './Pages/DebitCredit'

function App() {


  return (
    <>
  
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/covering" element={<Covering />} />
        <Route path="/spacecraft" element={<SpaceCraft />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/debitcredit' element={<DebitCredit />} />

      </Routes>

    </>
  )
}

export default App
