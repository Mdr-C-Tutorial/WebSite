import './Chapter.css';
import { useEffect } from 'react';
import { useCode } from '../context/CodeContext';

function Chapter3() {
    const { setChapterCodes } = useCode();
    
    useEffect(() => {
        const initialCode = `#include <stdio.h>

int main() {
    return 0;
}`;

        const targetCode = `#include <stdio.h>

int main() {
    for(int i = 1; i <= 5; i++) {
        printf("%d\\n", i);
    }
    return 0;
}`;

        setChapterCodes(initialCode, targetCode);
    }, []);

    return (
        <div className="Chapter">
            <h1>第3章：循环结构</h1>
            <section>
                <h2>任务目标</h2>
                <p>使用 for 循环输出数字 1 到 5</p>
            </section>
        </div>
    );
}

export default Chapter3;