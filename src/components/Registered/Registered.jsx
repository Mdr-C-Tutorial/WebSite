import './Registered.css';
import ReturnMainPage from "../mess/ReturnMainPage";

function Registered() {
    return (
        <div className="Registered">
            <ReturnMainPage />
            <h1>You've already registered successfully.</h1>
            <h2>Check your email and <span>Click the Link</span> to verify your account.</h2>
        </div>
    )
}

export default Registered;