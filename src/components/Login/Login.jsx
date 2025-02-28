import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import ReturnMainPage from "../mess/ReturnMainPage";
import { host } from "../../mdr.config";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const url = "/register"
    useEffect(() => {
        document.title = "Login | Mdr-C-Tutorial";
    }, []);

    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(host + "/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify({ username, password, remember }),
            });
            const data = await response.json();
            
            if (response.ok) {
                window.location.href = "/";
            } else {
                alert("登录失败：" + data.error);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("登录失败：网络错误");
        }
    };

    return (
        <div className="Login">
            <ReturnMainPage />
            <div className="LoginContainer">
                <div className="LoginMain">
                    <h1>Log&nbsp; &nbsp;In</h1>
                    <form onSubmit={login}>
                        <label>
                            <h2>Email:</h2>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            <h2>Password:</h2>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>
                        <div>
                            <div className="Remember">
                                <p>Remember me?</p>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={remember}
                                        onChange={(e) => setRemember(e.target.checked)}
                                    />
                                </label>
                            </div>
                            <button type="submit">Log in</button>
                        </div>
                        <Link to={url}>Haven't Got an account? <span>Register</span></Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
