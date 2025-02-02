import React, { useEffect, useState } from "react";
import "./Login.css";
import ReturnMainPage from "../mess/ReturnMainPage";
import { host } from "../../mdr.config";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
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
            <div className="Login_C">
                <div className="Login_main">
                    <h1>登录</h1>
                    <form onSubmit={login}>
                        <label>
                            账号：
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </label>
                        <br />
                        <label>
                            密码：
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>
                        <br />
                        <button type="submit">登录</button>
                        <br />
                        <a href={url}>还没账号？前去注册</a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
