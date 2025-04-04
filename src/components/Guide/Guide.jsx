import './Guide.css'
import { FaChevronRight, FaAngleUp, FaAngleDown, FaAnglesLeft, FaAnglesRight, FaPlus, FaMinus, FaCircleDot } from "react-icons/fa6";

export default function Guide() {
    return (
        <div className="Guide">
            <div className="GuideHeader">
                <div className="MCT">
                    <span>M</span><span>C</span><span>T</span>
                </div>
                <div className="GuideText">Guide</div>
            </div>
            <div className="GuideBar">
                <div className="GuideBarLeft">

                    <div className="PageSelector">
                        <FaChevronRight />
                        <div className="PageTitle">1 - 使用指南</div>
                    </div>
                    <div className="PageChanger">
                        <div className="PageChangeItem">
                            <FaAnglesLeft />
                        </div>
                        <div className="PageChangeItem">
                            <FaMinus />
                        </div>
                        <div className="PageChangeItem">
                            <FaPlus />
                        </div>
                        <div className="PageChangeItem">
                            <FaAnglesRight />
                        </div>
                    </div>
                </div>
                <div className="GuideBarRight">
                    <div className="CompilerSelector">
                        <FaChevronRight />
                        <div className="CompilerName">
                            <div className="CompilerFloater">
                                <div className="CompilerFloatCard">
                                    <div className="CompilerItem Selected">
                                        <FaCircleDot />
                                        <div className="CompilerItemName"><span>GCC</span> 16.0</div>
                                    </div>
                                    <div className="CompilerItem">
                                        <FaCircleDot />
                                        <div className="CompilerItemName"><span>Clang</span> 21.0</div>
                                    </div>
                                </div>
                            </div>
                            <span>GCC</span> 16.0
                        </div>
                    </div>
                    <div className="StandardSelector">
                        <div className="StandardCurrent">C<span>23</span></div>
                        <div className="StandardFloater">
                            <div className="StandardUpper Disabled">
                                <FaAngleUp />
                            </div>
                            <div className="StandardLower">
                                <FaAngleDown />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}