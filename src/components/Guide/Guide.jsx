import './Guide.css'
import { FaChevronRight, FaAnglesLeft, FaAnglesRight, FaPlus, FaMinus } from "react-icons/fa6";
import CompilerItem from './CompilerItem/CompilerItem'
import Standard from './Standard/Standard'
import { useState } from 'react';
import GuideEditor from './GuideEditor/GuideEditor';

export default function Guide() {
    const [compilers] = useState([
        { name: 'GCC', version: '16.0', releaseDate: '2024-01-14' },
        { name: 'Clang', version: '21.0', releaseDate: '2023-13-32' },
        { "name": "MSVC", "version": "29.37", "releaseDate": "2029-01-14" },
    ]);
    const [selectedCompiler, setSelectedCompiler] = useState(0);
    const [isCompilerListOpen, setIsCompilerListOpen] = useState(false);
    const [rightUnfolded, setRightUnfolded] = useState(true);
    const [showAnswer, setShowAnswer] = useState(true);

    const handleCompilerClick = (index) => {
        setSelectedCompiler(index);
        setIsCompilerListOpen(false);
    };
    const [currentStandard, setCurrentStandard] = useState('23');
    const [code, setCode] = useState('// 在这里编写你的代码\n');

    return (
        <div className="Guide">
            <div className="GuideHeader">
                <div className="MCT">
                    <span>M</span><span>C</span><span>T</span>
                </div>
                <div className="GuideText">Guide</div>
            </div>
            <div className="GuideBar">
                <div className={["GuideBarLeft", rightUnfolded ? "Unfolded" : ""].join(" ")}>

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
                <div className={["GuideBarRight", rightUnfolded ? "Unfolded" : "", rightUnfolded && showAnswer ? "WithAnswer" : ""].join(" ")}>
                    <div className={["CompilerSelector", isCompilerListOpen ? "Open" : ""].join(" ")} onClick={() => setIsCompilerListOpen(!isCompilerListOpen)}>
                        <FaChevronRight />
                        <div className="CompilerName">
                            <div className={["CompilerFloater", isCompilerListOpen ? "Open" : ""].join(" ")}>
                                <div className="CompilerFloatCard">
                                    {compilers.map((compiler, index) => (
                                        <CompilerItem
                                            key={compiler.name}
                                            name={compiler.name}
                                            version={compiler.version}
                                            releaseDate={compiler.releaseDate}
                                            selected={index === selectedCompiler}
                                            onClick={() => handleCompilerClick(index)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <p>
                                <span>{compilers[selectedCompiler].name}</span> {compilers[selectedCompiler].version}</p>
                        </div>
                    </div><Standard
                        current={currentStandard}
                        onStandardChange={setCurrentStandard}
                    />
                </div>
                <div className={["ShowAnswer", showAnswer ? "Visible" : ""].join(" ")}>
                    <div className="ShowAnswerText">显示答案</div>
                </div>
            </div>
            <div className="GuideContent">
                <div 
                    className={["GuideContentLeft", rightUnfolded ? "Unfolded" : ""].join(" ")}
                    onClick={() => {
                        setRightUnfolded(false);
                        setShowAnswer(false);
                    }}
                >
                    {/* 内容区域 */}
                </div>
                <div className={["GuideContentRight", rightUnfolded ? "Unfolded" : ""].join(" ")}>
                    <div 
                        className="GuideEditor"
                        onClick={() => {
                            setRightUnfolded(true);
                            setShowAnswer(true);
                        }}
                    >
                        <GuideEditor
                            value={code}
                            onChange={setCode}
                        />
                    </div>
                    <div 
                        className="GuideRunner"
                        onClick={() => setRightUnfolded(true)}
                    >
                        {/* 运行结果 */}
                    </div>
                </div>
            </div>
        </div>
    );
}