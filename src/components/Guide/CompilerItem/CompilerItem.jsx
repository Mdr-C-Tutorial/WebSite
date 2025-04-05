import './CompilerItem.css'
import { FaCircleDot } from "react-icons/fa6";

export default function CompilerItem({ name, version, selected, onClick, releaseDate }) {
    return (
        <div 
            className={["CompilerItem", selected ? "Selected" : ""].join(" ")}
            onClick={onClick}
        >
            <FaCircleDot />
            <div className="CompilerInfo">
                <div className="CompilerName"><span>{name}</span></div>
                <div className="CompilerVersion">{version}</div>
                <div className="CompilerDate">{releaseDate}</div>
            </div>
        </div>
    )
}