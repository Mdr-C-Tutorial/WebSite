import './UDE.css'
import UDELeft from './UDELeft'

function UDE() {
    return (
        <div className="UDE">
            <div className="Left">
                <UDELeft />
            </div>
            <div className="Right">
                <h1>UDE</h1>
                <p style={{ marginLeft: '.5vw' }}>Not yet implemented.</p>
            </div>
        </div>
    )
}

export default UDE;
