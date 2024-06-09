import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { City } from '../../public/components/City';
import { cities } from './cz-cities';



const Print = () => {
  return (
    <div className ="cityList"> 
      {cities.map((city) => {
       return (
          City(city.name, city.photo, city.population, city.area, city.district)
      )})
      }
    </div>
  )
}

document.querySelector('#root').innerHTML = render(
  <div className="container">
      <Print />
    </div>
);

