import '../Chapter.css';
import { useEffect } from 'react';
import { useCode } from '../../ContextGuide/CodeContext';
import MarkdownRenderer from '../../MarkdownRenderer';

export default function Chapter064() {
    const { setChapterCodes } = useCode();

    useEffect(() => {
        const initialCode = `#include <stdio.h>

int main() {
    return 0;
}`;

        setChapterCodes(initialCode, initialCode);
    }, [setChapterCodes]);

    const content = `
# 示例：汉诺塔

## 欢迎使用C语言教程
`;

    return (
        <div className="Chapter">
            <MarkdownRenderer content={content} />
        </div>
    );
}
