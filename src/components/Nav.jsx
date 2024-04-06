import './Nav.css';
import { FaGithub } from "react-icons/fa";
import Search from "./Nav/Search";

function Nav(){
    return(
        <div className="Nav">
            <div className="Nav-Left">
                <p className="Nav-Left-Title">
                    Mdr-C-Tutorial
                </p>
                <Search/>
            </div>
            <div className="Nav-Right">
                <p className="Log-In" onClick={function (){window.location.href="/login"}}>Log in</p>
                <a href="https://github.com/Mdr-C-Tutorial/C">
                    <FaGithub className="Nav-Icon Icon-Link"/></a>
            </div>
        </div>
    )
}

export default Nav;