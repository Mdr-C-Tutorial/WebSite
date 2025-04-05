import './ErrorWarningList.css'
import ErrorWarning from './ErrorWarning'

export default function ErrorWarningList({ items = [], onAIExplain, model, setModel }) {
    return (
        <div className="ErrorWarningList">
            {items.map(item => (
                <ErrorWarning
                    key={item.id}
                    type={item.type}
                    message={item.message}
                    aiMessage={item.aiMessage}
                    aied={item.aied}
                    model={model}
                    setModel={setModel}
                    onAIExplain={() => onAIExplain(item.id)}
                />
            ))}
        </div>
    )
}