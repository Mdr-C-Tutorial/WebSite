import './ResultBlock.css'
import { Link } from 'react-router-dom'
import ParseSentence from '../mess/markdownparser'

function ResultBlock({ title, description, link }) {
    return (
        <div className="ResultBlock">
            <Link to={link} target={"blank"}>
                <h1>{title}</h1>
            </Link>
            <ParseSentence str={description} inline={false} />
        </div>
    )

}

export default ResultBlock
