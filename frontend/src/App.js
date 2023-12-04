import React, { useState, useEffect } from "react";
import "./App.css";
import ManageMenu from "./ResManager/ManageMenu";
import Dashboard from "./ResManager/DashBoard";
import LoginPage from "./ResManager/LoginPage";
import EditItem from "./ResManager/EditItemForm";
import AddItem from "./ResManager/AddItem";
import CustomerLogin from "./Customer/screen/CustomerLogin"
import Home from "./Customer/screen/home";
import Menuitemsc from "./Customer/screen/menuitemsc";
import RealEstatePage from "./Customer/screen/RealEstatePage"
import Navbar from "./Customer/components/navbar";
import Topbar from "./Customer/components/topbar";

// import SearchBar from "./components/filter";
// import Topbar from "./Customer/components/topbar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [rsName, SetrsName] = useState("NOTLOGINEDIN");

  const loginHandler = (loginResObj) => {
    SetrsName(loginResObj);
  };

  const router = createBrowserRouter([
    {
      path: "/restuarant",
      element: <Dashboard rsname={rsName}></Dashboard>,
      errorElement: <h1>Error</h1>,
    },
    {
      path: "/Login",
      element: <CustomerLogin rsname={rsName}></CustomerLogin>,
      errorElement: <h1>Error</h1>,
    },
    {
      path: "/EditItem/:type",
      element: <EditItem></EditItem>,
      errorElement: <h1>Error</h1>,
    },
    {
      path: "/AddItem",
      element: <AddItem rsname={rsName}></AddItem>,
      errorElement: <h1>Error</h1>,
    },
    {
      path: "/manageMenu",
      element: <ManageMenu rsname={rsName}></ManageMenu>,
      errorElement: <h1>Error</h1>,
    },
    {
      path: "/LoginPage",
      element: <LoginPage onLogin={loginHandler}></LoginPage>,
      errorElement: <h1>Error</h1>,
    },
    {
      path: "/menuitemsc/:type",
      element: <Menuitemsc />,
      errorElement: <h1>Error</h1>,
    },
    {
      path: "/home",
      element: <Home />,
      errorElement: <h1>Error</h1>,
    },
    {
      path: "/",
      element: <Home />,
      errorElement: <h1>Error</h1>,
    },
    {
      path: "/RealEstatePage/:type",
      element: <RealEstatePage />,
      errorElement: <h1>Error</h1>,
    },
    {
      path: "/Contact",
      element: (
        <h1>
          <br /> Harris Aamir: i200943@nu.edu.pk <br />
          <br /> Muhammad Uzair: i202341@nu.edu.pk <br />
          <br /> Ashish Jumani: i200494@nu.edu.pk <br />
          <br /> Hamda Zahir: i200477@nu.edu.pk
        </h1>
      ),
      errorElement: <h1>Error</h1>,
    },
    {
      path: "/Cart",
      element: <h1>Under construction</h1>,
      errorElement: <h1>Error</h1>,
    },
  ]);

  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        rel="stylesheet"
      />
      <Topbar />
      <Navbar />
      <br></br>
      <RouterProvider router={router} forceRefresh={true} />
    </div>
  );
}

export default App;
