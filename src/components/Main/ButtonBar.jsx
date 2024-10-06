import './ButtonBar.css'
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function ButtonBar() {
    return (
        <div className="Button-Bar">
            <Link to={"/tutorial"}>
                <div id="Start-Button">
                    Start
                </div>
            </Link>
            <Link to={"/discussion"}>
                <div id="Discussion-Button">
                    Discussion
                    <FaArrowRight />
                </div>
            </Link>
        </div>
    )
}

export default ButtonBar;