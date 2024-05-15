import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom';
import Viewspage from './Page/Viewsanimepage.jsx'
import Viewsmangaka from './Page/Viewsmangaka.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
        <Routes>
         <Route path ="/" element={<App />}></Route>
         <Route path ="/animeviews" element={<Viewspage />}></Route>
         <Route path ="/mangakaviews" element={<Viewsmangaka />}></Route>
        </Routes>
      </Router>
  </React.StrictMode>,
)
