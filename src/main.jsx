import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvider from "./hooks/AuthProvider.jsx";
import "./index.css";
import Home from "./Home/Home";
import ErrorPage from "./ErrorPage/ErrorPage";
import PrivateRoute from "./component/privetRoute/PrivateRoute";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import AppLayout from "./layouts/AppLayout.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import MyProfile from "./component/MyProfile/MyProfile.jsx";
import ForgotPassword from "./component/ForgotPassword/ForgotPassword.jsx";
import DetailsPage from "./component/DetailsPage.jsx";
import SkillDetails from "./component/SkillDetails/SkillDetails.jsx";
import AllItems from "./component/pages/AllItems.jsx";
import About from "./component/about/About.jsx";
import Contact from "./component/contact/Contact.jsx";
import Support from "./component/Support/Support.jsx";


AOS.init({ duration: 700, once: true });

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/skill/:id",
        element: (
          <PrivateRoute>
            <SkillDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Signup /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/skils/:id", element: <DetailsPage /> },
      { path: "/all-items", element: <AllItems /> },
      { path: "/about", element: <About /> },
      { path: "/support", element: <Support /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </AuthProvider>
  </React.StrictMode>
);
