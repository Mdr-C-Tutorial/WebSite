import './PlaygroundRight.css'

function PlaygroundRight() {
    return (
        <div className="PlaygroundRight">
            <iframe
                src="https://godbolt.org"
                title="Godbolt Compiler Explorer"
                width="100%"
                height="100%"
            ></iframe>
        </div>
    )
}

export default PlaygroundRight;