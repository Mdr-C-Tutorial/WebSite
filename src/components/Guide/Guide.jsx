import './Guide.css'
import ReturnMainPage from "../mess/ReturnMainPage";
import { useState } from 'react';
import CodeEditor from './CodeEditor';
import CodeRunner from './CodeRunner';
import GuideToolbar from './GuideToolbar';
import { VscCode } from "react-icons/vsc";
import { VscPlay } from "react-icons/vsc";
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { CodeProvider } from './ContextGuide/CodeContext';
import Chapter from './Chapter';

function Chapter0() {
    return <Chapter
        initialCode={`#include <stdio.h>

int main() {
    return 0;
}`}
        targetCode={`#include <stdio.h>

int main() {
    // OK，你已经学会展示答案了；
    // 红黑树的代码太多了，这里写不下。
    return 0;
}`}
        content={`# 使用指南

欢迎来到 Mdr-C-Tutorial！

这里是引导式教程，也就是说，你可以在屏幕左侧观看教程，同时在屏幕右侧编写和运行代码来进行实践。代码的编译运行是全自动的，你只需要专注于代码的编写。

本教程基于**任务**推进。每一页中，右侧代码编辑器中都会展示一段初始代码，但这段代码不完整或达不到想要的效果。您可以根据左侧教程内容来修改右侧代码，直到它的运行结果满足每页**任务**的要求。如果无从下手，可以点击上方**答案**按钮获得思路。

下面介绍一下本页面各元素的功能。

1. 上方工具栏：从左到右依次为**页面选择器**，**上一页**，**下一页**，和**答案**按钮。
2. 右侧上方：为代码编写区域。上方工具栏左侧为编译器选择（仅支持 GCC 和 Clang），右侧为编译参数，默认 \`-std=c23 -Wall -Wextra -Werror\`。点击最右侧紫色按钮可以隐藏本区域。
3. 右侧下方：为代码运行结果。上方工具栏为标准输入，默认置空。点击最右侧紫色按钮可以隐藏本区域。

## 任务

实现红黑树。提示：点击**答案**按钮。`} />
}

function Chapter011() {
    return <Chapter
        initialCode={`int main() {

    return 0;
}`}
        targetCode={`#include <stdio.h>

int main() {
    puts("Hello World!");
    return 0;
}`}
        content={`
# Hello World!

这句 \`Hello World!\` 被无数人誉为梦开始的地方；我不喜欢这种说法，因为**我们的梦早已开始**。

看右面的 \`main()\` 函数，那是 C 语言程序开始执行的位置。（技术上，是宿主实现的 C 语言程序；为方便起见，下文中 *C 语言程序* 均指这种程序。

我们用 \`puts()\` 函数在屏幕上输出一段文字。要输出的文字放在括号里面，用英文双引号包裹（C 语言中所有标点符号均为英文符号）。

\`\`\`c
puts("abc");
\`\`\`

将这行代码写入 \`main()\` 函数后面的**大括号中**，放在 \`return 0;\` 的**上面**，这样屏幕上就会输... 有报错？

因为 \`puts()\` 函数是 C 语言**标准库**中的函数，使用它时要包含相应的**头文件**（一些后缀名为 \`.h\` 的文件）。试着在代码**最顶端**加一行：

\`\`\`c
#include <stdio.h>
\`\`\`

注意，这行代码结尾没有分号。这时，屏幕上就会输出 \`abc\` 了。

## 任务

修改右侧程序，使之输出 \`Hello World!\`。
`} />
}

function Chapter012() {
    return <Chapter
        initialCode={`#include <stdio.h>

int main() {
    return 0;
}`}
        targetCode={`#include <stdio.h>

int main() {
    return 0;
}`}
        content={`
# Hello World!

这句 \`Hello World!\` 被无数人誉为梦开始的地方；我不喜欢这种说法，因为**我们的梦早已开始**。

看右面的 \`main()\` 函数，那是 C 语言程序开始执行的位置。（技术上，是宿主实现的 C 语言程序，为方便起见，下文中 *C 语言程序* 均指这种程序。
`} />
}

function Chapter013() {
    return <Chapter
        initialCode={`#include <stdio.h>

int main() {
    return 0;
}`}
        targetCode={`#include <stdio.h>

int main() {
    return 0;
}`}
        content={`
# 使用指南

## 欢迎使用C语言教程
`} />
}

function Chapter021() {
    return <Chapter
        initialCode={`#include <stdio.h>

int main() {
    return 0;
}`}
        targetCode={`#include <stdio.h>

int main() {
    return 0;
}`}
        content={`
# 使用指南

## 欢迎使用C语言教程
`} />
}

function Chapter064() {
    return <Chapter
        initialCode={`#include <stdio.h>

int main() {
    return 0;
}`}
        targetCode={`#include <stdio.h>

int main() {
    return 0;
}`}
        content={`
# 示例：汉诺塔

## 欢迎使用C语言教程
`} />
}

