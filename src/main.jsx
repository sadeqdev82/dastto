import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "nprogress/nprogress.js"
import "nprogress/nprogress.css"
import "./styles/index.css"
import HomeLayouts from "./layoutes/pages/HomeLayouts.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayouts />} />
      </Routes>
    </Router>
  </StrictMode>,
)
