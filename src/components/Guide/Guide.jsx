import './Guide.css'
import ReturnMainPage from "../mess/ReturnMainPage";
import { useState } from 'react';
import CodeEditor from './CodeEditor';
import CodeRunner from './CodeRunner';
import GuideToolbar from './GuideToolbar';
import { VscCode } from "react-icons/vsc";
import { VscPlay } from "react-icons/vsc";
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Chapter1 from './chapters/Chapter1';
import Chapter2 from './chapters/Chapter2';
import Chapter3 from './chapters/Chapter3';
import Chapter4 from './chapters/Chapter4';
import Chapter5 from './chapters/Chapter5';
import { CodeProvider } from './context/CodeContext';
import Chapter0 from './chapters/Chapter0';
import Chapter6 from './chapters/Chapter6';
const chapters = [
    { id: 0, title: "第0章：使用指南", progress: 0 },
    { id: 1, title: "第1章：Hello World", progress: 0 },
    { id: 2, title: "第2章：基本运算", progress: 0 },
    { id: 3, title: "第3章：循环结构", progress: 0 },
    { id: 4, title: "第4章：函数", progress: 0 },
    { id: 5, title: "第5章：数组", progress: 0 },
    { id: 6, title: "第6章：指针", progress: 0 }
];

function Guide() {
    const [showEditor, setShowEditor] = useState(true);
    const [showRunner, setShowRunner] = useState(true);
    const navigate = useNavigate();

    const handleChapterChange = (chapterId) => {
        navigate(`/guide/chapter${chapterId}`); // 使用完整的绝对路径
    };

    return (
        <CodeProvider>
            <div className="Guide">
                <ReturnMainPage />
                <div className="GuideContent">
                    <div className="TutorialSection">
                        <GuideToolbar 
                            chapters={chapters}
                            onChapterChange={handleChapterChange} 
                        />
                        <div className="ChapterContent">
                            <Routes>
                                <Route index element={<Navigate to="/guide/chapter0" replace />} />
                                <Route path="chapter0" element={<Chapter0 />} />
                                <Route path="chapter1" element={<Chapter1 />} />
                                <Route path="chapter2" element={<Chapter2 />} />
                                <Route path="chapter3" element={<Chapter3 />} />
                                <Route path="chapter4" element={<Chapter4 />} />
                                <Route path="chapter5" element={<Chapter5 />} />
                                <Route path="chapter6" element={<Chapter6 />} />
                                <Route path="*" element={<Navigate to="/guide/chapter0" replace />} />
                            </Routes>
                        </div>
                    </div>
                    <div className={`FloatingTools ${showEditor ? 'showEditor' : ''} ${showRunner ? 'showRunner' : ''}`}>
                        {showEditor && <CodeEditor />}
                        {showRunner && <CodeRunner />}
                    </div>
                </div>
                <button className="ToggleEditor" onClick={() => setShowEditor(!showEditor)}>
                    <VscCode />
                </button>
                <button className="ToggleRunner" onClick={() => setShowRunner(!showRunner)}>
                    <VscPlay />
                </button>
            </div>
        </CodeProvider>
    );
}
export default Guide;