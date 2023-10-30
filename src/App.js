import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from "./components/about/about"
import Order from "./components/order/order.jsx"
import Contact from "./components/contact/contact"

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/order" element={<Order />} />
                <Route path="/contact" element={<Contact />} />


            </Routes>
        </Router>
    );
}

export default App;
