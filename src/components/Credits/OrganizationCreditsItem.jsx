import './OrganizationCreditsItem.css'
import { Link } from 'react-router-dom';
import { VscBlank } from "react-icons/vsc";

function OrganizationCreditsItem({ name, logo, links, link }) {
    const linksMap = links.map((link, index) =>
        <Link key={`org-${name}-link-${index}`} rel="noreferrer" target={"_blank"} to={link.to}>
            {link.logo}
        </Link>
    )

    return (
        <div className="OrganizationCreditsItem">
            <div className="OrganizationLogo">
                {link ? <Link rel="noreferrer" target={"_blank"} to={link}>{logo || <VscBlank />}</Link> : logo}
            </div>
            <div className="OrganizationInfo">
                <span>{name}</span>
                <div className="OrganizationLinks">
                    {links.length > 0 ? linksMap : <VscBlank />}
                </div>
            </div>
        </div>
    )
}

export default OrganizationCreditsItem;