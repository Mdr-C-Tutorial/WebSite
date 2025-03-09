import './Guide.css'
import ReturnMainPage from "../mess/ReturnMainPage";
import { useState } from 'react';
import CodeEditor from './CodeEditor';
import CodeRunner from './CodeRunner';
import GuideToolbar from './GuideToolbar';
import { VscCode } from "react-icons/vsc";
import { VscPlay } from "react-icons/vsc";
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { CodeProvider } from './ContextGuide/CodeContext';
import Chapter0 from './Chapters/Chapter0';
import Chapter011 from './Chapters/Chapter1/Chapter011';
import Chapter012 from './Chapters/Chapter1/Chapter012';
import Chapter021 from './Chapters/Chapter2/Chapter021';
import Chapter013 from './Chapters/Chapter1/Chapter013';
import Chapter064 from './Chapters/Chapter6/Chapter064';
import Chapter065 from './Chapters/Chapter6/Chapter065';

const chapters = [
    {
        id: 0,
        title: "0：使用指南",
        isIntro: true  // 标记为介绍章节，不分页
    },
    {
        id: 1,
        title: "1：输出",
        pages: [
            { id: 1, title: "Hello World!" },
            { id: 2, title: "格式化字符" },
            { id: 3, title: "宽度和精度" }
        ],
        pageCount: 3
    },
    {
        id: 2,
        title: "2：对象",
        pages: [
            { id: 1, title: "整数和浮点数对象" },
            { id: 2, title: "输入" },
            { id: 3, title: "算术运算" },
            { id: 4, title: "复合赋值" }
        ],
        pageCount: 4
    },
    {
        id: 3,
        title: "3：分支",
        pages: [
            { id: 1, title: "if" },
            { id: 2, title: "if-else" },
            { id: 3, title: "逻辑运算" },
        ],
        pageCount: 3
    },
    {
        id: 4, title: "4：循环",
        pages: [
            { id: 1, title: "while" },
            { id: 2, title: "do-while" },
            { id: 3, title: "for" },
            { id: 4, title: "break" },
            { id: 5, title: "continue" }
        ],
        pageCount: 5
    },
    {
        id: 5, title: "5：数组", pages: [
            { id: 1, title: "下标" },
            { id: 2, title: "对数组应用循环" },
            { id: 3, title: "示例：累加累乘" },
            { id: 4, title: "多维数组" },
        ],
        pageCount: 4
    },
    {
        id: 6, title: "6：函数", pages: [
            { id: 1, title: "函数定义" },
            { id: 2, title: "函数调用" },
            { id: 4, title: "传递参数" },
            { id: 3, title: "递归" },
            { id: 4, title: "示例：汉诺塔" },
        ],
        pageCount: 5
    }
];
function Guide() {
    const [showEditor, setShowEditor] = useState(true);
    const [showRunner, setShowRunner] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const handleChapterChange = (chapterId, pageIndex = 1) => {
        const chapter = chapters.find(c => c.id === chapterId);
        if (chapter?.isIntro) {
            navigate(`/guide/chapter0`);
        } else {
            setCurrentPage(pageIndex);
            navigate(`/guide/chapter${chapterId}${pageIndex}`);
        }
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
                                <Route path="chapter11" element={<Chapter011 />} />
                                <Route path="chapter12" element={<Chapter012 />} />
                                <Route path="chapter13" element={<Chapter013 />} />
                                <Route path="chapter21" element={<Chapter021 />} />
                                <Route path="chapter64" element={<Chapter064 />} />
                                <Route path="chapter65" element={<Chapter065 />} />

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