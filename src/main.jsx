import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts.css';
import './var.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Guide from './components/Guide/Guide';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className="Main">

    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/guide" element={<Guide/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example, reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
