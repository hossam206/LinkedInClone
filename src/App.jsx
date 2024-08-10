import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LogIn from "./Components/LogIn";

import Header from "./Components/Header";
import { useDispatch } from "react-redux";

import Home from "./Components/Home";
import { getAuth } from "./redux/Functions/main_Functions";
import ProtectRout from "./Components/ProtectRout";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuth());
  }, []);
  const router = createBrowserRouter([
    {
      element: <LogIn />,
      path: "/",
    },
    {
      path: "/home",
      element: (
        <>
          <ProtectRout>
            <Header />
            <Home />
          </ProtectRout>
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
