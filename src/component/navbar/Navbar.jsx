import { Link, NavLink } from "react-router-dom";


export default function Navbar() {
return (
    <nav className="bg-mycolor py-7">
    <div className="container flex items-center gap-12 font-bold">
        <a className=" text-white text-3xl "
        href="#/"> Start Framework </a>
        <div className="ml-auto">
        <ul className="flex items-center gap-5 ">
            <li>
                
            <NavLink className="text-white "
            to="/learn-react/src/component/About/About.jsx">ABOUT</NavLink>
            </li>
            <li>
            <NavLink className="text-white "
            to="/learn-react/src/component/Portfolio/Portfolio.jsx">PORTFOLIO</NavLink>
            </li>
            <li>
            <NavLink className="text-white "
            to="/learn-react/src/component/Contact/Contact.jsx">CONTACT</NavLink>
            </li>
        </ul>

    </div>
    
    </div>
    </nav>
)
}
