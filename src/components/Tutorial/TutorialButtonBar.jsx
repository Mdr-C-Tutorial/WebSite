import './TutorialButtonBar.css';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {Link} from "react-router-dom"

function TutorialButtonBar() {
    return (
        <div className="Tutorial-Button-Bar">
            <Link to={"https://mdr.aymao.com/C/"}>
                <div id="Repository-Button">
                    Repository
                    <FaArrowLeft />
                </div>
            </Link>
            <Link to={"https://godbolt.org/z/1b965v1hx"}>
                <div id="Playground-Button">
                    Playground
                    <FaArrowRight />
                </div>
            </Link>
        </div>
    )
}

export default TutorialButtonBar;