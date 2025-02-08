import './Nav.css';
import { FaChevronDown } from "react-icons/fa";
import { GiDiscussion } from "react-icons/gi";
import { BsDropletHalf } from "react-icons/bs";
import Search from "./Nav/Search";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { host } from '../mdr.config';
import PropTypes from 'prop-types';
import { LuFileCode } from 'react-icons/lu';

function Nav() {
    const [isLogged, setIsLogged] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch(host + '/login', {
                    method: 'GET',
                    credentials: 'include', // 允许发送和接收 Cookie
                });

                if (response.ok) {
                    const data = await response.json();
                    setIsLogged(true);
                    setUsername(data.userName);
                } else {
                    setIsLogged(false);
                }
            } catch (error) {
                console.error('Error checking auth:', error);
                setIsLogged(false);
            }
        };
        checkAuth();
    }, []);

    return (
        <div className="Nav">
            <div className="Nav-Left">
                <p className="Nav-Left-Title">
                    Mdr-C-Tutorial
                </p>
                <Search />
            </div>
            <div className="Nav-Right">
                {
                    isLogged ? (
                        <Link to="/profile" className="LoggedIn">
                            <p className="LoggedIn">{username}</p>
                        </Link>
                    ) : (
                        <Link to="/login" className="LogIn">
                            <p className="LogIn">Log In</p>
                        </Link>
                    )
                }
                <div className="Website">
                    <div className="WebsiteListContainer">
                        <div className="WebsiteList">
                            <Link rel="noreferrer" target={"_blank"} to="https://github.com">Github</Link>
                            <Link rel="noreferrer" target={"_blank"} to="https://godbolt.org">Compiler Explorer</Link>
                            <Link rel="noreferrer" target={"_blank"} to="https://zh.cppreference.com">C++ Reference</Link>
                            <Link rel="noreferrer" target={"_blank"} to="https://stackoverflow.com">Stack Overflow</Link>
                        </div>
                    </div>
                    <p>Website</p>
                    &nbsp;
                    <div className="WebsiteChevronDownWrapper">
                        <FaChevronDown id="ChevronDown" />
                    </div>
                </div>
                <Link to="/discussion" target={"_blank"}>
                    <GiDiscussion className="Nav-Icon Icon-Link" />
                </Link>
                <Link to="https://github.com/Mdr-C-Tutorial/C" target={"_blank"}>
                    <BsDropletHalf className="Nav-Icon Icon-Link" />
                </Link>
                <Link to="https://github.com/Mdr-C-Tutorial/Website" target={"_blank"}>
                    <LuFileCode className="Nav-Icon Icon-Link" />
                </Link>
            </div>
        </div>
    )
}

Nav.propTypes = {
    user: PropTypes.string,
}

export default Nav;