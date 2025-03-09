import '../Chapter.css';
import { useEffect } from 'react';
import { useCode } from '../../ContextGuide/CodeContext';
import MarkdownRenderer from '../../MarkdownRenderer';

export default function Chapter065() {
    const { setChapterCodes } = useCode();

    useEffect(() => {
        const initialCode = `#include <stdio.h>

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
}`;
        const targetCode = `#include <stdio.h>

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
}`

        setChapterCodes(initialCode, targetCode);
    }, [setChapterCodes]);

    const content = `
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
`;

    return (
        <div className="Chapter">
            <MarkdownRenderer content={content} />
        </div>
    );
}
