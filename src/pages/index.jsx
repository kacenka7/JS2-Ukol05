import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { City } from '../../public/components/City';
import { cities } from './cz-cities';



const Print = () => {
  return (
    <div className ="cityList"> 
      {cities.map((item, index) => {
       return (
        <City  index = {index} name={item.name} photo = {item.photo} population = {item.population} area = {item.area} district = {item.district} />
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

