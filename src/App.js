import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css"

// UI
import { ChakraProvider, Box, Center, AbsoluteCenter } from "@chakra-ui/react";

// Pages
import LandingPage from "../src/pages/landing-page/LandingPage";
import ErrorPage from "../src/pages/error-page/ErrorPage";
import AuthPage from "./pages/auth-page/AuthPage";
import UserPage from "./pages/user-page/UserPage";
import AdminPage from "./pages/admin-page/AdminPage"
import { PrivateRoutes } from "./components/utilities/PrivateRoutes";

import { ToastContainer } from "react-toastify";
import { AdminRoutes } from "./components/utilities/AdminRoute";

function App() {
  return (
    <ChakraProvider>
      {/* pages */}
      <Box h="100vh" w="100vw" bg="#FFFFFF">
        <div id="main-div">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
            <Route path="/signup" element={<AuthPage />}></Route>
            <Route element={<PrivateRoutes />}>
              <Route path="/user" element={<UserPage />}></Route>
            </Route>
            <Route element={<AdminRoutes />}>
              <Route path="/admin" element={<AdminPage />}></Route>
            </Route>
          </Routes>
        </div>
      </Box>
    </ChakraProvider>
  );
}

export default App;
