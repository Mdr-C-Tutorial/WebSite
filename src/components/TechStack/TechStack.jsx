import './TeckStack.css'
import ReturnMainPage from "../mess/ReturnMainPage";
import { Link } from 'react-router-dom'

function TechStack() {
    return (
        <div className="TechStack">
            <ReturnMainPage />
            <h1>TechStacks</h1>
            <div className="WebSite">
                <h2>主站：</h2>
                <Link to={"https://react.dev/"} target={"_blank"}>
                    <span>React</span>
                </Link>
            </div>
            <div className="WebSite">
                <h2>论坛：</h2>
                <Link to={"https://discuss.flarum.org/"} target={"_blank"}>
                    <span>Flarum</span>
                </Link>
            </div>
            <div className="WebSite">
                <h2>OJ：</h2>
                <Link to={"https://hydro.js.org/"} target={"_blank"}>
                    <span>HydroOJ</span>
                </Link>
            </div>

        </div>
    )
}

export default TechStack;