import './TeckStack.css'
import ReturnMainPage from "../mess/ReturnMainPage";
import {Link} from 'react-router-dom'

function TechStack() {
    return (
        <div className="TechStack">
            <ReturnMainPage />
            <h1>TechStacks</h1>
            <Link to={"https://react.dev/"} target={"_blank"}>
                <p>React</p>
            </Link>
            <Link to={"https://discuss.flarum.org/"} target={"_blank"}>
                <p>Flarum</p>
            </Link>
            <Link to={"https://hydro.js.org/"} target={"_blank"}>
                <p>HydroOJ</p>
            </Link>
        </div>
    )
}

export default TechStack;