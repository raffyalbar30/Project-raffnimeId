import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Viewspage from './Page/Viewspage.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
        <Routes>
         <Route path ="/" element={<App />}></Route>
         <Route path ="/views" element={<Viewspage />}></Route>
        </Routes>
      </Router>
  </React.StrictMode>,
)
