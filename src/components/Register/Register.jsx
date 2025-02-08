import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { FaRegCircleCheck } from "react-icons/fa6";
import { BsChevronDoubleUp, BsChevronDoubleDown } from "react-icons/bs";
import { BiErrorAlt } from "react-icons/bi";
import ReturnMainPage from "../mess/ReturnMainPage";
import { host } from "../../mdr.config";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [email, setEmail] = useState("");

    // 0 null 1 valid -1 too long -2 too short -3 invalid chars
    const [usernameValid, setUsernameValid] = useState(0);
    const checkUsername = (username) => {
        if (username.length < 3) {
            setUsernameValid(-2);
        } else if (username.length > 18) {
            setUsernameValid(-1);
        } else {
            if (/^[a-zA-Z0-9]+$/.test(username)) {
                setUsernameValid(1);
            } else {
                setUsernameValid(-3);
            }
        }
    };

    // 0 null 1 valid -1 too long -2 too short -3 invalid chars
    const [passwordValid, setPasswordValid] = useState(0);

    const checkPassword = (password) => {
        if (password.length < 8) {
            setPasswordValid(-2);
        } else if (password.length > 16) {
            setPasswordValid(-1);
        } else {
            if (/\s/.test(password)) {
                setPasswordValid(-4); // 包含空格
                return;
            }

            if (!/(?=.*[A-Za-z])(?=.*\d)/.test(password)) {
                setPasswordValid(-3); // 缺少字母或数字
                return;
            }
            setPasswordValid(1);
        }
    };

    const [emailValid, setEmailValid] = useState(0);

    // 0 null 1 valid -1 invalid email
    const checkEmail = (email) => {
        const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (regex.test(email)) {
            setEmailValid(1);
        } else {
            setEmailValid(-1);
        }
    };
    const url = host + '/register'
    useEffect(() => {
        document.title = "Register | Mdr-C-Tutorial";
    }, []);

    const register = (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            return;
        }
        if (usernameValid !== 1 || passwordValid !== 1 || emailValid !== 1) return;

        // 发送注册请求到后端
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password, email }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    window.location.href = "/registered";
                } else {
                    alert("Failed to register. Please try again later.")
                }
            })
            .catch((error) => console.error("Error:", error));
    };

    return (
        <div className="Register">
            <ReturnMainPage />
            <div className="RegisterContainer">
                <div className="RegisterMain">
                    <h1>Register</h1>
                    <form onSubmit={register} spellCheck={false}>
                        <label>
                            <h2>Username:</h2>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => { setUsername(e.target.value); checkUsername(e.target.value); }}
                                required
                            />
                            <div id="RegisterUsernameChecker">
                                {usernameValid === -1 && <span className="TooLong"><BsChevronDoubleUp /><p>Maximum length is 18</p></span>}
                                {usernameValid === -2 && <span className="TooShort"><BsChevronDoubleDown /><p>Minimum length is 3</p></span>}
                                {usernameValid === -3 && <span className="IllegalCharacter"><BiErrorAlt />Only [0-9A-Za-z] legal</span>}
                                {usernameValid === 1 && <span className="Valid"><FaRegCircleCheck /></span>}
                            </div>
                        </label>
                        <label>
                            <h2>Password:</h2>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value); checkPassword(e.target.value); }}
                                required
                            />
                            <div id="RegisterPasswordChecker">
                                {passwordValid === -1 && <span className="TooLong"><BsChevronDoubleUp /><p>Maximum length is 16</p></span>}
                                {passwordValid === -2 && <span className="TooShort"><BsChevronDoubleDown /><p>Minimum length is 8</p></span>}
                                {passwordValid === -3 && <span className="Illegal"><BiErrorAlt />Must contain Numbers and Letters</span>}
                                {passwordValid === -4 && <span className="Illegal"><BiErrorAlt />No space allowed</span>}
                                {passwordValid === 1 && <span className="Valid"><FaRegCircleCheck /></span>}
                            </div>
                        </label>
                        <label>
                            <h2>Password Again:</h2>
                            <input
                                type="password"
                                value={passwordConfirm}
                                onChange={(e) => { setPasswordConfirm(e.target.value); }}
                                required
                            />
                            <div id="RegisterPasswordConfirmChecker">
                                {password !== passwordConfirm && <span className="Illegal"><BiErrorAlt />Password does not match</span>}
                            </div>
                        </label>
                        <label>
                            <h2>Email:</h2>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value); checkEmail(e.target.value); }}
                                required
                            />
                            <div id="RegisterEmailChecker">
                                {emailValid === -1 && <span className="Illegal"><BiErrorAlt />Invalid format</span>}
                                {emailValid === 1 && <span className="Valid"><FaRegCircleCheck /></span>}
                            </div>
                        </label>
                        <button type="submit">Register</button>
                        <Link to={url}>Already had accounts? <span>Log in</span></Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
