import React from 'react';
import './UuidDotMatrix.css';

function UuidDotMatrix({ uuid }) {
    // 将UUID转换为点阵表示
    const renderDotMatrix = () => {
        if (!uuid) return null;
        
        const matrix = [];
        
        // 遍历UUID中的每个字符
        for (let i = 0; i < uuid.length; i++) {
            const char = uuid[i];
            
            // 如果是横线，添加一个分隔符
            if (char === '-') {
                matrix.push(<div key={`separator-${i}`} className="UuidSeparator"></div>);
                continue;
            }
            
            // 将十六进制字符转换为4位二进制
            const binary = parseInt(char, 16).toString(2).padStart(4, '0');
            
            // 创建一个竖列
            const column = (
                <div key={`column-${i}`} className="UuidColumn">
                    {binary.split('').map((bit, bitIndex) => (
                        <div 
                            key={`bit-${i}-${bitIndex}`} 
                            className={`UuidDot ${bit === '1' ? 'Active' : ''}`}
                        ></div>
                    ))}
                </div>
            );
            
            matrix.push(column);
        }
        
        return matrix;
    };

    return (
        <div className="UuidDotMatrix">
            <span className="UuidLabel">id: </span>
            <div className="UuidMatrixContainer">
                {renderDotMatrix()}
            </div>
        </div>
    );
}

export default UuidDotMatrix;