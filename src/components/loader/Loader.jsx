import '../../style/loader/loader.scss'
import coffeeImg from '../../assets/coffee.png'
import vaporImg from '../../assets/vapor.png'

export default function Loader ( ){
  return (
  <div className="container">
  <img src={vaporImg} id="vapor"></img>
    <div>
      <div className="water"/>
      <img src={coffeeImg} id="maskHover"/>
    </div>
    
  </div>)
}