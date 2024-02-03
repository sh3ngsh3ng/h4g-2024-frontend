import React from "react";
import { Routes, Route } from "react-router-dom";

// UI
import { ChakraProvider, Box } from "@chakra-ui/react";

// Pages
import LandingPage from "../src/pages/landing-page/LandingPage";
import ErrorPage from "../src/pages/error-page/ErrorPage";
import AuthPage from "./pages/auth-page/AuthPage";

// Components
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <ChakraProvider>
      {/* <Navbar /> */}
      {/* pages */}
      <Box h="100vh" w="100vw" bg="#FEDDDC">
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
          <Route path="/signup" element={<AuthPage />}></Route>
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
