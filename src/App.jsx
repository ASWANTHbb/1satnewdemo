import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

// Lazy Loading Pages
const Home = lazy(() => import("./Pages/Home"));
const Covering = lazy(() => import("./Pages/Covering"));
const SpaceCraft = lazy(() => import("./Pages/SpaceCraft"));
const History = lazy(() => import("./Pages/History"));
const Cart = lazy(() => import("./Pages/Cart"));
const Payment = lazy(() => import("./Pages/Payment"));
const DebitCredit = lazy(() => import("./Pages/DebitCredit"));
const Login = lazy(() => import("./Pages/Login"));
const Partner = lazy(() => import("./Pages/Partner"));
const BodilyCov = lazy(() => import("./Pages/BodilyCov"));
const PartnerReg = lazy(() => import("./Pages/PartnerReg"));
const AdminDashboard = lazy(() => import("./Pages/AdminDashboard"));
const Map = lazy(() => import("./components/Map"));
const AddProduct = lazy(() => import("./Pages/AddProduct"));
const ViewProduct = lazy(() => import("./Pages/ViewProduct"));
const AdminUpdate = lazy(() => import("./Pages/AdminUpdate"));

function App() {
  return (
    <>
      {/* Global Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />

      <Suspense fallback={<div>Loading...</div>}>
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
          <Route path="/admindashboard" element={<AdminDashboard />} />

          {/* Admin Routes */}
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/view" element={<ViewProduct />} />
          <Route path="/update" element={<AdminUpdate />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
