import './Standard.css'
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

export default function Standard({ current, onStandardChange }) {
    const standards = ['89', '95', '99', '11', '17', '23', '29'];
    const currentIndex = standards.indexOf(current);

    const handleUp = () => {
        if (currentIndex < standards.length - 1) {
            onStandardChange(standards[currentIndex + 1]);
        }
    };

    const handleDown = () => {
        if (currentIndex > 0) {
            onStandardChange(standards[currentIndex - 1]);
        }
    };

    return (
        <div className="StandardSelector">
            <div className="StandardCurrent">C<span>{current}</span></div>
            <div className="StandardFloater">
                <div
                    className={["StandardUpper", currentIndex === standards.length - 1 ? "Disabled" : ""].join(" ")}
                    onClick={handleUp}
                >
                    <FaAngleUp />
                </div>
                <div
                    className={["StandardLower", currentIndex === 0 ? "Disabled" : ""].join(" ")}
                    onClick={handleDown}
                >
                    <FaAngleDown />
                </div>
            </div>
        </div>
    )
}