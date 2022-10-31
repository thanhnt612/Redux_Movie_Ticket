import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import HomeTemplates from "./templates/HomeTemplates";
import BookingTicket from "./Pages/Booking/BookingTicket";
import './index.css'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplates />}>
          <Route index element={<BookingTicket />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
