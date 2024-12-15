import './OJ.css'
import OJRight from './OJRight'

function OJ(){
    return(
        <div className="OJ">
            <div className="Left">
                <h1>Mdr OJ</h1>
                <p style={{marginLeft:'.5vw'}}>Check Your correctness</p>
                <h2 style={{marginLeft:'.5vw'}}>ps: Powered by HydroOJ</h2>
            </div>
            <div className="Right">
                <OJRight/>
            </div>
        </div>
    )
}

export default OJ;