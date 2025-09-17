import "./Header.css"
import { logo } from "../utils/constant";
import { Link } from "react-router";

const Header = () => {
return(
    <div className="header">
        <div className="logo">
            <img src={logo} width={"40px"}/>
        </div>
        <div className="navlinks">
            <ul className="navlist">
                <li> 
            Home
                </li>
                 <li><Link to={"/about"}>  About</Link>
          
                </li> <li>
            Shop
                </li> <li>
            Cart
                </li>
            </ul>
        </div>
    </div>
)
}

export default Header;