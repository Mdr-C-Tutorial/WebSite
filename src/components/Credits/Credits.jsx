import './Credits.css';
import ReturnMainPage from '../mess/ReturnMainPage';
import { FaGithub } from "react-icons/fa";
import { FaWifi, FaBilibili } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io';
import CreditsItem from './CreditsItem';
import OrganizationCreditsItem from './OrganizationCreditsItem';
import { GiMusicalScore } from 'react-icons/gi';
import { SiCsdn } from "react-icons/si";
import { BsDatabaseDown } from 'react-icons/bs'; import { RiZhihuLine } from "react-icons/ri";

function Credits() {
    document.title = "Credits | Mdr-C-Tutorial";
    return (
        <div className="Credits">
            <ReturnMainPage />
            <h1>Credits</h1>
            <h2>Contributors</h2>
            <div className="Credits-Wrapper">
                <CreditsItem name="mdr" links={[{ logo: <FaGithub />, to: "https://github.com/Minsecrus" }]} big="Mdr" />
                <CreditsItem name="@幻" links={[{ logo: <FaGithub />, to: "https://github.com/huan201" }]} />
                <CreditsItem name="LY-Xiang" links={[{ logo: <FaGithub />, to: "https://github.com/LY-Xiang" }]} big="LYX" />
                <CreditsItem name="JuaJuanchi" links={[{ logo: <FaGithub />, to: "https://github.com/Jua-Juanchi" }]} />
                <CreditsItem name="No" links={[{ logo: <FaGithub />, to: "https://github.com/Kroner" }, { logo: <FaWifi />, to: "https://www.cnblogs.com/Kroner" }]} />
                <CreditsItem name="革匊习习中" links={[{ logo: <FaGithub />, to: "https://github.com/Juvwxyz" }]} />
                <CreditsItem name="叶子" links={[{ logo: <FaGithub />, to: "https://github.com/FHU-yezi" }, { logo: <IoLogoJavascript />, to: "https://www.jianshu.com/u/ea36c8d8aa30" }]} />
                <CreditsItem name="0x7E7" links={[{ logo: <FaGithub />, to: "https://github.com/20080217" }]} big="0x7E7" />
                <CreditsItem name="菲露露" links={[{ logo: <FaGithub />, to: "https://github.com/LovelyLavender4" }]} />
                <CreditsItem name="Telecomadm" links={[{ logo: <FaGithub />, to: "https://github.com/telecomadm1145" }]} />
                <CreditsItem name="WHITE TREE" links={[{ logo: <FaGithub />, to: "https://github.com/VinbeWan" }]} big="WT" />
                <CreditsItem name="XIAOYI12" links={[{ logo: <FaGithub />, to: "https://github.com/xiaoyi1212" }]} big="XIAOYI" />
                <CreditsItem name="Min0911Y" links={[{ logo: <FaGithub />, to: "https://github.com/min0911Y" }]} />
                <CreditsItem name="A4-Tacks" links={[{ logo: <FaGithub />, to: "https://github.com/A4-Tacks" }]} />
                <CreditsItem name="ChatRBQ" links={[{ logo: <FaGithub />, to: "https://github.com/fawdlstty" }]} />
                <CreditsItem name="Kill" links={[{ logo: <FaGithub />, to: "https://github.com/Killcerr" }]} />
                <CreditsItem name="Lixuanze" links={[{ logo: <FaGithub />, to: "https://github.com/Lxzaa-code" }]} />
                <CreditsItem name="神说" links={[]} />
                <CreditsItem name="27Onion" links={[]} />
                <CreditsItem name="左·岚" links={[{ logo: <FaBilibili />, to: "https://space.bilibili.com/27619688" }]} />
                <CreditsItem name="猫球" links={[]} />
                <CreditsItem name="333" links={[]} />
                <CreditsItem name="Lucifer" links={[{ logo: <FaGithub />, to: "https://github.com/9lucifer" }, { logo: <SiCsdn />, to: "https://blog.csdn.net/dhrmt/" }]} />
                <CreditsItem name="Kaze" links={[{ logo: <RiZhihuLine />, to: "https://www.zhihu.com/people/you-you-wo-xin-72-2" }]} />
            </div>
            <h2>Organizations</h2>
            <div className="Credits-Wrapper">
                <OrganizationCreditsItem
                    name="艾猫工作室"
                    logo={<FaBilibili />}
                    link={"https://www.aymao.com/"}
                    links={[
                        { logo: <GiMusicalScore />, to: "https://m.aymao.com/" },
                        { logo: <BsDatabaseDown />, to: "https://pan.aymao.com/" }
                    ]}
                />
            </div>
            <h2>Special</h2>
            <div className="Credits-Wrapper">
                <CreditsItem name="FrankHB" links={[{ logo: <FaGithub />, to: "https://github.com/FrankHB" }]} />
                <CreditsItem name="Jajuju" links={[{ logo: <FaGithub />, to: "https://github.com/frederick-vs-ja" }]} />
                <CreditsItem name="Fresky" links={[{ logo: <FaGithub />, to: "https://github.com/Freskyz" }]} />
                <CreditsItem name="兔兔" links={[{ logo: <FaGithub />, to: "https://github.com/RGSS3" }]} />
            </div>

        </div>
    )
}

export default Credits;