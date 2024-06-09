export const City = (name, photo, population, area, district) =>{
    return(
      <div className ="city" key = "{city}">
            <div className="text">
                <div className="name" key ="{name}">{name}</div>
                <div className="district" key ="{district}">Okres: {district}</div>
                <div className='population' key ="{name}"> Počet obyvatel: {population}</div>
                <div className='area' key ="{area}">Rozloha: {area}</div>
            </div>
            <div className="photo">
                <img src={photo} alt="photo"/>
            </div>
      </div>
    )
  }