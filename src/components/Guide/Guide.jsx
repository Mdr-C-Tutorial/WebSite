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

const chapters = [
    {
        id: 0,
        title: "第0章：使用指南",
        isIntro: true  // 标记为介绍章节，不分页
    },
    {
        id: 1,
        title: "第1章：Hello World",
        pages: [
            { id: 1, title: "C语言基础" },
            { id: 2, title: "第一个程序" },
            { id: 3, title: "编译运行" }
        ],
        pageCount: 3
    },
    {
        id: 2,
        title: "第2章：基本运算",
        pages: [
            { id: 1, title: "变量声明" },
            { id: 2, title: "基本运算符" },
            { id: 3, title: "数据类型" }
        ],
        pageCount: 3
    },
    {
        id: 3,
        title: "第3章：循环结构",
        pages: [
            { id: 1, title: "for循环" },
            { id: 2, title: "while循环" },
            { id: 3, title: "do-while循环" },
            { id: 4, title: "break和continue" }
        ],
        pageCount: 4
    },
    {
        id: 4, title: "第4章：函数", pages: [
            "函数声明",
            "函数定义",
            "参数传递",
            "返回值"
        ]
    },
    {
        id: 5, title: "第5章：数组", pages: [
            "数组定义",
            "数组操作",
            "多维数组"
        ]
    },
    {
        id: 6, title: "第6章：指针", pages: [
            "指针基础",
            "指针运算",
            "指针与数组"
        ]
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