import './HelloWorld.css'
import Chapter11 from "../Chapter11";
import ReturnMainPage from "../../mess/ReturnMainPage";
import { useParams } from "react-router-dom";
import { GiPositionMarker } from "react-icons/gi";
import { FaClock } from "react-icons/fa6";
import Chapter12 from "../Chapter12";
import Chapter13 from "../Chapter13";
import Chapter14 from "../Chapter14";
import Chapter15 from "../Chapter15";

// eslint-disable-next-line react/jsx-key
const arr = [<Chapter11 />, <Chapter12 />, <Chapter13 />, <Chapter14 />, <Chapter15 />];

function ChapterLeft({ id }) {
    if (id === "0") {
        return (
            <div className="Chapter-Left">
                <h3>本页内容</h3>
                <p onClick={() => {
                    const section2 = document.querySelector("#hello-world-01");
                    section2.scrollIntoView({ behavior: "smooth" });
                }}>历史</p>
                <p onClick={() => {
                    const section2 = document.querySelector("#hello-world-02");
                    section2.scrollIntoView({ behavior: "smooth" });
                }}>语言标准</p>
            </div>
        )
    }
    if (id === "1") {
        return (
            <div className="Chapter-Left">
                <h3>本页内容</h3>
                <p onClick={() => {
                    const section2 = document.querySelector("#hello-world-0201");
                    section2.scrollIntoView({ behavior: "smooth" });
                }}>什么是字符串</p>
                <p onClick={() => {
                    const section2 = document.querySelector("#hello-world-0202");
                    section2.scrollIntoView({ behavior: "smooth" });
                }}>printf 输出字符串</p>
            </div>
        )
    }
    if (id === "2") {
        return (
            <div className="Chapter-Left">
                <h3>本页内容</h3>
                <p onClick={() => {
                    const section2 = document.querySelector("#hello-world-0301");
                    section2.scrollIntoView({ behavior: "smooth" });
                }}>为 printf 添加参数</p>
                <p onClick={() => {
                    const section2 = document.querySelector("#hello-world-0302");
                    section2.scrollIntoView({ behavior: "smooth" });
                }}>格式化字符的不同种类</p>
            </div>
        )
    }
    if (id === "3") {
        return (
            <></>
        )
    }
}

function HelloWorld() {
    document.title = "Hello World | Mdr-C-Tutorial"
    const params = useParams()
    let id = params.id
    return (
        <div className="HelloWorld">
            <ReturnMainPage />
            <div className="Chapter">
                <div className="Chapter-Top">
                    <h1>[1/7 章]: 输出字符串 <span><FaClock /> 20分钟 [{Number(id) + 1}/5 页]</span></h1>
                    <hr />
                </div>
                <div className="Chapter-Main">
                    <ChapterLeft id={id} />
                    <div className="Chapter-Right">
                        <div className="Current-Position">
                            <GiPositionMarker />
                            <a href='/'>主页</a>
                            <h6>&gt;</h6>
                            <a href="/tutorial">引导式教程</a>
                            <h6>&gt;</h6>
                            <h6>输出字符串</h6>
                        </div>
                        <div className="Latest-Update"><FaClock /> <h6>最近更新 2024-05-02 | Mdr</h6></div>
                        {arr[id]}
                    </div>
                </div>
            </div>
        </div>
    )
}

ChapterLeft.propTypes = {
    id: Number
}
export default HelloWorld