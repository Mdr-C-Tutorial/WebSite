import './Profile.css';
import { useState, useEffect } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";
import ReturnMainPage from '../mess/ReturnMainPage';
import { host } from '../../mdr.config';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [countdown, setCountdown] = useState(3);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Profile | Mdr-C-Tutorial";

        const fetchUserData = async () => {
            try {
                const response = await fetch(`${host}/profile`, {
                    method: 'GET',
                    credentials: 'include',
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserData(data);
                } else {
                    setError('Please login again to access user information');
                    let count = 3;
                    setCountdown(count);
                    const timer = setInterval(() => {
                        count--;
                        setCountdown(count);
                        if (count === 0) {
                            clearInterval(timer);
                            navigate('/login');
                        }
                    }, 1000);
                }
            } catch (error) {
                setError('Network error');
                let count = 3;
                setCountdown(count);
                const timer = setInterval(() => {
                    count--;
                    setCountdown(count);
                    if (count === 0) {
                        clearInterval(timer);
                        navigate('/login');
                    }
                }, 1000);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [navigate]);

    if (loading) {
        return <div className="Profile"><p>Loading...</p></div>;
    }

    if (error) {
        return (
            <div className="Profile">
                <div className="ProfileError">
                    <p>{error}</p>
                    <p>Redirecting to login page in {countdown} seconds...</p>
                </div>
            </div>
        );
    }

    if (!userData) {
        return null;
    }

    return (
        <div className="Profile">
            <ReturnMainPage />
            <div className="ProfileContent">
                <div className="ProfileLeft">
                    <h1 className={
                        [
                            userData.role === "admin" ? "Admin" : "User",
                            userData.username.length > 10 ? "Long" :
                                userData.username.length > 5 ? "Medium" :
                                    "Short",
                        ].join(" ")
                    }>{userData.username}</h1>
                    <p>id: {userData.userid}</p>
                </div>
                <div className="ProfileRight">
                    <div>
                        <p>Username :</p>
                        <span>{userData.username}<FaRegEdit /></span>
                    </div>
                    <div>
                        <p>Role :</p>
                        <span>{userData.role}</span>
                    </div>
                    <div>
                        <p>Email :</p>
                        <span>{userData.email}</span>
                        {
                            userData.emailVerified ?
                                <span className="Verified"><CiCircleCheck />Verified</span> :
                                <span className="NotVerified">To Verify<GoArrowRight /></span>
                        }
                    </div>
                    <button>Log Out</button>
                </div>
            </div>
        </div>
    )
}

export default Profile;