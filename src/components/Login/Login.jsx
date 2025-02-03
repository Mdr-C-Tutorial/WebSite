import React, { useEffect, useState } from "react";
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

    const login = (e) => {
        e.preventDefault();
        // url host+"/login"
        fetch(host + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((response) => {
            if (response.ok) {
                window.location.href = "/";
            } else {
                alert("登录失败");
            }
        }).catch((error) => {
            console.error("Error:", error);
        });
    };

    return (
        <div className="Login">
            <ReturnMainPage />
            <div className="LoginContainer">
                <div className="LoginMain">
                    <h1>Log&nbsp; &nbsp;In</h1>
                    <form onSubmit={login}>
                        <label>
                            Email:
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
                        <button type="submit">Log in</button>
                        <a href={url}>还没账号？前去注册</a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
