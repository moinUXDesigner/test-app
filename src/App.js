import React from 'react';
import Navbar from './components/Navbar';
// import Footer from './pages/Footer';
import AppRoutes from './Routes';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/App.css';

function App() {
  return (
    <>
   <Navbar />
   <AppRoutes />
   {/* <Footer /> */}
   </>
  );
}

export default App;
