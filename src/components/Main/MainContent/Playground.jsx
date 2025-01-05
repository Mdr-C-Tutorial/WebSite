import './Playground.css'
import PlaygroundRight from "./PlaygroundRight";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Playground() {
    return (
        <div className="Playground">
            <div className="Left">
                <h1>Playground</h1>
                <div style={{ marginLeft: ".5vw" }}>
                    <p>Run Your Code</p>
                    <p>In Any Time</p>
                </div>
                <h2 style={{ marginLeft: ".5vw" }}>ps: Not Only C Supported</h2>
                <Link to={"https://godbolt.org/z/1b965v1hx"} target="_blank"><button>Go!<FaArrowRight /></button></Link>
            </div>
            <div className="Right">
                <PlaygroundRight />
            </div>
        </div>
    )
}

export default Playground;