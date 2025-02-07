import './Profile.css';
import ReturnMainPage from '../mess/ReturnMainPage';

function User() {
    return (
        <div className="Profile">
            <ReturnMainPage />
            <h1>Profile</h1>
            <div className="ProfileContent"></div>
        </div>
    )
}

export default User;