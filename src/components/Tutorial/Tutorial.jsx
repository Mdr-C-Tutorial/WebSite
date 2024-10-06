import './Tutorial.css'
import ReturnMainPage from "../mess/ReturnMainPage";
import TutorialButtonBar from "./TutorialButtonBar";
import { Link } from "react-router-dom";
import ParseSentence from '../mess/markdownparser';
// eslint-disable-next-line react-refresh/only-export-components
export function scrollToAnchor(anchorName) {
    if (anchorName) {
        // 找到锚点
        let anchorElement = document.getElementById(anchorName);
        // 如果对应id的锚点存在，就跳转到锚点
        if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
    }
}

function Tutorial() {
    let para00 = "本页面为 **引导式教程**，查看讲义请点击上方 `Handout` 按钮。"
    let para01 = "在本部分，你将学习 `**printf**` 函数的用法。"
    let para02 = "：讲述历史，发展，语言标准等。"
    let para03 = "：讲解 `printf` 函数输出 **字符串** 的功能。"
    let para04 = "：讲解如何给 `printf` 函数添加额外 **参数**，并用 **格式化字符** 将这些参数包含在输出的内容当中。"

    let para11 = "在本部分，你将学习对象和运算符的知识，了解如何计算值和改变对象的值。"
    let para12 = "：讲解对象和一些常见类型。"
    let para13 = "：讲解赋值运算符。"
    let para14 = "：讲解其他常用运算符。"

    document.title = 'Guided-Tutorial | Mdr-C-Tutorial';
    return (
        <div className="Tutorial">
            <ReturnMainPage />
            <div className="Tutorial-Title">
                <h1><span><span>引导式</span>教程</span> Mdr-C-Tutorial</h1>
                <TutorialButtonBar />
            </div>
            <div className="Tutorial-Main">
                <div className="Tutorial-Main-Content">
                    <h3>目录</h3>
                    <Link to="/tutorial/01/0">输出字符串</Link>
                    <Link to="/tutorial/02/0">对象与运算</Link>
                    <Link to="/tutorial/03/0">分支与循环</Link>
                    <Link to="/tutorial/04/0">函数与递归</Link>
                    <Link to="/tutorial/05/0">数组与指针</Link>
                    <Link to="/tutorial/06/0">结构与枚举</Link>
                    <Link to="/tutorial/07/0">并发与原子</Link>
                </div>
                <div className="Tutorial-Main-Article">
                    <ParseSentence str={para00} />
                    <Link to={"/tutorial/01/0"}>
                        <h1>输出字符串</h1>
                    </Link>
                    <ParseSentence str={para01} />
                    <p>
                        <Link to="/tutorial/01/0">1. C语言的基本知识</Link>
                        <ParseSentence inline={true} str={para02} />
                    </p>
                    <p>
                        <Link to="/tutorial/01/1">2. 输出字符串</Link>
                        <ParseSentence inline={true} str={para03} />
                    </p>
                    <p>
                        <Link to="/tutorial/01/2">3. 添加参数</Link>
                        <ParseSentence inline={true} str={para04} />
                    </p>
                    <Link to={"/tutorial/02/0"}>
                        <h1>对象与运算</h1>
                    </Link>
                    <ParseSentence str={para11} />
                    <p>
                        <Link to="/tutorial/02/0">1. 对象和类型</Link>
                        <ParseSentence inline={true} str={para12} />
                    </p>
                    <p>
                        <Link to="/tutorial/02/1">2. 赋值运算符</Link>
                        <ParseSentence inline={true} str={para13} />
                    </p>
                    <p>
                        <Link to="/tutorial/02/2">3. 其他运算符</Link>
                        <ParseSentence inline={true} str={para14} />
                    </p>
                    <Link to={"/tutorial/02/0"}>
                        <h1>对象与运算</h1>
                    </Link>
                    <Link to={"/tutorial/03/0"}>
                        <h1>分支与循环</h1>
                    </Link>
                    <Link to={"/tutorial/04/0"}>
                        <h1>函数与递归</h1>
                    </Link>
                    <Link to={"/tutorial/05/0"}>
                        <h1>数组与指针</h1>
                    </Link>
                    <Link to={"/tutorial/06/0"}>
                        <h1>结构与枚举</h1>
                    </Link>
                    <Link to={"/tutorial/07/0"}>
                        <h1>并发与原子</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Tutorial;