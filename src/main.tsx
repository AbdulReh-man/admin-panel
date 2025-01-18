import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Dashboard from "./scenes/dashboard";
import Bar from "./scenes/mybar";
import Faq from "./scenes/faq";
import Geography from "./scenes/geography";
import Invoices from "./scenes/invoices";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import Signup from "./scenes/global/Signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path='bar' element={<Bar />} />
      <Route path='faq' element={<Faq />} />
      <Route path='form' element={<Form />} />
      <Route path='geography' element={<Geography />} />
      <Route path='invoices' element={<Invoices />} />
      <Route path='line' element={<Line />} />
      <Route path='pie' element={<Pie />} />
      <Route path='team' element={<Team />} />
      <Route path='contacts' element={<Contacts />} />
      <Route path='signup' element={<Signup />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
