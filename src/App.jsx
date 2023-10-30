import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import NavBar from './components/utils/NavBar';
import Footer from './components/utils/Footer';
import HomePage from './components/HomePage';
import NotFound from './components/errorPages/NotFound';

function App() {
  return (
    <>
      <NavBar />
      <div className="d-flex flex-column" style={{ minHeight: '90vh', background: '#313131', paddingTop: '10vh' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;