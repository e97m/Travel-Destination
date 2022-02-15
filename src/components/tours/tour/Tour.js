import './Tour.css';

function Tour({card , idKey}) {
    // const {card} = props

    return (
        <div className='tour' >
            <br/>
            <h1>Name : {card.name} </h1>
            <img alt='city' src={card.image} className='img' />
            <br />
            <br />
            <hr className='line' />
        </div>
    )
}

export default Tour