import './MainContent.css'
import Playground from "./MainContent/Playground";
import Group from "./MainContent/Group";
import OJ from "./MainContent/OJ";
import UDE from "./MainContent/UDE";

function MainContent() {
    return (
        <div className="MainContent">
            <Playground />
            <Group />
            <OJ/>
            <UDE/>
        </div>
    )
}

export default MainContent;