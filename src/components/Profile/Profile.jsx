import './Profile.css';
import { useState, useEffect } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";
import ReturnMainPage from '../mess/ReturnMainPage';
import { host } from '../../mdr.config';
import { useNavigate } from 'react-router-dom';
import UuidDotMatrix from './UuidDotMatrix';

function Profile() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [countdown, setCountdown] = useState(3);
    const [isEditing, setIsEditing] = useState(false);
    const [newUsername, setNewUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Profile | Mdr-C-Tutorial";

        const fetchUserData = async () => {
            try {
                const response = await fetch(`${host}/api/auth/login`, {
                    method: 'GET',
                    credentials: 'include',
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserData(data);
                    setNewUsername(data.user.username);
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

    const logOut = () => {
        fetch(`${host}/api/auth/logout`, {
            method: 'DELETE',
            credentials: 'include',
        }).then(() => {
            navigate('/');
        });
    }

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

    const handleEditUsername = () => {
        setIsEditing(true);
    };

    const handleUpdateUsername = async () => {
        try {
            const response = await fetch(`${host}/api/user/${userData.user.id}`, {
                method: 'PATCH',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: newUsername }),
            });

            if (response.ok) {
                window.location.reload();
            } else {
                const error = await response.json();
                alert(error.message);
            }
        } catch (error) {
            console.error(error);
            alert('Network error');
        }
    };
    return (
        <div className="Profile">
            <ReturnMainPage />
            <div className="ProfileContent">
                <div className="ProfileLeft">
                    <h1 className={
                        [
                            userData.user.role === "admin" ? "Admin" : "User",
                            userData.user.username.length > 10 ? "Long" :
                                userData.user.username.length > 5 ? "Medium" :
                                    "Short",
                        ].join(" ")
                    }>{userData.user.username}</h1>
                    <UuidDotMatrix uuid={userData.user.id} />
                </div>
                <div className="ProfileRight">
                    <div>
                        <p>Username :</p>
                        {isEditing ? (
                            <span className="UsernameEdit">
                                <input
                                    type="text"
                                    value={newUsername}
                                    onChange={(e) => setNewUsername(e.target.value)}
                                    className="UsernameInput"
                                />
                                <button onClick={handleUpdateUsername}>✓</button>
                            </span>
                        ) : (
                            <span>{userData.user.username}<FaRegEdit onClick={handleEditUsername} /></span>
                        )}
                    </div>
                    <div>
                        <p>Role :</p>
                        <span>{userData.user.role}</span>
                    </div>
                    <div>
                        <p>Email :</p>
                        <span>{userData.user.email}</span>
                        {
                            userData.emailVerified ?
                                <span className="Verified"><CiCircleCheck />Verified</span> :
                                <span className="NotVerified">To Verify<GoArrowRight /></span>
                        }
                    </div>
                    <button onClick={logOut}>Log Out</button>
                </div>
            </div>
        </div>
    )
}

export default Profile;