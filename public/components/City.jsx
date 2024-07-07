export const City = ({index, name, photo, population, area, district}) =>{

    return(
      <div className ="city" key = {index}>
            <div className="text">
                <div className="name">{name}</div>
                <div className="district">Okres: {district}</div>
                <div className='population'> Počet obyvatel: {population}</div>
                <div className='area'>Rozloha: {area}</div>
            </div>
            <div className="photo">
                <img src={photo} alt="photo"/>
            </div>
      </div>
    )
  }