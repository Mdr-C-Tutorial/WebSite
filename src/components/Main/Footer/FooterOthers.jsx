import './FooterOthers.css'
import { Link } from 'react-router-dom';

function FooterOthers() {
    return (
        <footer className="FooterOthers">
            <h1>Others</h1>
            <div style={{ marginLeft: ".5vw" }}>
                <Link to={"/feedback"}>
                    <p>Feedback</p>
                </Link>
                <Link to={"https://qm.qq.com/q/dt2eY9PE8o"} target="_blank">
                    <p>Contact Mdr</p>
                </Link>
                <Link to={"/about"}>
                    <p>About this Website</p>
                </Link>
                <Link to={"/stories"}>
                    <p>History and Fun</p>
                </Link>
                <Link to={"/credits"}>
                    <p>Credits</p>
                </Link>
                <Link to={"/tech"}>
                    <p>Technology Stacks</p>
                </Link>
            </div>
        </footer>
    )
}

export default FooterOthers;