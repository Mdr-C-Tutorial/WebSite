import './Chapter.css';
import { useEffect } from 'react';
import { useCode } from './ContextGuide/CodeContext';
import MarkdownRenderer from './MarkdownRenderer';

export default function Chapter({ initialCode, targetCode, content }) {
    const { setChapterCodes } = useCode();

    useEffect(() => {
        setChapterCodes(initialCode, targetCode);
    }, [setChapterCodes]);

    return (
        <div className="Chapter">
            <MarkdownRenderer content={content} />
        </div>
    );
}
