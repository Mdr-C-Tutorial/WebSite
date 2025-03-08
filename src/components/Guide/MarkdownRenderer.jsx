import React from 'react';
import ReactMarkdown from 'react-markdown';
import hljs from '../mess/myHighlight';
import './MarkdownRenderer.css';

function MarkdownRenderer({ content }) {
    return (
        <div className="MarkdownRenderer">
            <ReactMarkdown
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const text = String(children).replace(/\n$/, '');

                        if (className !== 'language-c') {
                            // 处理行内代码
                            return <code className="InlineCode" {...props}>{text}</code>;
                        }
                        // 处理代码块
                        const language = 'c';
                        const highlightedCode = hljs.highlight(text, { language }).value;
                        const lines = text.split('\n');

                        return (
                            <pre className="CodeBlockWrapper">
                                <div className="CodeBlock">
                                    {lines.map((line, i) => (
                                        <div key={i} className="CodeLine">
                                            <span className="LineNumber">{i + 1}</span>
                                            <code
                                                className="LineContent"
                                                dangerouslySetInnerHTML={{
                                                    __html: hljs.highlight(line, { language }).value
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
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