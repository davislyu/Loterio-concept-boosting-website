import './Navbar.css'
import {useState} from "react"
import { Link } from 'react-router-dom';
import {GiOpenTreasureChest} from "react-icons/gi"
import {TfiClose} from "react-icons/tfi"
import {MdOutlineMenuOpen} from "react-icons/md"
import wowLogo from "../../assets/world-of-warcraft.png"

const Navbar = () => {
    const [active,setActive] = useState("noToggle")
    const handleToggle = () => {
        if (active === "toggle") {
            setActive("noToggle");
        } else {
            setActive("toggle");
        }
    }
    

    return(
        <nav className="nav">
            <div className="logo"><img src={wowLogo} alt="" /><span>Loterio.</span></div>
            <ul className={`navlinks ${active}`} onClick={handleToggle} >
                <li className="navlink">
                <Link to="/">Home</Link>
                </li>
                <li className="navlink">
                <Link to="/about">About</Link>
                </li>
                <li className="navlink">
                <Link to="/order">Order</Link>
                </li>
                <li className="navlink">
                <Link to="/contact">Contact</Link>
                </li>
                <li className="navlink">
                <Link to="/info">Info</Link>
                </li>
            </ul>
            <div onClick={handleToggle} className="icon">
                {active==="noToggle" ? <MdOutlineMenuOpen/> : <TfiClose/>  }
            </div>



        </nav>
    )

}

export default  Navbar