import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./components/Login/Login";
import Discussion from "./components/Discussion/Discussion";
import Mdr from "./components/Mdr/Mdr";
import Story from "./components/Story/Story";
import TechStack from "./components/TechStack/TechStack";
import Tutorial from "./components/Tutorial/Tutorial";
import Credits from "./components/Credits/Credits";
import FeedBack from "./components/FeedBack/FeedBack";
import About from "./components/About/About";
import SearchPage from "./components/Search/SearchPage";
import HelloWorld from "./components/Tutorial/HelloWorld/HelloWorld";
import Numbers from "./components/Tutorial/Numbers/Numbers";
import Statements from './components/Tutorial/Statements/Statements';
import Functions from './components/Tutorial/Functions/Functions';
import ArraysPointers from './components/Tutorial/ArraysPointers/ArraysPointers';
import StructuresEnums from './components/Tutorial/StructuresEnums/StructuresEnums';
import Concurrent from './components/Tutorial/Concurrent/Concurrent';
import Register from './components/Register/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/discussion" element={<Discussion />} />
        <Route path="/mdr" element={<Mdr />} />
        <Route path="/story" element={<Story />} />
        <Route path="/tech" element={<TechStack />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/feedback" element={<FeedBack />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/tutorial/01/:id" element={<HelloWorld />} />
        <Route path="/tutorial/02/:id" element={<Numbers />} />
        <Route path="/tutorial/03/:id" element={<Statements />} />
        <Route path="/tutorial/04/:id" element={<Functions />} />
        <Route path="/tutorial/05/:id" element={<ArraysPointers />} />
        <Route path="/tutorial/06/:id" element={<StructuresEnums />} />
        <Route path="/tutorial/07/:id" element={<Concurrent />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example, reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
