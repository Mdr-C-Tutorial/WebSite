import React, { useEffect, useState } from "react";
import "./Register.css";
import ReturnMainPage from "../mess/ReturnMainPage";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const url = "/login"
    useEffect(() => {
        document.title = "Register | Mdr-C-Tutorial";
    }, []);

    const register = (e) => {
        e.preventDefault();
        // axios. .....
    };

    return (
        <div className="Register">
            <ReturnMainPage />
            <div className="RegisterContainer">
                <div className="RegisterMain">
                    <h1>Register</h1>
                    <form onSubmit={register}>
                        <label>
                            Username:
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Password:
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Password Again:
                            <input
                                type="password"
                                required
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <button type="submit">Register</button>
                        <a href={url}>已有账号？前去登录</a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
