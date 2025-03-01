import { useState } from 'react';
import './ChapterSelector.css';

const chapters = [
    { id: 0, title: "第0章：使用指南", progress: 0 },
    { id: 1, title: "第1章：Hello World", progress: 0 },
    { id: 2, title: "第2章：基本运算", progress: 0 },
    { id: 3, title: "第3章：循环结构", progress: 0 },
    { id: 4, title: "第4章：函数", progress: 0 },
    { id: 5, title: "第5章：数组", progress: 0 }
];

function ChapterSelector({ chapters, currentChapter, onChapterChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleChapterSelect = (chapterId) => {
        setIsOpen(false);
        onChapterChange(chapterId);
    };

    return (
        <div className="ChapterSelector">
            <div 
                className="SelectedChapter" 
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{chapters.find(c => c.id === currentChapter)?.title}</span>
                <span className="Arrow">{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
                <div className="ChapterList">
                    {chapters.map(chapter => (
                        <div 
                            key={chapter.id}
                            className={`ChapterItem ${currentChapter === chapter.id ? 'Selected' : ''}`}
                            onClick={() => handleChapterSelect(chapter.id)}
                        >
                            <span>{chapter.title}</span>
                            <div className="Progress">
                                <div 
                                    className="ProgressBar" 
                                    style={{width: `${chapter.progress}%`}}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ChapterSelector;