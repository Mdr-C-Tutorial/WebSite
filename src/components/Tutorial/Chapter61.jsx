import './Chapter.css';
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Chapter61() {
    return (
        <div>
            <div className="Chapter-Bottom">
                <div className="Chapter-Bottom-Left">
                    <Link to="/tutorial/05/1"><FaArrowLeft />上一章</Link>
                </div>
                <div className="Chapter-Bottom-Right">
                    <Link to="/tutorial/06/1">下一页<FaArrowRight /></Link>
                </div>
            </div>
        </div>
    )
}

export default Chapter61;