import '../Chapter.css';
import { useEffect } from 'react';
import { useCode } from '../../ContextGuide/CodeContext';
import MarkdownRenderer from '../../MarkdownRenderer';

export default function Chapter011() {
    const { setChapterCodes } = useCode();

    useEffect(() => {
        const initialCode = `int main() {

    return 0;
}`;
        const targetCode = `#include <stdio.h>

int main() {
    puts("Hello World!");
    return 0;
}`;
        setChapterCodes(initialCode, targetCode);
    }, [setChapterCodes]);

    const content = `
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
`;

    return (
        <div className="Chapter">
            <MarkdownRenderer content={content} />
        </div>
    );
}
