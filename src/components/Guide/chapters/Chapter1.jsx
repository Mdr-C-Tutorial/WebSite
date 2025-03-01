import './Chapter.css'
import { useEffect } from 'react';
import { useCode } from '../context/CodeContext';

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
    }, []); // 空依赖数组，确保只在组件挂载时执行一次

    return (
        <div className="Chapter">
            <h1>第1章：Hello World</h1>
            <section>
                <h2>任务目标</h2>
                <p>编写一个程序，在控制台输出 "Hello, World!"</p>
                <p>这是你的第一个C语言程序，通过它来了解C语言程序的基本结构。</p>
            </section>
        </div>
    );
}

export default Chapter1;