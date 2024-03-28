import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import { Home } from "./Components/Home/HomeC.jsx";
import Contact from "./Components/Contact/Contactc.jsx";
4;
import { About } from "./Components/About/Abouta.jsx";
import { GIt, GitLoader } from "./Components/github/GIt.jsx";
import Use from "./Components/User/Comp.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="git" loader={GitLoader} element={<GIt />} />
      <Route path="user/:id" element={<Use />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
