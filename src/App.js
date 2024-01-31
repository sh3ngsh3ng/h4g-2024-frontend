import React from 'react'
import { Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "../src/pages/landing-page/LandingPage";
import ErrorPage from "../src/pages/error-page/ErrorPage"

// Components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      {/* pages */}
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