function Chapter065() {
    return <Chapter
        initialCode={`#include <stdio.h>

// from 是起始柱子，to 是目标柱子，via 是中转柱子
void hanoi(int n, char from, char to, char via) {
    if (n == 1) {
        // 直接移动；
    } else {
        // 1. 把上方的 n-1 个圆盘从原柱子移动到中转柱子，目标柱子是此过程的中转柱子；
        // 2. 把最大的圆盘移动到目标柱子；
        // 3. 把 n-1 个圆盘从中转柱子移动到目标柱子，原柱子是此过程的中转柱子。
    }
}

int main() {
    int n;
    scanf("%d", &n);
    hanoi(n, 'A', 'C', 'B');
    return 0;
}`}
        targetCode={`#include <stdio.h>

// from 是起始柱子，to 是目标柱子，via 是中转柱子
void hanoi(int n, char from, char to, char via) {
    if (n == 1) {
        printf("%c -> %c\\n", from, to);
    } else {
        hanoi(n - 1, from, via, to);
        printf("%c -> %c\\n", from, to);
        hanoi(n - 1, via, to, from);
    }
}

int main() {
    int n;
    scanf("%d", &n);
    hanoi(n, 'A', 'C', 'B');
    return 0;
}`}
        content={`
# 示例：汉诺塔

我们要编写一个函数，打印 n 层汉诺塔的移动步骤。

汉诺塔一共有三根柱子，在每次从某根柱子移动到另一根柱子的操作中，总会（除非只移动一个圆盘）用到第三根柱子进行中转。在这里，我们将它们分别称作这次操作的**原柱子**，**目标柱子**和**中转柱子**。这个操作可以分解成三步：

1. 一、把上方的 n-1 个圆盘从原柱子移动到中转柱子，目标柱子是此过程的中转柱子；
2. 二、把最大的圆盘移动到目标柱子；
3. 三、把 n-1 个圆盘从中转柱子移动到目标柱子，原柱子是此过程的中转柱子。

这个操作可以递归地进行。当 n=1 时，只执行上述第二步。

右侧的函数已经写好了一部分，函数有四个参数：
- \`n\`：圆盘的数量；
- \`from\`：起始柱子；
- \`to\`：目标柱子；
- \`via\`：中转柱子。

打印移动步骤的格式可以为 \`A -> B\`：

\`\`\`c
printf("%c -> %c\\n", from, to);
\`\`\`

## 任务
完整实现右侧函数：输入 n，打印出 n 层汉诺塔从 A 柱子移动到 C 柱子的步骤。
`} />
}

const chapters = [
    {
        id: 0,
        title: "0：使用指南",
        isIntro: true  // 标记为介绍章节，不分页
    },
    {
        id: 1,
        title: "1：输出",
        pages: [
            { id: 1, title: "Hello World!" },
            { id: 2, title: "格式化字符" },
            { id: 3, title: "宽度和精度" }
        ],
        pageCount: 3
    },
    {
        id: 2,
        title: "2：对象",
        pages: [
            { id: 1, title: "整数和浮点数对象" },
            { id: 2, title: "输入" },
            { id: 3, title: "算术运算" },
            { id: 4, title: "复合赋值" }
        ],
        pageCount: 4
    },
    {
        id: 3,
        title: "3：分支",
        pages: [
            { id: 1, title: "if" },
            { id: 2, title: "if-else" },
            { id: 3, title: "逻辑运算" },
        ],
        pageCount: 3
    },
    {
        id: 4, title: "4：循环",
        pages: [
            { id: 1, title: "while" },
            { id: 2, title: "do-while" },
            { id: 3, title: "for" },
            { id: 4, title: "break" },
            { id: 5, title: "continue" }
        ],
        pageCount: 5
    },
    {
        id: 5, title: "5：数组", pages: [
            { id: 1, title: "下标" },
            { id: 2, title: "对数组应用循环" },
            { id: 3, title: "示例：累加累乘" },
            { id: 4, title: "多维数组" },
        ],
        pageCount: 4
    },
    {
        id: 6, title: "6：函数", pages: [
            { id: 1, title: "函数定义" },
            { id: 2, title: "函数调用" },
            { id: 4, title: "传递参数" },
            { id: 3, title: "递归" },
            { id: 4, title: "示例：汉诺塔" },
        ],
        pageCount: 5
    }
];

function Guide() {
    const [showEditor, setShowEditor] = useState(true);
    const [showRunner, setShowRunner] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const handleChapterChange = (chapterId, pageIndex = 1) => {
        const chapter = chapters.find(c => c.id === chapterId);
        if (chapter?.isIntro) {
            navigate(`/guide/chapter0`);
        } else {
            setCurrentPage(pageIndex);
            navigate(`/guide/chapter${chapterId}${pageIndex}`);
        }
    };

    return (
        <CodeProvider>
            <div className="Guide">
                <ReturnMainPage />
                <div className="GuideContent">
                    <div className="TutorialSection">
                        <GuideToolbar
                            chapters={chapters}
                            onChapterChange={handleChapterChange}
                        />
                        <div className="ChapterContent">
                            <Routes>
                                <Route index element={<Navigate to="/guide/chapter0" replace />} />
                                <Route path="chapter0" element={<Chapter0 />} />
                                <Route path="chapter11" element={<Chapter011 />} />
                                <Route path="chapter12" element={<Chapter012 />} />
                                <Route path="chapter13" element={<Chapter013 />} />
                                <Route path="chapter21" element={<Chapter021 />} />
                                <Route path="chapter64" element={<Chapter064 />} />
                                <Route path="chapter65" element={<Chapter065 />} />

                                <Route path="*" element={<Navigate to="/guide/chapter0" replace />} />
                            </Routes>
                        </div>
                    </div>
                    <div className={`FloatingTools ${showEditor ? 'showEditor' : ''} ${showRunner ? 'showRunner' : ''}`}>
                        {showEditor && <CodeEditor />}
                        {showRunner && <CodeRunner />}
                    </div>
                </div>
                <button className="ToggleEditor" onClick={() => setShowEditor(!showEditor)}>
                    <VscCode />
                </button>
                <button className="ToggleRunner" onClick={() => setShowRunner(!showRunner)}>
                    <VscPlay />
                </button>
            </div>
        </CodeProvider>
    );
}
export default Guide;