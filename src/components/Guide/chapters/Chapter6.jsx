import { useEffect } from 'react';
import { useCode } from '../context/CodeContext';

function Chapter6() {
    const { setChapterCodes } = useCode();
    
    useEffect(() => {
        const initialCode = `#include <stdio.h>

int main() {
    int num = 42;
    // 在这里定义指针并通过指针修改 num 的值
    
    printf("修改后的值：%d\\n", num);
    return 0;
}`;

        const targetCode = `#include <stdio.h>

int main() {
    int num = 42;
    int *ptr = &num;
    *ptr = 100;
    
    printf("修改后的值：%d\\n", num);
    return 0;
}`;

        setChapterCodes(initialCode, targetCode);
    }, [setChapterCodes]);

    return (
        <div className="Chapter">
            <h1>第6章：指针</h1>
            <section>
                <h2>任务目标</h2>
                <p>使用指针修改变量的值</p>
            </section>
        </div>
    );
}

export default Chapter6;