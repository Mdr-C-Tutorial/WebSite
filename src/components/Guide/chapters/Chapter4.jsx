import './Chapter.css';
import { useEffect } from 'react';
import { useCode } from '../context/CodeContext';

function Chapter4() {
    const { setChapterCodes } = useCode();
    
    useEffect(() => {
        const initialCode = `#include <stdio.h>

int main() {
    int a = 15, b = 23;
    printf("较大的数是：%d\\n", findMax(a, b));
    return 0;
}`;

        const targetCode = `#include <stdio.h>

int findMax(int x, int y) {
    return x > y ? x : y;
}

int main() {
    int a = 15, b = 23;
    printf("较大的数是：%d\\n", findMax(a, b));
    return 0;
}`;

        setChapterCodes(initialCode, targetCode);
    }, []);

    return (
        <div className="Chapter">
            <h1>第4章：函数</h1>
            <section>
                <h2>任务目标</h2>
                <p>编写一个函数，返回两个数中的较大值</p>
            </section>
        </div>
    );
}

export default Chapter4;