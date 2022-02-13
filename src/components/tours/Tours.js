import './Tours.css';

const Tours = ({data}) => {
  return (
           <div className="Tours">
                {
                data.map(city => (       //functionName => { render (bla bla bla)}   , or you can do:   functionName => (bla bla bla)
                        <div key={city.id}>
                        <h2>Name : {city.name} </h2>
                        <img alt='city' src={city.image} className='img'/>
                        </div>
                ))
                }
            </div>
  )
}

export default Tours
