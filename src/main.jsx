import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./styles/index.css"
import HomeLayouts from "./layoutes/pages/HomeLayouts.jsx";
import RouteChangeHandler from "./components/shared/RouteChangeHandler.jsx";

createRoot(document.getElementById('root')).render(<StrictMode>
    <Router>
        <RouteChangeHandler />
        <Routes>
            <Route path="/" element={<HomeLayouts/>}/>
        </Routes>
    </Router>
</StrictMode>,)
