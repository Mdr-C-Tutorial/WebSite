import './Card.css'
export default function Card(props) {
    return (
        <div className={['Card', props.color === 1 ? 'Yellow' : props.color === 2 ? 'Green' : props.color === 3 ? 'Cyan' : ''].join(' ')}>
            {props.children}
        </div>
    )

}