import './Main.css'
import ButtonBar from "./Main/ButtonBar";
import MainContent from "./Main/MainContent";
import Footer from "./Main/Footer";

function Main() {
    document.title = "Main Page | Mdr-C-Tutorial";
    return (
        <div className="Main">
            <div className="MainTop">
                <p id="Title1">A</p>
                <p id="Title2">Free</p>
                <p id="Title3">C Tutorial</p>
                <p id="Subtitle">Standard, Original and Dedicated</p>
                <ButtonBar />
            </div>
            <MainContent />
            <Footer />
        </div>
    )
}

export default Main