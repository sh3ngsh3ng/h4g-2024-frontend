import React from "react";
import { Routes, Route } from "react-router-dom";

// UI
import { ChakraProvider } from "@chakra-ui/react";

// Pages
import LandingPage from "../src/pages/landing-page/LandingPage";
import ErrorPage from "../src/pages/error-page/ErrorPage";
import LoginPage from "./pages/auth-page/LoginPage";
import AuthPage from "./pages/auth-page/AuthPage";

// Components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import RegisterPage from "./pages/auth-page/RegisterPage";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      {/* pages */}
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
          <Route path="/signup" element={<AuthPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Routes>
      </main>
    </ChakraProvider>
  );
}

export default App;
