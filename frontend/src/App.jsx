import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddProperty from "./components/AddProperty";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

import ExportContact from "./pages/ExportContact";
import PropertyManagement from "./pages/PropertyManegment";
import Advise from "./pages/Advise";
import Plane from "./components/Plane";
import CreateMyPlan from "./components/CreateMyPlan/CreateMyPlan";
import InvestmentPlanDisplay from "./components/CreateMyPlan/InvestmentPlanDisplay";
import Consultation from "./components/CreateMyPlan/Consultation";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/Contactus";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproperty" element={<AddProperty />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/exportcontact" element={<ExportContact/>} />
        <Route path="/propertymanagement" element={<PropertyManagement/>} />
        <Route path="/advise" element={<Advise />} /> 
        <Route path="/plane" element={<Plane />} />
        <Route path="/createmyplan" element={<CreateMyPlan />} />
        <Route path="/investmentplandisplay" element={<InvestmentPlanDisplay />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        
      </Routes> 
      <Footer />
    </>
  );
}

export default App;