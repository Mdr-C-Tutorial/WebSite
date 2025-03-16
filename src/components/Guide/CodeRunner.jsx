import './CodeRunner.css';
import { useState } from 'react';

function CodeRunner({ success = false, output = 'error warning' }) {
    const [stdin, setStdin] = useState('');

    const formatOutput = (text) => {
        if (success) return text;

        return text.split(/(error|warning)/).map((part, index) => {
            if (part.toLowerCase() === 'error') {
                return <span key={index} className="error">error</span>;
            }
            if (part.toLowerCase() === 'warning') {
                return <span key={index} className="warning">warning</span>;
            }
            return part;
        });
    };

    return (
        <div className="CodeRunner">
            <div className="RunnerToolbar">
                <input
                    type="text"
                    className="StdinInput"
                    placeholder="输入 stdin"
                    value={stdin}
                    onChange={(e) => setStdin(e.target.value)}
                />
            </div>
            <div className="RunnerOutput">
                {formatOutput(output)}
            </div>
        </div>
    );
}

export default CodeRunner;