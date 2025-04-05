import './Guide.css'
import { FaChevronRight, FaAnglesLeft, FaAnglesRight, FaPlus, FaMinus, FaPlay, FaCopy, FaTrash } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";
import { LuRefreshCcwDot } from "react-icons/lu";
import { GrClearOption } from "react-icons/gr";
import CompilerItem from './CompilerItem/CompilerItem'
import Standard from './Standard/Standard'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import GuideEditor from './GuideEditor/GuideEditor';
import ErrorWarningList from './ErrorWarningList/ErrorWarningList';

export default function Guide() {
    const [compilers] = useState([
        { name: 'GCC', version: '16.0', releaseDate: '2024-01-14' },
        { name: 'Clang', version: '21.0', releaseDate: '2023-13-32' },
        { "name": "MSVC", "version": "29.37", "releaseDate": "2029-01-14" },
    ]);
    const [selectedCompiler, setSelectedCompiler] = useState(0);
    const [isCompilerListOpen, setIsCompilerListOpen] = useState(false);
    const [rightUnfolded, setRightUnfolded] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [isRunnerFlipped, setIsRunnerFlipped] = useState(false);  // 添加这一行

    // 0 GPT-4o; 1 DeepSeek V3
    const [model, setModel] = useState(0);
    const handleCompilerClick = (index) => {
        setSelectedCompiler(index);
        setIsCompilerListOpen(false);
    };
    const [currentStandard, setCurrentStandard] = useState('23');
    const [code, setCode] = useState('// 在这里编写你的代码\n');
    const [errorWarnings, setErrorWarnings] = useState([
        {
            id: 1,
            message: `'a' undeclared (first use in this function)
    2 |     a=2
      |     ^`,
            type: 'error',
            aied: true,
            aiMessage: "看起来你在使用 'a' 之前没有声明它。在 C 中，对象必须先声明后使用。",
        },
        {
            id: 2,
            message: "expected ';' before '}' token",
            type: 'error',
            aied: false,
            aiMessage: "",
        },
        {
            id: 3,
            message: "expected ';' before '}' token",
            type: 'error',
            aied: false,
            aiMessage: "",
        },
        {
            id: 4,
            message: "expected ';' before '}' token",
            type: 'error',
            aied: false,
            aiMessage: "",
        }
    ]);

    return (
        <div className="Guide">
            <div className="GuideHeader">
                <Link to={"/"}>
                    <div className="MCT">
                        <span>M</span><span>C</span><span>T</span>
                    </div></Link>
                <div className="GuideText">Guide</div>
            </div>
            <div className="GuideBar">
                <div className={["GuideBarLeft", rightUnfolded ? "Unfolded" : ""].join(" ")}
                    onClick={() => {
                        setRightUnfolded(false);
                        setShowAnswer(false);
                        setIsCompilerListOpen(false);
                    }}
                >
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
                <div className={["GuideBarRight", rightUnfolded ? "Unfolded" : "", rightUnfolded && showAnswer ? "WithAnswer" : ""].join(" ")}
                    onClick={() => {
                        setRightUnfolded(true);
                    }}
                >
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
                        setIsCompilerListOpen(false);
                    }}
                >
                    {/* 内容区域 */}
                </div>
                <div className={["GuideContentRight", rightUnfolded ? "Unfolded" : ""].join(" ")}
                >
                    <GuideEditor
                        value={code}
                        onChange={setCode}
                        onClick={() => {
                            setRightUnfolded(true);
                            setShowAnswer(true);
                            setIsCompilerListOpen(false);
                        }}
                    />
                    <div
                        className={`GuideRunner ${isRunnerFlipped ? 'GuideRunnerFlipped' : ''}`}

                        onClick={() => {
                            setRightUnfolded(true);
                        }}
                    >
                        <div className="GuideRunnerFront">
                            <div className="GuideRunnerTop">
                                <div className="RunningStatus Success">
                                    <IoCheckmark />
                                </div>
                                <div className="StandardInput">
                                    <textarea name="stdin" id="stdin" placeholder='stdin...'></textarea>
                                </div>
                            </div>
                            <ErrorWarningList
                                items={errorWarnings}
                                model={model}
                                setModel={setModel}
                                onAIExplain={(id) => {
                                    // 这里可以处理请求 AI 解释的逻辑
                                    console.log('Request AI explanation for error', id);
                                }}
                            />
                        </div>
                        <div className="GuideRunnerBack">
                            <p>Mdr</p>
                        </div>
                        <div className="GuideRunnerToolbar">
                            <div className="ToolbarItem"
                                onClick={() => {
                                    setRightUnfolded(true);
                                    setIsRunnerFlipped(!isRunnerFlipped);
                                }}>
                                <LuRefreshCcwDot />
                            </div>
                            {!isRunnerFlipped ? (
                                <>
                                    <div className="ToolbarItem">
                                        <FaPlay />
                                    </div>
                                    <div className="ToolbarItem">
                                        <FaCopy />
                                    </div></>
                            ) : (
                                <>
                                    <div className="ToolbarItem Reversed">
                                        <GrClearOption />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}