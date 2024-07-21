import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './styles/styles.css';
import App from './App';
import reportWebVitals from './scripts/reportWebVitals';
import MenuPage from './MenuPage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './AboutPage';

// import writeData from './scripts/database';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const location = useLocation();

useEffect(() => {
  if (location.pathname === '/') {
    const link = document.createElement('link')
    link.rel = 'preload';
    link.as = 'image';
    link.href = `${process.env.PUBLIC_URL}/images/acai-ingredients.webp`
    document.head.appendChild(link)
  }
}, [location]);

root.render(
  <React.StrictMode>
    <Header/>
    <Router>
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/menu" Component={MenuPage} />
        <Route path="/about" Component={AboutPage} />
      </Routes>
    </Router>
    <Footer/>
  </React.StrictMode>
);

// writeData();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
