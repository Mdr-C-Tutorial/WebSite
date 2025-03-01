import './CodeRunner.css';
import { useState } from 'react';

function CodeRunner() {
    const [stdin, setStdin] = useState('');
    const [output, setOutput] = useState('');

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
                {output || '运行结果将显示在这里'}
            </div>
        </div>
    );
}

export default CodeRunner;