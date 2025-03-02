import { useEffect } from 'react';
import { useCode } from '../context/CodeContext';
import MarkdownRenderer from '../MarkdownRenderer';

function Chapter0() {
    const { setChapterCodes } = useCode();
    
    useEffect(() => {
        const initialCode = `// 这是一个示例代码
// 你可以在这里尝试编辑

#include <stdio.h>

int main() {
    printf("欢迎来到C语言教程！\\n");
    return 0;
}`;

        setChapterCodes(initialCode, initialCode);
    }, [setChapterCodes]);

    const content = `
# 第0章：使用指南

## 页面布局

本教程页面分为左右两栏：

- 左侧为教程内容区域
- 右侧为代码编辑器和运行结果展示区域

## 功能按钮说明

### 顶部工具栏

- 章节选择器：可以直接跳转到指定章节
- 上一章/下一章：按顺序浏览教程内容
- 显示答案：查看当前任务的参考答案

### 右侧悬浮按钮

- 编辑器开关：显示/隐藏代码编辑器
- 运行器开关：显示/隐藏运行结果

## 使用流程

1. 阅读每章的任务目标
2. 在代码编辑器中编写代码
3. 点击运行查看结果
4. 需要帮助时可以点击"显示答案"
5. 完成后进入下一章节

## 示例代码

\`\`\`c
#include <stdio.h>

int main() {
    printf("欢迎来到C语言教程！\\n");
    return 0;
}
\`\`\`
`;

    return <MarkdownRenderer content={content} />;
}

export default Chapter0;