import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayOut from "./Components/RootLayOut";
import Home from "./Page/Home";
import Account from "./Page/Account";
import Settings from "./Page/Settings";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut />}>
      <Route index element={<Home />}></Route>
      <Route path="/account" element={<Account />}></Route>
      <Route path="/settings" element={<Settings />}></Route>
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
