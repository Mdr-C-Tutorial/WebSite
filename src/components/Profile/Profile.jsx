import './Profile.css';
import { useEffect } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";
import ReturnMainPage from '../mess/ReturnMainPage';

function Profile() {
    useEffect(() => {
        document.title = "Profile | Mdr-C-Tutorial";
    }, []);

    //test data
    const data = {
        username: "mdr",
        userid: "0001",
        email: "2972853299@qq.com",
        emailVerified: true,
        role: "admin",
    }
    return (
        <div className="Profile">
            <ReturnMainPage />
            <div className="ProfileContent">
                <div className="ProfileLeft">
                    <h1 className={data.role === "admin" ? "Admin" : "User"}>{data.username}</h1>
                    <p>id: {data.userid}</p>
                </div>
                <div className="ProfileRight">
                    <div>
                        <p>Username :</p>
                        <span>{data.username}<FaRegEdit /></span>

                    </div>
                    <div>
                        <p>Role :</p>
                        <span>{data.role}</span>
                    </div>
                    <div>
                        <p>Email :</p>
                        <span>{data.email}</span>
                        {
                            data.emailVerified ?
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