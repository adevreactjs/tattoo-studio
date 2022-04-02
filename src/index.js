import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainGallery from './components/galarry/MainGallery';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './components/aboutUs/AboutUs';
import Contacts from './components/contacts/Contacts';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/gallery" element={<MainGallery />}></Route>
        <Route path="/master" element={<MainGallery />}></Route>
        <Route path="/contacts" element={<Contacts/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
