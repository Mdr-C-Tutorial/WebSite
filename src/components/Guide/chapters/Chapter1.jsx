import './Chapter.css'
import { useEffect } from 'react';
import { useCode } from '../context/CodeContext';
import MarkdownRenderer from '../MarkdownRenderer';

function Chapter1() {
    const { setChapterCodes } = useCode();

    useEffect(() => {
        const initialCode = `#include <stdio.h>

int main(void) {
    return 0;
}`;

        const targetCode = `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`;

        setChapterCodes(initialCode, targetCode);
    }, [setChapterCodes]);

    const content = `
# 第1章：Hello World

## 任务目标

编写一个程序，在控制台输出 "Hello, World!"

这是你的第一个C语言程序，通过它来了解C语言程序的基本结构。

## C语言程序结构

一个基本的C语言程序包含以下部分：

\`\`\`c
#include <stdio.h>  // 包含标准输入输出库

int main() {        // 主函数，程序的入口点
    // 程序代码
    return 0;       // 返回值，表示程序正常结束
}
\`\`\`

## printf函数

\`printf\` 函数用于在控制台输出文本：

\`\`\`c
printf("要输出的文本");
\`\`\`

## 任务

在编辑器中完成代码，使其输出 "Hello, World!"
`;

    return <MarkdownRenderer content={content} />;
}

export default Chapter1;