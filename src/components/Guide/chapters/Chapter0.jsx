import './Chapter.css';
import { useEffect } from 'react';
import { useCode } from '../ContextGuide/CodeContext';
import MarkdownRenderer from '../MarkdownRenderer';

function Chapter0() {
    const { setChapterCodes } = useCode();

    useEffect(() => {
        const initialCode = `#include <stdio.h>

int main() {
    return 0;
}`;
        const targetCode = `#include <stdio.h>

int main() {
    // OK，你已经学会展示答案了；
    // 红黑树的代码太多了，这里写不下。
    return 0;
}`;
        setChapterCodes(initialCode, targetCode);
    }, [setChapterCodes]);

    const content = `
# 使用指南

欢迎来到 Mdr-C-Tutorial！

这里是引导式教程，也就是说，你可以在屏幕左侧观看教程，同时在屏幕右侧编写和运行代码来进行实践。代码的编译运行是全自动的，你只需要专注于代码的编写。

本教程基于**任务**推进。每一页中，右侧代码编辑器中都会展示一段初始代码，但这段代码不完整或达不到想要的效果。您可以根据左侧教程内容来修改右侧代码，直到它的运行结果满足每页**任务**的要求。如果无从下手，可以点击上方**答案**按钮获得思路。

下面介绍一下本页面各元素的功能。

1. 上方工具栏：从左到右依次为**页面选择器**，**上一页**，**下一页**，和**答案**按钮。
2. 右侧上方：为代码编写区域。上方工具栏左侧为编译器选择（仅支持 GCC 和 Clang），右侧为编译参数，默认 \`-std=c23 -Wall -Wextra -Werror\`。点击最右侧紫色按钮可以隐藏本区域。
3. 右侧下方：为代码运行结果。上方工具栏为标准输入，默认置空。点击最右侧紫色按钮可以隐藏本区域。

## 任务

实现红黑树。提示：点击**答案**按钮。
`;

    return (
        <div className="Chapter">
            <MarkdownRenderer content={content} />
        </div>
    );
}

export default Chapter0;