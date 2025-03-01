import { useEffect } from 'react';
import { useCode } from '../context/CodeContext';
import { VscCode, VscPlay } from "react-icons/vsc";

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
    }, []);

    return (
        <div className="Chapter">
            <h1>第0章：使用指南</h1>
            <section>
                <h2>页面布局</h2>
                <p>本教程页面分为左右两栏：</p>
                <ul>
                    <li>左侧为教程内容区域</li>
                    <li>右侧为代码编辑器和运行结果展示区域</li>
                </ul>
            </section>
            <section>
                <h2>功能按钮说明</h2>
                <div className="ButtonGuide">
                    <h3>顶部工具栏</h3>
                    <ul>
                        <li>章节选择器：可以直接跳转到指定章节</li>
                        <li>上一章/下一章：按顺序浏览教程内容</li>
                        <li>显示答案：查看当前任务的参考答案</li>
                    </ul>
                    
                    <h3>右侧悬浮按钮</h3>
                    <ul>
                        <li><VscCode /> 编辑器开关：显示/隐藏代码编辑器</li>
                        <li><VscPlay /> 运行器开关：显示/隐藏运行结果</li>
                    </ul>
                </div>
            </section>
            <section>
                <h2>使用流程</h2>
                <ol>
                    <li>阅读每章的任务目标</li>
                    <li>在代码编辑器中编写代码</li>
                    <li>点击运行查看结果</li>
                    <li>需要帮助时可以点击"显示答案"</li>
                    <li>完成后进入下一章节</li>
                </ol>
            </section>
        </div>
    );
}

export default Chapter0;