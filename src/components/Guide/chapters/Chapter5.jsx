import './Chapter.css';
import { useEffect } from 'react';
import { useCode } from '../context/CodeContext';

function Chapter5() {
    const { setChapterCodes } = useCode();

    useEffect(() => {
        const initialCode = `#include <stdio.h>

int main() {
    int numbers[5] = {1, 2, 3, 4, 5};
    
    int sum = 0;
    
    printf("数组元素之和为：%d\\n", sum);
    return 0;
}`;

        const targetCode = `#include <stdio.h>

int main() {
    int numbers[5] = {1, 2, 3, 4, 5};
    int sum = 0;
    
    for(int i = 0; i < 5; i++) {
        sum += numbers[i];
    }
    
    printf("数组元素之和为：%d\\n", sum);
    return 0;
}`;

        setChapterCodes(initialCode, targetCode);
    }, []);

    return (
        <div className="Chapter">
            <h1>第5章：数组</h1>
            <section>
                <h2>任务目标</h2>
                <p>计算数组中所有元素的和</p>
            </section>
        </div>
    );
}

export default Chapter5;