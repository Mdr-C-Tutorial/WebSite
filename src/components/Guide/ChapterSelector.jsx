import { useState } from 'react';
import './ChapterSelector.css';
import { useNavigate } from 'react-router-dom';

function ChapterSelector({ chapters, currentChapter, currentPage, onChapterChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleChapterSelect = (chapterId, pageIndex = 1) => {
        setIsOpen(false);
        if (chapterId === 0) {
            onChapterChange(0);
        } else {
            const pageNum = pageIndex || 1;
            onChapterChange(chapterId, pageNum);
        }
    };

    const currentChapterInfo = chapters.find(c => c.id === currentChapter);
    const currentPageTitle = currentChapterInfo?.pages?.[currentPage - 1]?.title || 
                           currentChapterInfo?.pages?.[currentPage - 1];

    return (
        <div className="ChapterSelector">
            <div 
                className="SelectedChapter" 
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>
                    {currentChapterInfo?.title}
                    {currentPageTitle && ` - ${currentPageTitle}`}
                </span>
                <span className="Arrow">{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
                <div className="ChapterList">
                    {chapters.map(chapter => (
                        <div key={chapter.id} className="ChapterItem">
                            {chapter.isIntro ? (
                                <div 
                                    className={`ChapterTitle Clickable ${currentChapter === chapter.id ? 'Selected' : ''}`}
                                    onClick={() => handleChapterSelect(chapter.id)}
                                >
                                    {chapter.title}
                                </div>
                            ) : (
                                <>
                                    <div className={`ChapterTitle ${currentChapter === chapter.id ? 'Selected' : ''}`}>
                                        {chapter.title}
                                    </div>
                                    <div className="PageList">
                                        {chapter.pages?.map((page, index) => (
                                            <div
                                                key={index}
                                                className={`PageNumber ${currentChapter === chapter.id && currentPage === index + 1 ? 'Selected' : ''}`}
                                                onClick={() => handleChapterSelect(chapter.id, index + 1)}
                                                title={page.title}
                                            >
                                                {index + 1}
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ChapterSelector;