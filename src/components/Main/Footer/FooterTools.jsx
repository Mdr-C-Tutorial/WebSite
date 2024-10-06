import './FooterTools.css';
import { Link } from 'react-router-dom';

function FooterTools() {
    return (
        <footer className="FooterTools">
            <h1>Tools</h1>
            <div style={{ marginLeft: ".5vw" }}>
                <Link to={"https://visualstudio.microsoft.com/zh-hans/vs/"} target="_blank">
                    <p>Visual Studio 2022</p>
                </Link>
                <Link to={"https://code.visualstudio.com/Download/"} target="_blank">
                    <p>Visual Studio Code</p>
                </Link>
                <Link to={"https://www.devcpp6.com/"} target="_blank">
                    <p>Dev C++ 6.0 g</p>
                </Link>
            </div>
        </footer>
    )
}

export default FooterTools;