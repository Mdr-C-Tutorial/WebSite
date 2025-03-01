import { createContext, useContext, useState, useCallback } from 'react';

const CodeContext = createContext();

export function CodeProvider({ children }) {
    const [editorCode, setEditorCode] = useState('// 在这里编写代码');
    const [isShowingAnswer, setIsShowingAnswer] = useState(false);
    const [initialCode, setInitialCode] = useState('');
    const [targetCode, setTargetCode] = useState('');

    const updateCode = (code) => {
        setEditorCode(code || '');
    };

    const setChapterCodes = useCallback((initial, target) => {
        setInitialCode(initial);
        setTargetCode(target);
        setEditorCode(initial);
    }, []);

    const toggleAnswer = () => {
        const newCode = isShowingAnswer ? initialCode : targetCode;
        setEditorCode(newCode || '');
        setIsShowingAnswer(!isShowingAnswer);
    };

    return (
        <CodeContext.Provider value={{
            editorCode,
            updateCode,
            toggleAnswer,
            isShowingAnswer,
            setChapterCodes
        }}>
            {children}
        </CodeContext.Provider>
    );
}

export const useCode = () => {
    const context = useContext(CodeContext);
    if (context === undefined) {
        throw new Error('useCode must be used within a CodeProvider');
    }
    return context;
};