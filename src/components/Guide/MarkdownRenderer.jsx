import React from 'react';
import ReactMarkdown from 'react-markdown';
import Code from './MarkdownComponents/Code';
import CodeLine from './MarkdownComponents/CodeLine';
import './MarkdownRenderer.css';

// C语言关键词列表
const cKeywords = [
    'auto', 'break', 'case', 'char', 'const', 'continue', 'default', 'do', 'double',
    'else', 'enum', 'extern', 'float', 'for', 'goto', 'if', 'int', 'long', 'register',
    'return', 'short', 'signed', 'sizeof', 'static', 'struct', 'switch', 'typedef',
    'union', 'unsigned', 'void', 'volatile', 'while'
];

// 预处理器指令
const preprocessors = ['include'];

// 库函数
const libraryFunctions = ['printf', 'scanf'];

// 高亮代码中的关键词，同时处理尖括号和注释
const highlightKeywords = (code) => {
    // 先处理尖括号，将它们转换为HTML实体
    let result = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    // 高亮字符串字面量和字符常量
    result = result.replace(/(".*?"|'.*?')/g, `<span class="string">$1</span>`);

    // 高亮整数常量和浮点数常量
    result = result.replace(/\b\d+(\.\d+)?\b/g, `<span class="number">$&</span>`);

    // 高亮单行注释
    result = result.replace(/\/\/(.*)/g, `<span class="comment">//$1</span>`);

    // 高亮多行注释
    result = result.replace(/\/\*([\s\S]*?)\*\//g, `<span class="comment">/*$1*/</span>`);

    // 高亮预处理器指令，包括井号
    preprocessors.forEach(preprocessor => {
        const regex = new RegExp(`#\\s*${preprocessor}\\b`, 'g');
        result = result.replace(regex, `<span class="preprocessor">#${preprocessor}</span>`);
    });

    // 高亮关键词
    cKeywords.forEach(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'g');
        result = result.replace(regex, `<span class="keyword">${keyword}</span>`);
    });

    // 高亮库函数为暗红色
    libraryFunctions.forEach(func => {
        const regex = new RegExp(`\\b${func}\\b`, 'g');
        result = result.replace(regex, `<span class="library-function">${func}</span>`);
    });

    return result;
};

function MarkdownRenderer({ content }) {
    return (
        <div className="MarkdownRenderer">
            <ReactMarkdown
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const language = 'c';
                        console.log('code', node, inline, className, children);

                        // 处理行内代码
                        if (className !== 'language-c') {
                            const text = String(children).replace(/\n/g, '');

                            // 处理尖括号
                            if (text.includes('<') || text.includes('>')) {
                                text = text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                            }

                            return <code dangerouslySetInnerHTML={{ __html: highlightKeywords(text) }} />;
                        }

                        // 处理代码块
                        let codeLines = String(children).split('\n');

                        // 去掉末尾的空行
                        while (codeLines.length > 0 && codeLines[codeLines.length - 1].trim() === '') {
                            codeLines.pop();
                        }

                        return (
                            <pre className="CodeBlockWrapper">
                                <Code language={language}>
                                    {codeLines.map((line, index) => {
                                        const highlightedLine = highlightKeywords(line);
                                        return (
                                            <CodeLine
                                                key={index}
                                                lineNumber={index + 1}
                                                highlightedContent={highlightedLine}
                                            />
                                        );
                                    })}
                                </Code>
                            </pre>
                        );
                    },
                    // 其他自定义组件渲染
                    h1: ({ children }) => <h1 className="MarkdownH1">{children}</h1>,
                    h2: ({ children }) => <h2 className="MarkdownH2">{children}</h2>,
                    h3: ({ children }) => <h3 className="MarkdownH3">{children}</h3>,
                    p: ({ children }) => <p className="MarkdownP">{children}</p>,
                    ul: ({ children }) => <ul className="MarkdownUl">{children}</ul>,
                    ol: ({ children }) => <ol className="MarkdownOl">{children}</ol>,
                    li: ({ children }) => <li className="MarkdownLi">{children}</li>,
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}

export default MarkdownRenderer;