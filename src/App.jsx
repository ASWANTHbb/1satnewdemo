import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles
import './App.css';
import Home from './Pages/Home';
import Covering from './Pages/Covering';
import SpaceCraft from './Pages/SpaceCraft';
import History from './Pages/History';
import Cart from './Pages/Cart';
import Payment from './Pages/Payment';
import DebitCredit from './Pages/DebitCredit';
import Login from './Pages/Login';

function App() {
  return (
    <>
      {/* Global Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/covering" element={<Covering />} />
        <Route path="/spacecraft" element={<SpaceCraft />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/debitcredit" element={<DebitCredit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
