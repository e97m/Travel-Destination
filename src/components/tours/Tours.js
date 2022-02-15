import './Tours.css';
import Tour from './tour/Tour'
import citiesData from '../../data/db.json'
import { Link } from "react-router-dom";

function Tours () {
  return (
    <>
       <div className="Tours">
        {
          citiesData.map(element => ( 
            <div className="card" key ={element.id}>
            <Link to={`/tour/${element.id}`}>  <Tour card={element} idKey={element.id} />  </Link>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Tours
