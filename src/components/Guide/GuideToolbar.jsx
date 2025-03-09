import './GuideToolbar.css';
import ChapterSelector from './ChapterSelector';
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCode } from './ContextGuide/CodeContext';

function GuideToolbar({ chapters, onChapterChange }) {
    const [currentChapter, setCurrentChapter] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const location = useLocation();
    const { toggleAnswer, isShowingAnswer } = useCode();

    useEffect(() => {
        const match = location.pathname.match(/chapter(\d+)(\d+)/);
        if (match) {
            const chapterId = parseInt(match[1]);
            const pageNum = parseInt(match[2]);
            console.log(match[1], match[2]);
            setCurrentChapter(chapterId);
            setCurrentPage(pageNum);
        } else if (location.pathname.includes('chapter0')) {
            setCurrentChapter(0);
            setCurrentPage(1);
        }
    }, [location]);

    const getCurrentChapterInfo = () => {
        const chapter = chapters.find(c => c.id === currentChapter);
        return {
            isIntro: chapter?.id === 0,
            pageCount: chapter?.pages?.length || 1,
            isLastPage: currentPage === (chapter?.pages?.length || 1)
        };
    };

    const handlePrevPage = () => {
        const { isIntro } = getCurrentChapterInfo();
        if (isIntro) {
            if (currentChapter > 0) {
                const prevChapter = chapters[currentChapter - 1];
                const lastPage = prevChapter.pages?.length || 1;
                onChapterChange(currentChapter - 1, lastPage);
            }
        } else if (currentPage > 1) {
            onChapterChange(currentChapter, currentPage - 1);
        } else if (currentChapter > 0) {
            const prevChapter = chapters[currentChapter - 1];
            const lastPage = prevChapter.pages?.length || 1;
            onChapterChange(currentChapter - 1, lastPage);
        }
    };

    const handleNextPage = () => {
        const { isIntro, isLastPage } = getCurrentChapterInfo();
        if (isIntro) {
            if (currentChapter < chapters.length - 1) {
                onChapterChange(currentChapter + 1, 1);
            }
        } else if (!isLastPage) {
            onChapterChange(currentChapter, currentPage + 1);
        } else if (currentChapter < chapters.length - 1) {
            onChapterChange(currentChapter + 1, 1);
        }
    };

    const { isIntro } = getCurrentChapterInfo();
    const isFirstChapter = currentChapter === 0;
    const isLastChapter = currentChapter === chapters.length - 1;
    const { isLastPage } = getCurrentChapterInfo();

    return (
        <div className="GuideToolbar">
            <ChapterSelector
                chapters={chapters}
                currentChapter={currentChapter}
                currentPage={currentPage}
                onChapterChange={onChapterChange}
            />
            <div className="ChapterControls">
                <button
                    className={`ChapterButton ${isFirstChapter ? 'Disabled' : ''}`}
                    onClick={handlePrevPage}
                    disabled={isFirstChapter && currentPage === 1}
                >
                    <IoChevronBack />
                </button>
                <button
                    className={`ChapterButton ${(isLastChapter && isLastPage) ? 'Disabled' : ''}`}
                    onClick={handleNextPage}
                    disabled={isLastChapter && isLastPage}
                >
                    <IoChevronForward />
                </button>
                <button
                    className={`AnswerButton ${isShowingAnswer ? 'Active' : ''}`}
                    onClick={toggleAnswer}
                >
                    {isShowingAnswer ? '还原' : '答案'}
                </button>
            </div>
        </div>
    );
}

export default GuideToolbar;