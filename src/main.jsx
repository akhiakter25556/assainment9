


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       { path: "/", element: <Home /> },
//       {
//         path: "/skill/:id",
//         element: (
//           <PrivateRoute>
//             <SkillDetails />
//           </PrivateRoute>
//         ),
//       },
//       { path: "/login", element: <Login /> },
//       { path: "/signup", element: <Signup /> },
//     ],
// {
//  path: "/skills/:id",
//     element: (
//       <PrivateRoute>
//         <SkillDetails />
//       </PrivateRoute>
//     ),
//   },
//   <RouterProvider router={router} />
// <ToastContainer position="top-center" />

//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AuthProvider>
//       <RouterProvider router={router} />
//     </AuthProvider>
//   </React.StrictMode>
// );
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import AuthProvider from "./component/AuthProvider/AuthProvider.jsx";
// import "./index.css";

// import Home from "./Home/Home";
// import SkillDetails from "./SkillDetails/SkillDetails";
// import ErrorPage from "./ErrorPage/ErrorPage";
// import PrivateRoute from "./component/privetRoute/PrivateRoute";
// import Login from "./Login/Login";
// import Signup from "./Signup/Signup";
// import AppLayout from "./layouts/AppLayout.jsx";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// // import MyProfile from "./MyProfile/MyProfile";
// // import ForgotPassword from "../ForgotPassword/ForgotPassword";

// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Toaster } from "react-hot-toast";

// AOS.init({ duration: 700, once: true });

// // render এ Toaster যোগ করো
// // <Toaster position="top-center" />

// // 🧭 এখানে সব Route সেট করা হলো
// const router = createBrowserRouter([
// {
//   path: "/profile",
//   element: (
//     <PrivateRoute>
//       <MyProfile />
//     </PrivateRoute>
//   ),
// },
// {
//   path: "/forgot-password",
//   element: <ForgotPassword />,
// },



//   {
//     path: "/",
//     element: <AppLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/skill/:id", // Skill Details Page (Protected)
//         element: (
//           <PrivateRoute>
//             <SkillDetails />
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/signup",
//         element: <Signup />,
//       },
//     ],
//   },
// ]);

// // ⚙️ Root Render
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AuthProvider>
//       <RouterProvider router={router} />
//       <ToastContainer position="top-center" />
//     </AuthProvider>
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvider from "./component/AuthProvider/AuthProvider.jsx";
import "./index.css";

import Home from "./Home/Home";
import SkillDetails from "./SkillDetails/SkillDetails";
import ErrorPage from "./ErrorPage/ErrorPage";
import PrivateRoute from "./component/privetRoute/PrivateRoute";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import AppLayout from "./layouts/AppLayout.jsx";
// import MyProfile from "./MyProfile/MyProfile.jsx";
// import ForgotPassword from "./ForgotPassword/ForgotPassword.jsx";

import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import MyProfile from "./component/MyProfile/MyProfile.jsx";
import ForgotPassword from "./component/ForgotPassword/ForgotPassword.jsx";



AOS.init({ duration: 700, once: true });

// ✅ সমস্ত রাউট এখানে সেট করা হলো
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/skill/:id", // Protected Skill Details
        element: (
          <PrivateRoute>
            <SkillDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile", // Protected My Profile
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);

// ⚙️ Root Render
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" /> {/* react-hot-toast */}
    </AuthProvider>
  </React.StrictMode>
);







