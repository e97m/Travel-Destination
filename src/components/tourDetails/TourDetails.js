import './TourDetails.css';
import citiesData from '../../data/db.json'
import { useParams } from "react-router-dom";
import { useState } from 'react';

function TourDetails() {

    let { id } = useParams();
    const [readMore , setReadMore] = useState (false);
    let card = citiesData.find(element => id === element.id)
   

    return (
        <>
            <h1>Name : {card.name} </h1>
            <img alt='city' src={card.image} className='img' />
            <p>Price: {card.price}</p>
            <p>Brief:
                 {readMore? `${card.info} ` : `${card.info.substring(0,180)}... `}
                 <button onClick={() => setReadMore(!readMore)} className="btn">
                     {readMore? 'Show Less': 'Show More'}
                 </button>
            </p>
        </>
    )
}

export default TourDetails;