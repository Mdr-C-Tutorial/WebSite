import '../Chapter.css';
import { useEffect } from 'react';
import { useCode } from '../../ContextGuide/CodeContext';
import MarkdownRenderer from '../../MarkdownRenderer';

export default function Chapter012() {
    const { setChapterCodes } = useCode();

    useEffect(() => {
        const initialCode = `#include <stdio.h>

int main() {
    return 0;
}`;

        setChapterCodes(initialCode, initialCode);
    }, [setChapterCodes]);

    const content = `
# Hello World!

这句 \`Hello World!\` 被无数人誉为梦开始的地方；我不喜欢这种说法，因为**我们的梦早已开始**。

看右面的 \`main()\` 函数，那是 C 语言程序开始执行的位置。（技术上，是宿主实现的 C 语言程序，为方便起见，下文中 *C 语言程序* 均指这种程序。
`;

    return (
        <div className="Chapter">
            <MarkdownRenderer content={content} />
        </div>
    );
}
