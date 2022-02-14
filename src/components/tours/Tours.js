import './Tours.css';
import Tour from './tour/Tour'
import citiesData from '../../data/db.json'


function Tours () {
  return (
    <>
       <div className="Tours">
        {
          citiesData.map(element => (      
            <Tour card={element} idKey={element.id}/>
          ))
        }
      </div>
    </>
  )
}

export default Tours
