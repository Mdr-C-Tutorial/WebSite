import React, { useEffect, useState } from "react";
import "./Register.css";
import ReturnMainPage from "../mess/ReturnMainPage";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
            <div className="Register_C">
                <div className="Register_main">
                    <h1>注册</h1>
                    <form onSubmit={register}>
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
                        <button type="submit">注册</button>
                        <br />
                        <a href={url}>已有账号？前去登录</a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
