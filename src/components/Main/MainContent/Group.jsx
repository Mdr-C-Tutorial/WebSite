import './Group.css'
import GroupLeft from "./GroupLeft";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function Group() {
    return (
        <div className="Group">
            <div className="Left">
                <GroupLeft />
            </div>
            <div className="Right">
                <h1>Group</h1>
                <div style={{ marginLeft: ".5vw" }}>
                    <p>Share your Idea</p>
                    <h2>&&</h2>
                    <p>Ask Questions</p>
                    <h2>&&</h2>
                    <p>PDF Books</p>
                </div>
                <Link to={"https://qm.qq.com/q/ZQqvoa8Fcm"} target="_blank">
                    <button>
                        <FaArrowLeft />Join!
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Group;