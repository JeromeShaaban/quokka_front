import coffeeImg from '../../assets/coffee.png'
import vaporImg from '../../assets/vapor.png'

export default function Study() {

return(
  <div id="coffee">
    <img src={vaporImg} alt="vapor" id="vapor"></img>
    <div>
      <div className="water"/>
      <img src={coffeeImg} alt="coffee" id="maskHover"/>
    </div>
  </div>)
  
}