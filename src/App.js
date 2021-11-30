import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Addservice from "./Pages/Dashboard/Addservice/Addservice";
import Services from "./Pages/Services/Services/Services";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import Navigation from "./Pages/Shared/Navigation";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Book from "./Pages/Book/Book";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageProducts from "./Pages/Dashboard/ManageProducts/ManageProducts";
import ManageOrders from "./Pages/Dashboard/ManageOrders/ManageOrders";
import MyBookings from "./Pages/Dashboard/MyBookings/MyBookings";
import Payment from "./Pages/Dashboard/Payment/Payment";
import Review from "./Pages/Dashboard/Review/Review";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import AddExperts from "./Pages/Dashboard/AddExperts/AddExperts";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/dashboard" element={<DashboardHome />} />
              <Route
                path="/dashboard/makeAdmin"
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/addservice"
                element={
                  <AdminRoute>
                    <Addservice />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/manageproduct"
                element={
                  <AdminRoute>
                    <ManageProducts />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/manageallorder"
                element={
                  <AdminRoute>
                    <ManageOrders />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/addexperts"
                element={
                  <AdminRoute>
                    <AddExperts />
                  </AdminRoute>
                }
              />
              <Route path="/dashboard/mybookings" element={<MyBookings />} />
              <Route path="/dashboard/payment/:bookingid" element={<Payment />} />
              <Route path="/dashboard/review" element={<Review />} />
            </Route>
            {/* <Route path="/add" element={<Addservice />} /> */}
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/book/:id"
              element={
                <PrivateRoute>
                  <Book />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
