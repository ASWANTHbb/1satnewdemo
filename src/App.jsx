import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Covering from './Pages/Covering';
import SpaceCraft from './Pages/SpaceCraft';
import History from './Pages/History';
import Cart from './Pages/Cart';
import Payment from './Pages/Payment';
import DebitCredit from './Pages/DebitCredit';
import Login from './Pages/Login';
import Partner from './Pages/Partner';
import BodilyCov from './Pages/BodilyCov';
import PartnerReg from './Pages/PartnerReg';
// import AdminDashboard from './Pages/AdminDashboard';  // Import Admin Dashboard
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles
import './App.css';
import Map from './components/Map';
import AddProduct from './Pages/AddProduct';
import ViewProduct from './Pages/ViewProduct';

function App() {
  return (
    <>
      {/* Global Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/covering" element={<Covering />} />
        <Route path="/spacecraft" element={<SpaceCraft />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/debitcredit" element={<DebitCredit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
        <Route path="/map" element={<Map />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/bodily-covering/:id" element={<BodilyCov />} />
        <Route path="/PartnerRegister" element={<PartnerReg />} />
        
        {/* Admin Route */}
        {/* <Route path="/admin" element={<AdminDashboard />} />  */}
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path='/view' element={<ViewProduct/>}/>
      </Routes>
    </>
  );
}

export default App;
