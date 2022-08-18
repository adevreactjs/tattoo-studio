import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MainGallery from './components/galarry/MainGallery';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './components/aboutUs/AboutUs';
import Contacts from './components/contacts/Contacts';
import Master from './components/ourMaster/Master';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/tattoo-studio' element={<App />}></Route>
      <Route path='/tattoo-studio/about' element={<AboutUs />}></Route>
      <Route path='/tattoo-studio/gallery' element={<MainGallery />}></Route>
      <Route path='/tattoo-studio/master' element={<Master />}></Route>
      <Route path='/tattoo-studio/contacts' element={<Contacts />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
