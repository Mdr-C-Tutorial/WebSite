import './GuideToolbar.css';
import ChapterSelector from './ChapterSelector';
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCode } from './context/CodeContext';

function GuideToolbar({ chapters, onChapterChange }) {
    const [currentChapter, setCurrentChapter] = useState(0);
    const totalChapters = chapters.length - 1;
    const navigate = useNavigate();
    const location = useLocation();
    const { toggleAnswer, isShowingAnswer } = useCode();

    useEffect(() => {
        const match = location.pathname.match(/chapter(\d+)/);
        if (match) {
            setCurrentChapter(parseInt(match[1]));
        }
    }, [location]);

    const handleChapterChange = (chapterId) => {
        setCurrentChapter(chapterId);
        onChapterChange(chapterId);
    };

    const handlePrevChapter = () => {
        if (currentChapter > 0) {
            handleChapterChange(currentChapter - 1);
        }
    };

    const handleNextChapter = () => {
        if (currentChapter < totalChapters) {
            handleChapterChange(currentChapter + 1);
        }
    };

    return (
        <div className="GuideToolbar">
            <ChapterSelector 
                chapters={chapters}
                currentChapter={currentChapter} 
                onChapterChange={handleChapterChange} 
            />
            <div className="ChapterControls">
                <button 
                    className={`ChapterButton ${currentChapter <= 0 ? 'Disabled' : ''}`}
                    onClick={handlePrevChapter}
                    disabled={currentChapter <= 0}
                >
                    <IoChevronBack />
                </button>
                <button 
                    className={`ChapterButton ${currentChapter >= totalChapters ? 'Disabled' : ''}`}
                    onClick={handleNextChapter}
                    disabled={currentChapter >= totalChapters}
                >
                    <IoChevronForward />
                </button>
                <button 
                    className="RevealAnswer"
                    onClick={toggleAnswer}
                >
                    {isShowingAnswer ? '还原代码' : '显示答案'}
                </button>
            </div>
        </div>
    );
}

export default GuideToolbar;