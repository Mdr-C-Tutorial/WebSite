import { FaRegLightbulb, FaLightbulb, FaChevronRight } from "react-icons/fa";

export default function ErrorWarning({ message, type, aied, aiMessage, model, setModel }) {
    return (
        <div className="ErrorWarning">
            <div className={["ErrorWarningLeft", aied ? "AIed" : ""].join(" ")}>
                {aied ? <FaLightbulb /> : <FaRegLightbulb />}
            </div>
            <div className={["ErrorWarningRight", aied ? "AIed" : ""].join(" ")}>
                <p className="ErrorMessage">{(type === 'error') ? (<span style={{ fontWeight: 600, color: 'red' }}>error: </span>) : <span style={{ fontWeight: 600, color: 'orange' }}>warning: </span>}{message}</p>
                {aied ? (
                    <>
                        <div className="AIMessageHead">
                            <span>解释由 AI 生成：</span>
                            <div className="ModelSelector">
                                <p>{model === 0 ? 'GPT-4o' : 'DeepSeek V3'}</p>
                                <div className="ModelList">
                                    <div className="ModelItem" onClick={() => setModel(1)}> GPT-4o </div>
                                    <div className="ModelItem" onClick={() => setModel(2)}> Gemini 1.5 Flash </div>
                                </div>
                            </div>
                        </div>
                        <p className="AIMessage">{aiMessage}</p>
                    </>
                ) : ''}
            </div>
        </div>
    )
}