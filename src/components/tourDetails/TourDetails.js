import './TourDetails.css';
import citiesData from '../../data/db.json'
import { useParams } from "react-router-dom";

function TourDetails({ idKey }) {

    const {id} = useParams(idKey);

    citiesData.forEach(element => {
        if (element.id === idKey) {
            return (
                <>
                <h1>Name : {element.name} </h1>
                <img alt='city' src={element.image} className='img' /> 
                <p>Brief: {element.info}</p>
                <p>Price: {element.price}</p>
                </>
            )
        }
    })
}

export default TourDetails;