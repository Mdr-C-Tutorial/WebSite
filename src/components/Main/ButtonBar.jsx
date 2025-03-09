import './ButtonBar.css'
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function ButtonBar() {
    return (
        <div className="Button-Bar">
            <Link to={"/guide/Chapter0"}>
                <div id="Start-Button">
                    Start
                </div>
            </Link>
            <Link to={"https://mdr.aymao.com/C/"}>
                <div id="Repository-Button">
                    Repository
                    <FaArrowRight />
                </div>
            </Link>
        </div>
    )
}

export default ButtonBar;