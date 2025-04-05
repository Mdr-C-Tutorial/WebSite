import { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';
import './GuideEditor.css';

export default function GuideEditor({ value, onChange, onClick }) {
    const editorRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            editorRef.current = monaco.editor.create(containerRef.current, {
                value: value || '',
                language: 'cpp',
                theme: 'vs-dark',
                fontSize: 14,
                minimap: {
                    enabled: false
                },
                scrollbar: {
                    vertical: 'visible',
                    horizontal: 'visible'
                },
                automaticLayout: true,
                fontFamily: 'JetBrains Mono'
            });

            editorRef.current.onDidChangeModelContent(() => {
                onChange?.(editorRef.current.getValue());
            });

            return () => {
                editorRef.current?.dispose();
            };
        }
    }, []);

    return <div ref={containerRef} className="GuideEditor"
        onClick={onClick}></div>;
}