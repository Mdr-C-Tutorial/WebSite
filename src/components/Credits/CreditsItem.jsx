import './CreditsItem.css'
import { Link } from 'react-router-dom';
import { VscBlank } from "react-icons/vsc";

function CreditsItem({ name, links, big = "" }) {
    const linksMap = links.map((link, index) =>
        <Link key={`credit-${name}-link-${index}`} rel="noreferrer" target={"_blank"} to={link.to}>
            {link.logo}
        </Link>
    )

    return (
        <div className={"Credits-Item" + (big === "" ? "" : " Big Credits-" + big)}>
            <span>{name}</span>
            <div className="Credits-Item-Links">
                {
                    links.length > 0 ? linksMap :
                        <Link key={`credit-${name}-blank`}><VscBlank /></Link>
                }
            </div>
        </div>
    )
}
export default CreditsItem;