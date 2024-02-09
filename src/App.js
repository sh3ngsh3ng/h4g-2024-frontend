import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// UI
import { ChakraProvider, Box, Center, AbsoluteCenter } from "@chakra-ui/react";

// Pages
import LandingPage from "../src/pages/landing-page/LandingPage";
import ErrorPage from "../src/pages/error-page/ErrorPage";
import AuthPage from "./pages/auth-page/AuthPage";
import UserPage from "./pages/user-page/UserPage";
import AdminPage from "./pages/admin-page/AdminPage";
import ProfilePage from "./pages/profile-page/ProfilePage";
import { PrivateRoutes } from "./components/utilities/PrivateRoutes";
import { Chart as ChartJS, defaults } from "chart.js/auto";

import { ToastContainer } from "react-toastify";
import { AdminRoutes } from "./components/utilities/AdminRoute";
import TestingPage from "./pages/landing-page/TestingPage";
import AttendancePage from "./pages/admin-page/AttendancePage";
import MarkAttendancePage from "./pages/user-page/MarkAttendancePage";

// Charts Set Up defaults
defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "center";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

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
            <Route path="/test" element={<TestingPage />}></Route>
            <Route element={<PrivateRoutes />}>
              <Route path="/user" element={<UserPage />}></Route>
            </Route>
            <Route element={<AdminRoutes />}>
              <Route path="/admin" element={<AdminPage />}></Route>
            </Route>
            <Route path="/admin/event/:slug/attendance" element={<AttendancePage />}></Route>
            <Route path="/event/:slug/markAttendance/:token" element={<MarkAttendancePage />}></Route>
          </Routes>
        </div>
      </Box>
    </ChakraProvider>
  );
}

export default App;
