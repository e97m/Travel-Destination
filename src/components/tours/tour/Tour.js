import './Tour.css';
import TourDetails from '../../tourDetails/TourDetails'
import { Link } from "react-router-dom";

function Tour({card , idKey}) {
    // const {card} = props
    console.log(idKey);

    function showDetails() {
        <TourDetails idKey={idKey} />
    }

    return (
        <div className='tour' >
            <h1>Name : {card.name} </h1>
            <img alt='city' src={card.image} className='img' />
            <br />
            <br />
            <Link to="/city/:id"> <button onClick={showDetails()} className='btn'>Show Details</button> </Link>
            <hr className='line' />
        </div>
    )
}

export default Tour