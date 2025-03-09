import './CodeEditor.css';
import { useState, useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';
import { useCode } from './ContextGuide/CodeContext';

function CodeEditor() {
    const [compiler, setCompiler] = useState('GCC v14.1');
    const [compileArgs, setCompileArgs] = useState('');
    const editorRef = useRef(null);
    const monacoRef = useRef(null);
    const { editorCode, updateCode } = useCode();

    useEffect(() => {
        if (editorRef.current) {
            monacoRef.current = monaco.editor.create(editorRef.current, {
                value: editorCode,
                language: 'cpp',
                theme: 'vs-light',
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                lineNumbers: 'on',
                renderLineHighlight: 'all',
                automaticLayout: true,
                tabSize: 4,
                wordWrap: 'on'
            });

            monacoRef.current.onDidChangeModelContent(() => {
                updateCode(monacoRef.current.getValue());
            });

            return () => {
                if (monacoRef.current) {
                    monacoRef.current.dispose();
                }
            };
        }
    }, []);

    useEffect(() => {
        if (monacoRef.current && editorCode !== monacoRef.current.getValue()) {
            monacoRef.current.setValue(editorCode);
        }
    }, [editorCode]);

    return (
        <div className="CodeEditor">
            <div className="EditorToolbar">
                <select
                    value={compiler}
                    onChange={(e) => setCompiler(e.target.value)}
                    className="EditorSelector"
                >
                    <option value="gcc141">GCC v14.1</option>
                    <option value="clang19">Clang v19.0</option>
                </select>
                <input
                    type="text"
                    className="CompileArgs"
                    placeholder="编译参数"
                    value={compileArgs}
                    onChange={(e) => setCompileArgs(e.target.value)}
                />
            </div>
            <div className="EditorContent" ref={editorRef}></div>
        </div>
    );
}

export default CodeEditor;