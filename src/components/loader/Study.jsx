import coffeeImg from '../../assets/coffee.png'
import vaporImg from '../../assets/vapor.png'

export default function () {

return(
  <div id="coffee">
    <img src={vaporImg} id="vapor"></img>
    <div>
      <div className="water"/>
      <img src={coffeeImg} id="maskHover"/>
    </div>
  </div>)
  
}