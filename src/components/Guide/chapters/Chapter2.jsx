import './Chapter.css';
import { useEffect } from 'react';
import { useCode } from '../context/CodeContext';

function Chapter2() {
    const { setChapterCodes } = useCode();

    useEffect(() => {
        const initialCode = `#include <stdio.h>

int main() {
    int a = 10;
    int b = 20;
    
    return 0;
}`;

        const targetCode = `#include <stdio.h>

int main() {
    int a = 10;
    int b = 20;
    int sum = a + b;
    printf("%d + %d = %d\\n", a, b, sum);
    return 0;
}`;

        setChapterCodes(initialCode, targetCode);
    }, []);

    return (
        <div className="Chapter">
            <h1>第2章：基本运算</h1>
            <section>
                <h2>任务目标</h2>
                <p>计算并输出两个整数的和</p>
            </section>
        </div>
    );
}

export default Chapter2;